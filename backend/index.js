import express from "express";
import { PORT , mongoDBURL} from "./config.js";
import mongoose from 'mongoose';

const app = express();

app.get('/', (request,response) =>{
    console.log(request)
    return response.status(234).send("hello")
});
app.listen(PORT ,() =>{
    console.log(`App is listen to port: ${PORT}`);
});

mongoose.connect(mongoDBURL).then(()=>{
    console.log('App connected to database');
}).catch((error)=>{
    console.error(error);
});