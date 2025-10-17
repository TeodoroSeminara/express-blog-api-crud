// CRUD

// Import express
const express = require("express");

// Setting router
const router = express.Router();

// Importo file
const recipeControllers = require("../controllers/recipeControllers");

// index -GET
router.get("/", recipeControllers.--);

// Show -GET
router.get("/:id", recipeControllers.--);

// Store - Create - POST
router.post("/", recipeControllers.--);

// Update - PUT
router.put("/:id", recipeControllers.--);

// Modify - PATCH
router.patch("/:id", recipeControllers.--);

// Destroy - DELETE
router.delete("/:id", recipeControllers.--);

module.export = router