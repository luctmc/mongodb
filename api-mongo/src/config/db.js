const mongoose = require('mongoose');

mongoose.connect("mongodb://admin:secret@localhost:27017",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error",console.error.bind(console, "Erro na conexão com o Mongo"));
bd.once("open", () => {
    console.log("Conectado ao Mongo")
})

module.exports = db;