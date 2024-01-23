import { createForm } from "controllers/form-controller.js";
import express from "express";

const formRouter = express.Router();

formRouter.post("/form", createForm);

export default formRouter;