// faccio logica funzioni

// Importo array
const recipe = require("../data/recipe");

// Index
function index(req, res) {
    // res.json(recipe);
    let filteredRecipe = recipe;

    

};

// Show
function show(req, res) {
    const ricetta = recipe.find((i) => i.id === parseInt(req.params.id));

    if (!ricetta) {
        return res.status(404).json({
            error: "Not Found",
            message: "Ricetta non trovata"
        })
    }
    res.json(ricetta);
};

// Store
function store(req, res) {
    res.send("Creata nuova ricetta");
}

// Update
function update(req, res) {
    res.send("Modifica ricetta " + req.params.id);
}

// Modify
function modify(req, res) {
    res.send("Modifica parziale " + req.params.id);
}

// Destroy
function destroy(req, res) {
    // Per fare una ricerca per id, forziamo l'id come numero in parse
    // Comparazione tra id inserito nella barra di ricerca e id array
    const ricetta = recipe.find((i) => i.id === parseInt(req.params.id));

    // Se non è presente l'id, diamo messaggio di errore
    if (!ricetta) {
        // Imposto status di errore 404
        // Finisce la funzione e restituisce un json con le info
        return res.status(404).json({
            error: "Not Found",
            message: "Ricetta non trovata"
        })
    }

    // Rimuovere la ricetta
    recipe.splice(recipe.indexOf(ricetta), 1);

    // Controllo su terminale
    console.log(recipe);
    // restituire lo status corretto 204 No Content
    res.sendStatus(204);
}


module.exports = { index, show, store, update, modify, destroy }

