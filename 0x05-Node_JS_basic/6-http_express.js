const express = require('express');

/**
 * Create a small HTTP server using Express
 */
const app = express();
const port = 1245;

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`Server listening on PORT ${port}`);
});

module.exports = app;
