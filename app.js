// Import express
const express = require("express");
// Dichiaro l'istanza di express
const app = express();
// Dichiariamo la porta usare
const port = 3000;
// Importo Router e rotte
const router = require("./routers/posts");

// Importo i middleware
const notFound = require("./middlewares/notFound")
// Utilizzo il middleware per tutti i path
app.use(notFound)

// Imposto il body-parser
app.use(express.json());


// Imposto rotta di default
app.get("/", (req, res) => {
    res.send("<h1>Server</h1>")
});

app.use(express.static("public"));

// Imposto la rotta per le chiamate CRUD
app.use("/posts", router);


// Ascolto per la porta
app.listen(port, () => {
    console.log(`Ascolto della porta ${port}`);
});