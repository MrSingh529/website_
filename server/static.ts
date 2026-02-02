import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  const distPath = path.join(process.cwd(), "dist", "public");
  
  console.log(`Attempting to serve static files from: ${distPath}`);
  console.log(`process.cwd() is: ${process.cwd()}`);
  console.log(`__dirname is: ${__dirname}`);
  
  try {
    const distContents = fs.readdirSync(path.join(process.cwd(), "dist"));
    console.log(`Contents of dist directory: ${distContents.join(", ")}`);
  } catch (e) {
    console.error(`Could not read dist directory:`, e);
  }
  
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));
  app.get("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}