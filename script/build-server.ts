import { build } from "esbuild";
import { rm } from "fs/promises";

async function buildServer() {
  await rm("dist/index.cjs", { force: true });

  console.log("building server...");
  
  await build({
    entryPoints: ["server/index.ts"],
    platform: "node",
    bundle: true,
    format: "cjs",
    outfile: "dist/index.cjs",
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    minify: true,
    external: [
      // Node.js built-ins
      "node:fs",
      "node:path",
      "node:url",
      "node:http",
      "node:https",
      "node:stream",
      "node:util",
      "node:crypto",
      "node:buffer",
      "node:events",
      "node:net",
      "node:tls",
      "node:zlib",
      "node:child_process",
      "node:os",
      
      // Dependencies
      "pg",
      "express",
      "cors",
      "zod",
      "drizzle-orm",
      "drizzle-zod",
      "express-session",
      "memorystore",
      "connect-pg-simple",
      "passport",
      "passport-local",
      "ws",
      "date-fns",
    ],
    logLevel: "info",
  });
  
  console.log("server built successfully");
}

buildServer().catch((err) => {
  console.error(err);
  process.exit(1);
});