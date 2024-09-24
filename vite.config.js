import { resolve } from "path";
import { build, defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                news: resolve(__dirname, "news.html"),
            },
        },
    },
});