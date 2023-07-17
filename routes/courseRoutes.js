import express from "express";
import {
  getAllCourses,
  createCourse,
  getAllLectures,
  addLectures,
  deleteCourse,
  deleteLecture,
} from "../controllers/courseControllers.js";
import singleUpload from "../middlewares/multer.js";
import { authorizedAdmin, isAuthenticated,authorizedSubscribers } from "../middlewares/auth.js";

const router = express.Router();

//Get All courses without lectures
router.route("/courses").get(getAllCourses);

//create new course - only admin
router
  .route("/createcourse")
  .post(isAuthenticated, authorizedAdmin, singleUpload, createCourse);

//Add lecture , Delete Course , Get Course Details

router
  .route("/course/:id")
  .get( isAuthenticated, authorizedSubscribers,getAllLectures)
  .post( isAuthenticated, authorizedAdmin,singleUpload, addLectures)
  .delete(isAuthenticated, authorizedAdmin, deleteCourse);

//Delete lecture

router.route("/lecture").delete(isAuthenticated, authorizedAdmin,deleteLecture);

export default router;
