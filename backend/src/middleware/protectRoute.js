import { requireAuth, clerkClient } from "@clerk/express";
import User from "../models/User.js";

export const protectRoute = [
  requireAuth(),
  async (req, res, next) => {
    try {
      const { userId } = req.auth();

      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      let user = await User.findOne({ clerkId: userId });

      // 🔥 If user doesn't exist → fetch from Clerk
      if (!user) {
        const clerkUser = await clerkClient.users.getUser(userId);

        const email = clerkUser.emailAddresses?.[0]?.emailAddress;
        const firstName = clerkUser.firstName || "";
        const lastName = clerkUser.lastName || "";

        user = await User.create({
          clerkId: userId,
          email: email,
          name: `${firstName} ${lastName}`.trim() || "No Name",
          profileImage: clerkUser.imageUrl || "",
        });

        console.log("New user created:", user.email);
      }

      req.user = user;
      next();
    } catch (error) {
      console.error("Error in protectRoute middleware:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
];