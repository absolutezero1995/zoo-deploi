const router = require("express").Router();
const { json } = require("sequelize");
const { Rate } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const rates = await Rate.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.json(rates.slice(0, 4).sort((a, b) => a.id - b.id));
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post("/", async (req, res) => {
  const { adultsWeekday, childrenWeekday, adultsWeekend, childrenWeekend } =
    req.body;
  const dataFromDB = await Rate.findAll();
  console.log(JSON.parse(JSON.stringify(dataFromDB)));
  const newData = [
    { name: "Adult weekday", price: adultsWeekday },
    { name: "Children weekday", price: childrenWeekday },
    { name: "Adult weekend", price: adultsWeekend },
    { name: "Children weekend", price: childrenWeekend },
  ];
  const mess = await Rate.bulkCreate(newData, {
    updateOnDuplicate: ["price"],
  });
  if (mess.length === 4) {
    res.json({ message: "success" });
  }
});

module.exports = router;
