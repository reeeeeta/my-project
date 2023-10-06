// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

//vue.config.js
// console.log("\x1b[100m", `MODE=${MODE} start...`);

let outputDir = "docs";
let webTitle = "my-project";

module.exports = {
  productionSourceMap: false,
  // publicPath: '/test-google-translate-select',
  publicPath: "./",
  pages: {
    index: {
      entry: "./src/main.js",
      title: `${webTitle}`,
    },
  },
  outputDir: outputDir,
};
