// faccio logica funzioni

// Importo array
const recipe = require("../data/recipe");

// Index
function index(req, res) {
    res.json(recipe);
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

// 

module.exports = { index, show }

