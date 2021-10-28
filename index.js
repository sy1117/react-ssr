require("@babel/register")({
  ignore: [/(node_module)/],
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-transform-react-jsx",
    "@babel/plugin-proposal-async-generator-functions",
  ],
});

require("./server");
