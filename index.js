const express = require('express');
require('dotenv').config();
const app = express();

app.use(express.json());

app.use('/api/persona', require('./routes/persona'));

app.listen(process.env.PORT, () => {
    console.log(`Running on PORT ${process.env.PORT}`);
});
