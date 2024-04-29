const mongoose = require('mongoose');

let conexion = "mongodb+srv://UTS:uts2024@uts.ccyqodk.mongodb.net/Dev2024E192?retryWrites=true&w=majority&appName=UTS";

mongoose.connect(conexion)
    .then(event => console.log("Conectado a Mongo"))
    .catch(error => console.log(error));

module.exports = mongoose;



