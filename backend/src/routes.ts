import { Router } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthController } from "./controllers/user/AuthController";

const router = Router();

//-- ROTAS USER --
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthController().handle);

export { router };
