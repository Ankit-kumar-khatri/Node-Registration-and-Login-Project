const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/General_Table").then(() => console.log("Connection to database successfull")).catch(() => (console.log("Connection to database not established")));

