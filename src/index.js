const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors =  require('cors');

const app = express();

mongoose.connect('mongodb://admin:admin@cluster0-shard-00-00.cdxvv.mongodb.net:27017,cluster0-shard-00-01.cdxvv.mongodb.net:27017,cluster0-shard-00-02.cdxvv.mongodb.net:27017/AppUsers?ssl=true&replicaSet=atlas-13u9n6-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333);