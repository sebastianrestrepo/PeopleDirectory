const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Working!'));

app.listen(6060, () => console.log('Example app listening on port 6060!'));