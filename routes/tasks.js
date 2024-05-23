const express=require("express")

const router=express.Router()
const  {postTaskController,getTaskController}=require("../controller/taskController")

router.route("/").post(postTaskController)
router.route("/").get(getTaskController)


module.exports=router