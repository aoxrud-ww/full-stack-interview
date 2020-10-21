const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());

app.get('/notifications', (req, res) => {
  const notifications = [
    { id: 1, unixTimestamp: 1, message: "Older" },
    { id: 2, unixTimestamp: 2, message: "Newer" },
    { id: 3, unixTimestamp: 0, message: "Oldest" },
    { id: 4, unixTimestamp: 5, message: "Newest" }
  ];

  res.json(notifications);
})

app.post('/', (req, res) => {
  console.log(req.body);
  res.json({ success: true });
})

app.use(express.static(path.join(__dirname, '../client')))

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})