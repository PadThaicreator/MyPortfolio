import { MailController } from "../controllers/MailController.js";
import { Router } from "express";

const router = Router();

router.post('/contactMe' , MailController.contactMe);

export default router;