let express = require("express");
const React = require("react");

let app = express();
const port = 3000;

let ReactDOMServer = require("react-dom/server");
const Page = require("./Page");
app.get("/", function (req, res) {
  const content = ReactDOMServer.renderToString(
    <Page>
      <div>Hello World</div>
    </Page>
  );
  res.send(content);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
