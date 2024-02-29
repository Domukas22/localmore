import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import process from "process";

// Use Node's process.env to check if in production
const isProduction = process.env.NODE_ENV === "production";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/localmore/",
  base: isProduction ? "/localmore/" : "/",
  plugins: [react()],
});
