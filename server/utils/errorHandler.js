const { red } = require("chalk");

function errorHandler(err, req, res) {
  if (err.url) {
    res.redirect(err.url);
  } else if (err.code === 404) {
    res.status(404).send("404 | Page Not Found");
  } else {
    // Render Error Page or Redirect
    res.status(500).send("500 | Internal Server Error");

    console.error(red(`error during render : ${req.url}`));
    console.error(red(err.stack));
  }
}

module.exports = { errorHandler };
