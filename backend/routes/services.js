const router = require("express").Router()

const serviceController = require("../controllers/serviceController")

router.route("/services").post((req, res) => serviceController.create(req, res)) //criar serviço 

router.route("/services").get((req, res) => serviceController.getAll(req, res)) //achar todos serviços

router.route("/services/:id").get((req, res) => serviceController.get(req, res)) //achar serviço individual

router.route("/services/:id").delete((req, res) => serviceController.delete(req, res)) //deletar serviço 

router.route("/services/:id").put((req, res) => serviceController.update(req, res)); //atualizar serviço

module.exports = router