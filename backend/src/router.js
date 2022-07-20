const express = require("express");

const { QuestionsController, ThemesController } = require("./controllers");

const router = express.Router();

router.get("/questions", QuestionsController.browse);
router.get("/questions/:id", QuestionsController.read);
router.post("/questions", QuestionsController.add);
router.delete("/questions/:id", QuestionsController.delete);

router.get("/themes", ThemesController.browse);
router.get("/themes/:id", ThemesController.read);
router.post("/themes", ThemesController.add);
router.delete("/themes/:id", ThemesController.delete);

module.exports = router;
