import express from "express";
import cors from "cors";

import  studentRoute  from "./routes/students";

const app=express();
const PORT= process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/",studentRoute);

app.listen(PORT, ()=>{
    console.log(`Server runnig on PORT: ${PORT}`);
});