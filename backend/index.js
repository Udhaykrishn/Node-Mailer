const express = require('express')
const nodeMailer = require('nodemailer')
const app = express();
const cors = require('cors')
require('dotenv').config();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.listen(3000)

app.post('/send',(req,res)=>{
    const {message,title,email } = req.body
    res.send("Hello")
    const trans = nodeMailer.createTransport({
        service:"gmail",
        auth:{
            user:process.env.EMAIL,
            pass:process.env.PASSWORD
        }
    })

    const mailOpition = {
        from:process.env.EMAIL,
        to:email,
        subject:title,
        text:message
    }

    trans.sendMail(mailOpition,(err,info)=>{
        if(err){
            throw err
        }else{
            console.log(`Email send: ${info.response}`)
        }
    })
})