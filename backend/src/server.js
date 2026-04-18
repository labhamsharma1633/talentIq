import express from "express";
import cors from "cors";
import { serve } from "inngest/express";
import { clerkMiddleware } from "@clerk/express";

import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { inngest, functions } from "./lib/inngest.js";

import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoute.js";

const app = express();

// ✅ IMPORTANT for Render (cookies + proxy)
app.set("trust proxy", 1);

// ✅ Allowed origins (local + production)
const allowedOrigins = [
  "http://localhost:5173",
  ENV.CLIENT_URL || "",
];

// middleware
app.use(express.json());

// ✅ FIXED CORS (dynamic)
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(clerkMiddleware());

// routes
app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);

// health check
app.get("/health", (req, res) => {
  res.status(200).json({ msg: "api is up and running" });
});

// ✅ Start server
const startServer = async () => {
  try {
    await connectDB();

    const PORT = ENV.PORT || 5000;

    app.listen(PORT, () => {
      console.log("Server is running on port:", PORT);
    });
  } catch (error) {
    console.error("💥 Error starting the server", error);
  }
};

startServer();