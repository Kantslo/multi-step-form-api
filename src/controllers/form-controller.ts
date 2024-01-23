import { Request, Response } from "express";
import Form from "../models/Form.js";
import addFormSchema from "../schemas/addFormSchema.js";


export const createForm = async (req: Request, res: Response) => {

  const { body } = req;

  try {

    const validator = await addFormSchema(body);
    
    const { value, error } = validator.validate(body);

    if (error) {
      return res.status(400).json(error);
    }

    const { name, email, phone, plan, billing, addons} = value;

    const form = await Form.findOne({ email });

    if (form) {
      return res.status(400).json({ message: "Form has been already submitted with this email" });
    }

    const newForm = new Form({
      name,
      email,
      phone,
      plan,
      billing,
      addons,
    });

    await newForm.save();

    return res.status(201).json(newForm);
  } catch (error) {
    return res.status(401).json(error)
  }
}