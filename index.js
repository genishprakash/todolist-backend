const express=require('express');
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const cors=require('cors');
const bodyParser=require('body-parser');

app.use(bodyParser.json());

dotenv.config()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
const PORT=4000


app.get('/', (req, res) => {
    res.send('Hello World, from express');
})

app.listen(PORT,()=>{
    console.log(`Sever listening on port :${PORT}`)
})