import J, { CustomHelpers } from 'joi';
import { FormType } from 'types';
import Form from '../models/Form.js';

const ifFormExists = ( form: FormType | null) => ( value: string, helpers: CustomHelpers ) => {
    
  if (form) {
    return helpers.error("Form with this id already exists");
  }
  return value;
}

const addFormSchema = async (data: FormType) => {

  const form = await Form.findOne({ id: data.id });

  return J.object({
    name: J.string().required(),
    email: J.string().required(),
    phoneNumber: J.string().required(),
    plan: J.string().required(),
    billing: J.string().required(),
    addons: J.string().required(),
    id: J.string().required().custom(ifFormExists(form)),
  });
}

export default addFormSchema;


