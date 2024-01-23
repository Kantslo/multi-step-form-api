import { Request, Response } from "express";


export const createForm = async (req: Request, res: Response) => {

  const { body } = req;

  try {
    
  } catch (error) {
    return res.status(401).json(error)
  }
}