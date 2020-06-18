const path = require("path");
const CracoAntDesignPlugin = require("craco-antd");
const CracoAlias = require("craco-alias");

const plugins = [
  {
    plugin: CracoAntDesignPlugin,
    options: {
      customizeTheme: {
        "@primary-color": "#0d2439",
        "@link-color": "#3986e3",
      },
    },
  },
  {
    plugin: CracoAlias,
    options: {
      source: "tsconfig",
      baseUrl: ".",
      tsConfigPath: "./tsconfig.aliases.json",
    },
  },
];

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@datatypes": path.resolve(__dirname, "src/datatypes"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@programs": path.resolve(__dirname, "src/programs"),
      "@views": path.resolve(__dirname, "src/views"),
      "@config": path.resolve(__dirname, "src/config"),
    },
    /* Any webpack configuration options: https://webpack.js.org/configuration */
    configure: {
      output: { path: path.resolve(__dirname, "build") },
    },
  },
  plugins,
};
