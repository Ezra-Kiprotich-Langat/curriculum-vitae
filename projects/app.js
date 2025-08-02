const express = require("express")
const app = express()
const path =require('path')
const port = 4500

app.use( '/static', express.static(path.join(__dirname,'public')))

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})