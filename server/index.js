const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');

const {
  getIpsum,
  addIpsum,
  deleteIpsum,
  addHistory,
  putIpsum,
} = require('./controllers/mainCtrl');

const port = 3001;

const app = express();
app.use(cors());
app.use(json());

app.get('/api/ipsum', getIpsum);
app.post('/api/ipsum', addIpsum);
app.post('/api/history/', addHistory);
app.delete('/api/ipsum/:id', deleteIpsum);
app.put('/api/ipsum/:id/:string', putIpsum);


//app.get(`/api/${latingString}`) //translate


app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});