// Import express
const express = require("express");
// Dichiaro l'istanza di express
const app = express();
// Dichiariamo la porta usare
const port = 3000;
// Importo Router e rotte
const router = require("./routers/posts");

// Imposto rotta di default
app.get("/", (req, res) => {
    res.send("<h1>Server</h1>")
})


app.listen(port, () => {
    console.log(`Ascolto della porta ${port}`);
});