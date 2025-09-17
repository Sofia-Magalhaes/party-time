const router = require("express").Router()

const partyController = require("../controllers/partyController")

router.route("/parties").post((req, res) => partyController.create(req, res))//criar festa

router.route("/parties").get((req, res) => partyController.getAll(req, res))//procurar todas festas

router.route("/parties/:id").get((req, res) => partyController.get(req, res))//procurar festa individual

router.route("/parties/:id").delete((req, res) => partyController.delete(req, res))//deletar festa

router.route("/parties/:id").put((req, res) => partyController.update(req, res))//atualizar festa

module.exports = router