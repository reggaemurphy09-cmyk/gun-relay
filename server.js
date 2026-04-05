const express = require('express');
const Gun = require('gun');
const app = express();
const port = process.env.PORT || 3000;

app.use(Gun.serve);
app.use(express.static(__dirname));

const server = app.listen(port, () => {
  console.log('Gun relay running on port ' + port);
});

Gun({ web: server });
