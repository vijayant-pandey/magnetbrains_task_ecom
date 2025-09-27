// backend/routes/adminRoutes.js
import express from "express";
import { getAllOrders, getOrderByIdAdmin, updateOrderStatus, getAllUsers, updateUserRole } from "../controllers/adminController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { authorizeRoles } from "../middlewares/roleMiddleware.js";

const router = express.Router();

// protect and authorization of admin only
router.use(protect, authorizeRoles("admin"));


router.get("/orders", getAllOrders)
router.get("/orders/:id", getOrderByIdAdmin)
router.put("/orders/:id/status", updateOrderStatus)

// Users
router.get("/users", getAllUsers);
router.put("/users/:id/role", updateUserRole);

export default router;
