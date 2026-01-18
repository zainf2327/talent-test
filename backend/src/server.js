import express from 'express';
import path from 'path';
import {ENV} from './lib/env.js';

const app=express();

const __dirname=path.resolve()


const PORT=ENV.PORT|| 3000;
app.listen(3000,()=>{
    console.log(`Server is running on localhost:${PORT}`)
})

app.get("/help",(req,res)=>{
    res.json({
        message:"Help Api Message"
    })
})


// For Production
if(ENV.NODE_ENV==="production") {
    app.use(express.static(path.join(__dirname,"../frontend/dist")));

    app.get("/{*any}",(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
    })
}


