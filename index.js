const express=require('express');
const app=express();
const dotenv=require('dotenv');
const cors=require('cors');
const bodyParser=require('body-parser');
const conndb=require('./conndb.js');

app.use(bodyParser.json());

dotenv.config()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
const PORT=4000


conndb()

app.get('/', (req, res) => {
    res.send('Hello World, from express');
})

app.listen(PORT,()=>{
    console.log(`Sever listening on port :${PORT}`)
})