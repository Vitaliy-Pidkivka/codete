import { object as yupObject, string as yupString } from 'yup';

const stringRequiredField = yupString().required('Field is required')

const setStringRequiredFields = (names = []) =>
  names.reduce(
    (result, name) => ({
      ...result,
      [name]: stringRequiredField
    }),
    {}
  );

export const createValidationSchema = (fields) => yupObject().shape(setStringRequiredFields(fields))