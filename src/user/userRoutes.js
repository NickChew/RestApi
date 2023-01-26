const {Router} = require("express");
const {createUser, listUsers, login, updatedEmail, deleteUser} = require("./userControllers");
const {hashPass,comparePass, tokenCheck} = require("../middleware"); //because index.js otherwise path goes here

const userRouter = Router();

userRouter.get("/listUser", tokenCheck, listUsers);
userRouter.post("/addUser", hashPass, createUser);
userRouter.post("/login", comparePass, login);  //gets token etc
userRouter.put("/update", updatedEmail);
userRouter.delete("/deleteUser", deleteUser);

module.exports = userRouter;