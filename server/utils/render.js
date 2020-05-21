const { green } = require("chalk");
const { errorHandler } = require("./errorHandler");

const isProd = process.env.NODE_ENV === "production";

async function render(bundleRenderer, context, req, res) {
  const now = Date.now();

  res.setHeader("Content-Type", "text/html");

  try {
    const content = await bundleRenderer.renderToString(context);

    const html = `
<!DOCTYPE html>
<html>
  <head>
    ${context.renderResourceHints()}
    ${context.renderStyles()}
    <title>Hello Vue 3</title>
  </head>
  <body>
    <div id="app">${content}</div>
    ${context.renderScripts()}
  </body>
</html>  
    `.trim();

    res.send(html);

    if (!isProd) {
      // eslint-disable-next-line no-console
      console.log(green(`Whole request took: ${Date.now() - now}ms`));
    }
  } catch (err) {
    errorHandler(err, req, res);
  }
}

module.exports = { render };
