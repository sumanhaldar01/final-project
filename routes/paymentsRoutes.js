import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { buySubscription, cancelSubscription, getRazorPayKey, paymentVeification } from "../controllers/paymentConroller.js";

const router = express.Router();

//Buy Subscription

router.route("/subscribe").get(isAuthenticated,buySubscription)

//verify Payment and save reference in database
router.route("/paymentverification").post(isAuthenticated,paymentVeification)

//Get Razorpay key

router.route("/razorpaykey").get(getRazorPayKey)


//Cancel Subscription

router.route("/subscribe/cancel").delete(isAuthenticated,cancelSubscription)


export default router;
