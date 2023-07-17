import express from "express";
import { authorizedAdmin, isAuthenticated } from "../middlewares/auth.js";
import {
  contact,
  coueseRequest,
  getDashboardStats,
} from "../controllers/otherController.js";

const router = express.Router();

//contact from
router.route("/contact").post(contact);

//request from
router.route("/courserequest").post(coueseRequest);

// Get Admin Dashboard stats

router.route("/admin/stats").get(isAuthenticated, authorizedAdmin, getDashboardStats);

export default router;
