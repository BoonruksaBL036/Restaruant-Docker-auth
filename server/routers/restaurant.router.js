import restaurantController from "../controllers/restaurant.controller.js";
import authMiddleware from "../middleware/authJwt.js";
import express from "express";

const router = express.Router();
const { verifyToken, isAdmin, isModOrAdmin } = authMiddleware;

//POST http://localhost:5000/api/v1/restaurants
router.post("/", verifyToken, isModOrAdmin, restaurantController.create);

//GET http://localhost:5000/api/v1/restaurants
router.get("/", verifyToken, restaurantController.getAll);

//GET http://localhost:5000/api/v1/restaurants/id
router.get("/:id", verifyToken, restaurantController.getById);

//PUT http://localhost:5000/api/v1/restaurants/id
router.put("/:id", verifyToken, isModOrAdmin, restaurantController.update);

//DELETE http://localhost:5000/api/v1/restaurants/id
router.delete("/:id", verifyToken, isAdmin, restaurantController.deleteById);

export default router;
