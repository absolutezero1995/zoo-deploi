const router = require("express").Router();
const { Like } = require("../../db/models");

router.put("/:likeId", async (req, res) => {
  try {
    const { likeId } = req.params;
    const like = await Like.findOne({
      where: { animal_id: likeId, user_id: req.session.user_sid },
    });
    if (like) {
      await Like.destroy({
        where: { animal_id: likeId, user_id: req.session.user_sid },
      });
      res.json({ message: "Dislike" });
    } else {
      await Like.create({
        animal_id: likeId,
        user_id: req.session.user_sid,
      });
      res.json({ message: "Like" });
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
