const express = require('express');
const googleTrends = require('google-trends-api');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));