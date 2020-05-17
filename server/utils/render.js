const { green } = require("chalk");
const { errorHandler } = require("./errorHandler");

const isProd = process.env.NODE_ENV === "production";

async function render(bundleRenderer, context, req, res) {
  const now = Date.now();

  res.setHeader("Content-Type", "text/html");

  try {
    const html = await bundleRenderer.renderToString(context);

    res.send(
      `
<!DOCTYPE html>
<html>
  <head>
    ${context.renderResourceHints()}
    ${context.renderStyles()}
    <title>Hello Vue 3</title>
  </head>
  <body>
    <div id="app">${html}</div>

    ${context.renderScripts()}
  </body>
</html>
    `.trim(),
    );

    if (!isProd) {
      console.log(green(`Whole request took: ${Date.now() - now}ms`));
    }
  } catch (err) {
    errorHandler(err, req, res);
  }
}

module.exports = { render };
