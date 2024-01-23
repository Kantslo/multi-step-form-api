import { Schema, model } from 'mongoose';
import { v4 as uuid } from 'uuid';
import { FormType } from '../types.js';

const { String } = Schema.Types;

const formSchema = new Schema<FormType>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  plan: {
    type: String,
    required: true,
  },
  billing: {
    type: String,
    required: true,
  },
  addons: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
    default: uuid,
  }
});

const Form = model("Form", formSchema);

export default Form;



