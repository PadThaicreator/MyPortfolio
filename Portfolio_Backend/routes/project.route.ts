import { Router } from "express";
import  express ,{Request , Response} from 'express'
import { ProjectController } from "../controllers/ProjectController";
 
const router = express.Router();


// router.post('/', userController.createUser);
// router.get('/', userController.getAllUsers);
// router.get('/:id', userController.getUserById);
// router.put('/:id', userController.updateUser);
// router.delete('/:id', userController.deleteUser);

router.get('/test', (req : Request, res : Response) => {
  res.send('Hello from Express + MongoDB!')
})

router.post('/insert' , ProjectController.create );
router.get('/getAll' , ProjectController.getAll );

export default router;
