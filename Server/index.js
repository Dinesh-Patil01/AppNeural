const express = require("express");
const dotenv = require("dotenv").config();
const connection = require("./config/db")
const router = require("./routes/task.routes")
const cors = require("cors")

// dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// (middleware)
const corsOptions = {
    origin: 'http://localhost:3000', 
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/task/",router)


app.get("/",(req,res)=>{
    res.send("Hello Coders")
})

app.listen(PORT, async()=>{
    try {
        await connection;
        console.log(`Server is running on Port ${PORT} & Connected to DB`) 
    } catch (error) {
        console.log(`Error occur in connecting to DB ${error}`)
    }
   
})