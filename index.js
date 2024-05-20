const express=require('express');
const app=express();
const dotenv=require('dotenv');
const cors=require('cors');
const bodyParser=require('body-parser');
const connectdb=require('./conndb.js');

dotenv.config()

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT=4000

connectdb()


// app.get('/', (req, res) => {
//     const data = 200; // Value you want to send
//     console.log('Sending response:', data);
    
//     res.send({ value: data });
// });
app.use("/api/projects",require("./routes/projects"))
//app.use("/api/tasks",require("./routes/tasks"))



app.listen(PORT,()=>{
    console.log(`Sever listening on port :${PORT}`)
})