import { defineConfig } from "tsup";

export default defineConfig((options) => {
  return {
    outDir: "./",
    // entry: ["src/core/main.ts", "src/std/main.ts"],
    entry: {
      core: "src/core/index.ts",
      std: "src/std/index.ts",
    },
    dts: true,
    minify: !options.watch,
  };
});
