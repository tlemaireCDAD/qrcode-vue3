// vite.config.ts
import { defineConfig } from "file:///home/scholtz/src/qrcode-vue3/node_modules/vite/dist/node/index.js";
import vue from "file:///home/scholtz/src/qrcode-vue3/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import * as path from "path";
import typescript2 from "file:///home/scholtz/src/qrcode-vue3/node_modules/rollup-plugin-typescript2/dist/rollup-plugin-typescript2.cjs.js";
import dts from "file:///home/scholtz/src/qrcode-vue3/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/home/scholtz/src/qrcode-vue3";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true
    }),
    typescript2({
      check: false,
      include: ["src/**/*.vue"],
      tsconfigOverride: {
        compilerOptions: {
          outDir: "dist",
          sourceMap: true,
          declaration: true,
          declarationMap: true
        }
      },
      exclude: ["vite.config.ts"]
    })
  ],
  build: {
    cssCodeSplit: true,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: "src/index.ts",
      name: "QRCodeVue3",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `index.${format}.js`
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9zY2hvbHR6L3NyYy9xcmNvZGUtdnVlM1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvc2Nob2x0ei9zcmMvcXJjb2RlLXZ1ZTMvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvc2Nob2x0ei9zcmMvcXJjb2RlLXZ1ZTMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgdHlwZXNjcmlwdDIgZnJvbSBcInJvbGx1cC1wbHVnaW4tdHlwZXNjcmlwdDJcIjtcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIGR0cyh7XG4gICAgICBpbnNlcnRUeXBlc0VudHJ5OiB0cnVlXG4gICAgfSksXG4gICAgdHlwZXNjcmlwdDIoe1xuICAgICAgY2hlY2s6IGZhbHNlLFxuICAgICAgaW5jbHVkZTogW1wic3JjLyoqLyoudnVlXCJdLFxuICAgICAgdHNjb25maWdPdmVycmlkZToge1xuICAgICAgICBjb21waWxlck9wdGlvbnM6IHtcbiAgICAgICAgICBvdXREaXI6IFwiZGlzdFwiLFxuICAgICAgICAgIHNvdXJjZU1hcDogdHJ1ZSxcbiAgICAgICAgICBkZWNsYXJhdGlvbjogdHJ1ZSxcbiAgICAgICAgICBkZWNsYXJhdGlvbk1hcDogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXhjbHVkZTogW1widml0ZS5jb25maWcudHNcIl1cbiAgICB9KVxuICBdLFxuICBidWlsZDoge1xuICAgIGNzc0NvZGVTcGxpdDogdHJ1ZSxcbiAgICBsaWI6IHtcbiAgICAgIC8vIENvdWxkIGFsc28gYmUgYSBkaWN0aW9uYXJ5IG9yIGFycmF5IG9mIG11bHRpcGxlIGVudHJ5IHBvaW50c1xuICAgICAgZW50cnk6IFwic3JjL2luZGV4LnRzXCIsXG4gICAgICBuYW1lOiBcIlFSQ29kZVZ1ZTNcIixcbiAgICAgIGZvcm1hdHM6IFtcImVzXCIsIFwiY2pzXCIsIFwidW1kXCJdLFxuICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGBpbmRleC4ke2Zvcm1hdH0uanNgXG4gICAgfVxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiKVxuICAgIH1cbiAgfVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlRLFNBQVMsb0JBQW9CO0FBQ3RTLE9BQU8sU0FBUztBQUNoQixZQUFZLFVBQVU7QUFDdEIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxTQUFTO0FBSmhCLElBQU0sbUNBQW1DO0FBT3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLElBQUk7QUFBQSxNQUNGLGtCQUFrQjtBQUFBLElBQ3BCLENBQUM7QUFBQSxJQUNELFlBQVk7QUFBQSxNQUNWLE9BQU87QUFBQSxNQUNQLFNBQVMsQ0FBQyxjQUFjO0FBQUEsTUFDeEIsa0JBQWtCO0FBQUEsUUFDaEIsaUJBQWlCO0FBQUEsVUFDZixRQUFRO0FBQUEsVUFDUixXQUFXO0FBQUEsVUFDWCxhQUFhO0FBQUEsVUFDYixnQkFBZ0I7QUFBQSxRQUNsQjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFNBQVMsQ0FBQyxnQkFBZ0I7QUFBQSxJQUM1QixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsY0FBYztBQUFBLElBQ2QsS0FBSztBQUFBO0FBQUEsTUFFSCxPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixTQUFTLENBQUMsTUFBTSxPQUFPLEtBQUs7QUFBQSxNQUM1QixVQUFVLENBQUMsV0FBVyxTQUFTO0FBQUEsSUFDakM7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFVLGFBQVEsa0NBQVcsS0FBSztBQUFBLElBQ3BDO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
