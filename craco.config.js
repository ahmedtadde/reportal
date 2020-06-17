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
  plugins,
};
