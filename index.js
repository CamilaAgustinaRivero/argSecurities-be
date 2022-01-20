const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/api/persona', require('./routes/persona'));


app.listen(process.env.PORT, () => {
    console.log(`Running on PORT ${process.env.PORT}`);
});
