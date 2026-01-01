import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// ES module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "../../dist/public");

  if (!fs.existsSync(distPath)) {
    throw new Error(`Static files not found at ${distPath}`);
  }

  app.use(express.static(distPath));
  
  // Serve index.html for all other routes (SPA support)
  app.get("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
