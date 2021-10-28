const fs = require("fs");
const path = require("path");
const express = require("express");

const React = require("react");
const ReactDOMServer = require("react-dom/server");

const app = express();
const port = 3000;

const { App } = require("./src/App.jsx");

app.get("/", async function (req, res) {
  try {
    const data = fs.readFileSync(path.resolve("./build/index.html"), "utf-8");

    // Server Side Rendering
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
      )
    );
  } catch (error) {
    return res.send("error");
  }
});
app.use(express.static("build"));

app.listen(port, () => {
  console.log(`Example app listening 2at http://localhost:${port}`);
});
