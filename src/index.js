const express = require('express');
const app = express();
const { config } = require('./Config/index');
const apiRouter = require('./Routes/index');
//body-parser middleware
app.use(express.json());

//runDatabase
require('./Lib/Mysql');

//rutas
app.use('/api', apiRouter);

app.listen(config.port, () => {
  console.log(`Listenig http://localhost:${config.port}`);
});
