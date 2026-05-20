import express from 'express';
import { authorizeRoles } from '../middleware/auth.js';
import { loginUser, registerUser, adminLogin } from '../controller/userController.js';
const userRouter = express.Router();
userRouter.post('/login', loginUser);
userRouter.post('/register', registerUser);
userRouter.post('/admin',authorizeRoles("admin"),adminLogin)
export default userRouter;

