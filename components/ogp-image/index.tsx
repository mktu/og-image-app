import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

const App = () => <div>Use React !!</div>;

const target = () => `
  <!DOCTYPE html>
  <html lang="ja">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>タイトル</title>
  </head>
  <body>
    ${renderToStaticMarkup(<App />)}
  </body>
  </html>
`;

export default target