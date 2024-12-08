import express from "express";
const router = express.Router();




import *as UsersController from "../app/controllers/UsersController.js";
import *as BlogsController from "../app/controllers/BlogsControllar.js";
import *as ServicesController from "../app/controllers/ServicesControllar.js";
import *as TeamController from "../app/controllers/TeamControllar.js";
import AuthMiddleware from "../app/middlewares/AuthMiddleware.js";




//User

router.post ("/Registration", UsersController.Registration)

router.post ("/Login", UsersController.Login)

router.get ("/ProfileDetails", AuthMiddleware,UsersController.ProfileDetails)

router.post ("/ProfileUpdate", AuthMiddleware,UsersController.ProfileUpdate)

router.get ("/EmailVerify/:email" , UsersController.EmailVerify)

router.post ("/CodeVerify" , UsersController.CodeVerify)

router.post ("/ResetPassword" , UsersController.ResetPassword)




//Blog

router.post ("/createBlog" ,AuthMiddleware, BlogsController.createBlog)  //create a blog

router.get ("/getBlog",AuthMiddleware, BlogsController.getBlog)  //read blogs

router.get ("/update-blog/:id/:status " ,AuthMiddleware, BlogsController.updateBlog)  //update a blog

router.post ("/delete-blog/:id " ,AuthMiddleware, BlogsController.deleteBlog)  //delete a blog





//Service

router.post("/createService", AuthMiddleware, ServicesController.createService)  //create a service

router.get("/getService",AuthMiddleware, ServicesController.getService)  //read services

router.put("/updateService/:id/:status",AuthMiddleware, ServicesController.updateService)  //update a service

router.delete("/delete-service/:id",AuthMiddleware, ServicesController.deleteService)  //delete a service





//Team

router.post("/createTeam",AuthMiddleware, TeamController.createTeam)  //create a team

router.get("/getTeam",AuthMiddleware, TeamController.getTeam)  //read teams

router.get("/updateTeam/:id/:status ",AuthMiddleware, TeamController.updateTeam)  //update a team

router.post("/deleteTeam/:id",AuthMiddleware, TeamController.deleteTeam)  //delete a team





export default router;