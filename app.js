const express = require('express')
const app = express()

const port = process.env.PORT || 2700

app.get('/',(req,res)=>{
    res.sendfile('index.html')
})

app.use(express.static(__dirname + '/public'))

app.listen(port,()=>{
    console.log(`Listening to the port ${port}`);
})