const mongoose = require("mongoose");

async function main() {
    try {
        mongoose.set("strictQuery", true);

        await mongoose.connect(
            "mongodb+srv://sofia:PETwHIMuMahTvZ2F@cluster0.aultccj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        );

        console.log("Conectado ao banco!");
    } catch (error) {
        console.log(`Erro: ${error}`);
    }
}

module.exports = main;