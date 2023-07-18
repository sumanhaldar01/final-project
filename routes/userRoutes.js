import express from "express";
import {
  login,
  register,
  logout,
  getMyProfile,
  changePassword,
  updateProfile,
  updateProfilePicture,
  forgetPassword,
  resetPassword,
  addToPlaylist,
  removeFromPlaylist,
  getAllUsers,
  updateUserRole,
  deleteUser,
  deleteMyProfile,
} from "../controllers/userController.js";
import { authorizedAdmin, isAuthenticated } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";

const router = express.Router();

//To Register a New User
router.route("/register").post(register);

//Login

router.route("/login").post(login);
//Logout

router.route("/logout").get(logout);

//Get my profile

router.route("/me").get(isAuthenticated, getMyProfile);

//Delete my profile

router.route("/me").delete(isAuthenticated, deleteMyProfile);


// ChangePassword

router.route("/changepassword").put(isAuthenticated, changePassword);

// UpdateProfile

router.route("/updateprofile").put(isAuthenticated, updateProfile);

// UpdateProfilePicture

router
  .route("/updateprofilepicture")
  .put(isAuthenticated, singleUpload, updateProfilePicture);

// ForgetPassword

router.route("/forgetpassword").post(forgetPassword);

// ResetPassword

router.route("/resetpassword/:token").put(resetPassword);

//AddToPlayList

router.route("/addtoplaylist").post(isAuthenticated, addToPlaylist);

//RemovePlayList

router.route("/removefromplaylist").delete(isAuthenticated, removeFromPlaylist);

// Admin Routes

router.route("/admin/users").get(isAuthenticated,authorizedAdmin,getAllUsers);

router.route("/admin/users/:id").put(isAuthenticated,authorizedAdmin,updateUserRole)
.delete(isAuthenticated,authorizedAdmin,deleteUser);

export default router;
