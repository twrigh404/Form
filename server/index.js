import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import App from '../src/app';

const PORT = process.env.PORT || 3006;
const app = express();



app.get('/', (req,res) => {
  const app = ReactDOMServer.renderToStrong(<App />);

  const indexFile = path.resolve('./public/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong',err);
      return res.status(500).send('oops, better luck next time!');
    }
    return res.send(data.replace('<div id="root"></div>', `<div id="root">${app}</div>`));
  });
});


app.use(express.static('./public'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})
