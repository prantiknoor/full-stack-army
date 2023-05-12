const router = require("express").Router();
const {
  sellSingleTicket,
  sellBulkTicket,
  findAll,
  findById,
  findByUsername,
updateById,
	updateByUsername
} = require("./controllers");

router.route("/t/:id").get(findById).put(updateById).delete();

router.route("/u/:username").get(findByUsername).put(updateByUsername).delete();

router.post("/bulk", sellBulkTicket);
router.get("/draw");

router.route("/").get(findAll).post(sellSingleTicket);
