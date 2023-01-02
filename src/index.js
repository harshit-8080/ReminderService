

const bodyParser = require("body-parser");
const express = require("express");
const {PORT} = require("./config/server.config.js");
const app = express();


const setupAndStartServer = async (req, res) => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));


    app.listen(PORT, (req, res) => {
        console.clear();
        console.log(`Server started at ${PORT}`);
    })

}

setupAndStartServer();