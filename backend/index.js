const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const posts = require('./routes/posts');

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://127.0.0.1/bulletin_board', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(bodyParser.json());

app.use('/api/posts', posts);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
