const express = require('express');

const app = express();
app.get((_req, res) => {
  res.write('Hello World!');
  res.end();
});

app.listen(3000, () => {
  console.log('Hello World!');
});
