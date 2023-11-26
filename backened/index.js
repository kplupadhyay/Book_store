import express from "express";
import {PORT , mongo_url} from "./config.js";
import cors from "cors";
// import {Book} from "./models/Bookmodels.js"np
import mongoose from "mongoose";
import Bookrouter from "./routes/bookRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/books" , Bookrouter)





mongoose.connect(mongo_url).then(()=>{
    console.log("connected to db");
    app.listen(PORT , ()=>{
        console.log(`App is listening on port  ${PORT}`)
    });

}).catch((e)=>{
    console.log(e)
});

