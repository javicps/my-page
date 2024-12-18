import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/my-page/",
  test: {
    globals: true, // Allows using global test functions like test, expect
    environment: "jsdom", // Simulates a browser-like environment for testing React components
  },
});
