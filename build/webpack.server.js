const webpack = require("webpack");
const merge = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const { VueSSRServerPlugin } = require("./plugins/server");

const baseConfig = require("./webpack.base");

module.exports = merge(baseConfig, {
  entry: "./src/entry-server.js",

  output: {
    filename: "server-bundle.js",
    // This tells the server bundle to use Node-style exports
    libraryTarget: "commonjs2",
  },

  target: "node",

  devtool: "source-map",

  externals: nodeExternals({
    // do not externalize dependencies that need to be processed by webpack.
    // you can add more file types here e.g. raw *.vue files
    // you should also whitelist deps that modifies `global` (e.g. polyfills)
    whitelist: [/\.css$/, /\?vue&type=style/],
  }),

  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development",
      ),
      "process.env.VUE_ENV": '"server"',
      "process.browser": false,
      "process.server": true,
    }),

    new VueSSRServerPlugin(),
  ],
});
