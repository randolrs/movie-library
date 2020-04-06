const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

const api_key = '147c68fabc489327e9f7d525cfd98261';

const convertParamsToString = (obj) => {
  return Object.entries(obj).map(([key, val]) => {
    return `${ key }=${ val }`
  }).join('&');
}

app.get('/api/movies/:query', function (req, res) {
  const { query } = req.params;

  const queryString = convertParamsToString({
    query, api_key
  });

  axios.get(`https://api.themoviedb.org/3/search/movie?${ queryString }`)
  .then(response => {
    return res.send(response.data);
  })
  .catch(err => {
    // potential optimazation: better request error handling
  })
});

app.get('/api/movie/:id', function (req, res) {
  const { id } = req.params;

  const queryString = convertParamsToString({
    api_key
  });

  axios.get(`https://api.themoviedb.org/3/movie/${id}?${queryString}`)
  .then(response => {
    return res.send(response.data);
  })
  .catch(err => {
    // potential optimazation: better request error handling
  })
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);

