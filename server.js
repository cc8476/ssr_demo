const express = require('express');
const app = express();
const React = require('react');
const {renderToString} = require('react-dom/server');
import App from './App';

app.use(express.static("dist/server"))


app.get('/',function(req,res){
  const content = renderToString(React.createElement(App));
  res.send(`
  <!doctype html>
  <html>
      <title>ssr</title>
      <body>
          <div id="root">${content}</div>
          <script src="./client.js"></script>
      </body> 
  </html>
`);
});
app.listen(3000);