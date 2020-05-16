const path = require("path");
const express = require("express");
const serveFavicon = require("serve-favicon");
const compression = require("compression");
const vueServerRenderer = require("@vue/server-renderer");
const { createBundleRenderer } = require("vue-bundle-renderer");
const { render } = require("./utils/render");

const app = express();
const isProd = process.env.NODE_ENV === "production";

app.use(compression());
app.use(serveFavicon(path.resolve(__dirname, "./public/favicon.ico")));
app.use("/public", express.static(path.resolve(__dirname, "./public")));
app.use("/dist", express.static(path.resolve(__dirname, "../dist")));

let renderer;
let readyPromise;

if (isProd) {
  const serverBundle = require("../dist/vue-ssr-server-bundle.json");
  const clientManifest = require("../dist/vue-ssr-client-manifest.json");

  renderer = createBundleRenderer(serverBundle, {
    clientManifest,
    runInNewContext: false,
    vueServerRenderer,
  });
} else {
  const devServer = require("../build/dev-server");

  readyPromise = devServer(app, (serverBundle, options) => {
    renderer = createBundleRenderer(serverBundle, {
      runInNewContext: false,
      vueServerRenderer,
      ...options,
    });
  });
}

function renderPage(req, res) {
  const context = {
    req,
  };

  if (isProd) {
    render(renderer, context, req, res);
  } else {
    readyPromise.then(() => render(renderer, context, req, res));
  }
}

app.get("*", renderPage);

module.exports = app;
