import express from 'express';

const expressApp = express();
expressApp.use("/",(req,res)=>{
    res.end("hello world");
});

expressApp.listen(8080,()=>{
    console.log("Server started at : http://localhost:8080");
});