import { MailController } from "../controllers/MailController";
import { Router } from "express";

const router = Router();

router.post('/contactMe' , MailController.contactMe);

export default router;