const router = require("express").Router();
const AnimalItem = require("../../components/AnimalItem");
const { Animal } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const animals = await Animal.findAll({ order: ["id"] });
    res.json(animals);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get("/:animalId", async (req, res) => {
  const animalId = req.params.animalId;

  try {
    const animal = await Animal.findOne({
      where: { id: animalId },
    });

    if (animal) {
      res.json(animal);
    } else {
      res.status(404).json({ message: "Животное не найдено" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, image, description } = req.body;
    const animal = await Animal.create({
      name,
      image,
      description,
    });
    res.json(animal);
    // res.json({
    //   message: "Success",
    //   html: res.renderComponent(AnimalItem, { animal }, { htmlOnly: true }),
    // });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.delete("/:animalId", async (req, res) => {
  try {
    const { animalId } = req.params;
    const result = await Animal.destroy({
      where: { id: animalId }, //user_id: req.session.user_sid
    });
    if (result > 0) {
      res.json({ message: "Success" });
      return;
    }
    res.json({ message: "Fail" });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.put("/:animalId", async (req, res) => {
  try {
    const { animalId } = req.params;
    const { name, image, description } = req.body;
    const result = await Animal.update(
      {
        name,
        image,
        description,
      },
      {
        where: { id: animalId },
      }
    );
    res.json(result);
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
