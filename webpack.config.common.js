const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

const rootPath = path.resolve(__dirname, "./");
const srcPath = path.resolve(rootPath, "src");
const libPath = path.resolve(rootPath, "lib");

module.exports = {
  entry: srcPath + "/index.ts",
  output: {
    path: libPath,
    filename: "index.js",
    library: "VQRCodeStyling",
    libraryTarget: "umd",
    libraryExport: "default"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
        exclude: /node_modules/
      },
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      }
    ]
  },
  plugins: [new VueLoaderPlugin(), new CleanWebpackPlugin()],
  resolve: {
    extensions: [".ts", ".js", ".vue"]
  },
  externals: {
    // define module 'vue' which will point to window.Vue in result bundle
    vue: "vue",
    compilerSfc: "@vue/compiler-sfc",
    vueQrcode: "chenfengyuan/vue-qrcode",
    qrcodeGenerator: "qrcode-generator"
  }
};
