const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require ('./routes')

const app = express()

mongoose.connect('mongodb+srv://renatoalencar:alencar123@cluster0-cwjg1.mongodb.net/rocketseat?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true

})


app.use(cors())
app.use(express.json());
app.use(routes);


app.listen(3334)