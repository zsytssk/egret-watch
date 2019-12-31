"use strict";
const path = require("path");

module.exports = {
  devtool: "eval-source-map",
  watch: true,
  entry: ["./test/test.ts"],
  output: {
    filename: "test.js",
    path: path.join(__dirname, "src/static")
  },
  resolve: {
    modules: [path.resolve("./test"), path.resolve("./node_modules")],
    extensions: [".ts", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.(.*)?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true
        }
      }
    ]
  }
};
