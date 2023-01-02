const bodyParser = require("body-parser");
const express = require("express");
const {PORT} = require("./config/server.config.js");
const app = express();
const sendMail = require("./utils/sendMail");


const setupAndStartServer = async (req, res) => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));


    app.listen(PORT, (req, res) => {
        console.clear();
        console.log(`Server started at ${PORT}`);

        sendMail(
            
            "airlinebooking12@gmail.com",
            "harshitrajlnctcse@gmail.com",
            "Testing Mail",
            "Hey This is Body Test"

        )
    })

}

setupAndStartServer();