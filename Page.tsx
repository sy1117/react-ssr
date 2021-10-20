const React = require("react");

const Html = ({ preloadState, script, appComponent, children }) => {
  return (
    <html className="no-js" lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>React Server-Side Rendering</title>
        <script dangerouslySetInnerHTML={{ __html: preloadState }}></script>
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: appComponent }} />
        <script src={script} />
        {children}
      </body>
    </html>
  );
};

module.exports = Html;
