const express=require("express")

const router=express.Router()

const {getProjectController,postProjectController,getProjectControllerById,deleteProjectController}=require("../controller/projectController")

router.route("/").get(getProjectController)
router.route("/").post(postProjectController)
router.route("/:id").get(getProjectControllerById)
router.route("/:id").delete(deleteProjectController)
router.route("/:id").put()

module.exports=router