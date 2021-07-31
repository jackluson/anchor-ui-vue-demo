module.exports = {
  chainWebpack: (config) => {
    config.externals({
      vue: "Vue",
      "element-ui": "ELEMENT",
    });
  },
};
