require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors({
  methods:"GET,POST"
}))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/send",require("./controller/app"));


app.listen(3000,()=>{
  console.log("Server Started")
});