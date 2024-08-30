import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "vite-plugin-imagetools",
      enforce: "pre",
      transform(code, id) {
        if (/\.(svg|png|jpg|jpeg|gif|bmp)$/.test(id)) {
          return {
            code: `import { Image } from '@vite-plugin-imagetools';`,
            map: null,
          };
        }
      },
    },
  ],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
