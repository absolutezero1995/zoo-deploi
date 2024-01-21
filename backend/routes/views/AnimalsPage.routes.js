const router = require("express").Router();
const AnimalsPage = require("../../components/AnimalPage");
const FormUpdateAnimal = require("../../components/FormUpdateAnimal");
const { Animal, Like, User } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const animals = await Animal.findAll({
      include: [{ model: Like }],
    });
    res.send(
      res.renderComponent(AnimalsPage, { title: "Animals Page", animals })
    );
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get("/:animalId", async (req, res) => {
  try {
    const { animalId } = req.params;
    const animal = await Animal.findOne({ where: { id: animalId } });
    res.send(
      res.renderComponent(FormUpdateAnimal, { title: "Update", animal })
    );
  } catch ({ message }) {
    res.json({ message: "Ошибка в animalsPage" });
  }
});

module.exports = router;
