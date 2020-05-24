import React from 'react';
import {Field, Form, Formik} from 'formik';
import { object as yupObject, string as yupString } from 'yup';
import InputField from './shared/InputField';
import FileUploadWidget from './shared/FileUploadWidget';
import Button from "@material-ui/core/Button";

const FIELDS = ['first_name', 'last_name', 'phone', 'email', 'birthday', 'city']
const FORM_FIELDS = [
  ...FIELDS.map((name) => ({ name })), {
    component: FileUploadWidget,
    name: 'avatar_logo',
}]

const stringRequiredField = yupString().required('Field is required')

const setStringRequiredFields = (names = []) =>
  names.reduce(
    (result, name) => ({
        ...result,
        [name]: stringRequiredField
    }),
    {}
  );

const initialValues = FIELDS.reduce((result, name) => ({...result, [name]: ''}), { avatar_logo: '' })
const validationSchema = yupObject().shape(setStringRequiredFields(FIELDS))

const ProfileForm = ({classes, setProfile, uploadAvatarUrl}) => {
    const onChangeHandlers = {
        avatar_logo: ({ target }) => {
            const { length, ...uploadedFiles } = target.files
            const file = uploadedFiles[0]
            uploadAvatarUrl(file);
        }
    }
    const onSubmit = (values, {setSubmitting, resetForm}) => {
        setSubmitting(true);
        const entries = Object.entries(values)
        const profileInfo = entries.map((item, index) => ({
            name: item[0],
            value: item[1],
            id: index,
        }))
        setProfile(profileInfo)
        setSubmitting(false);
        resetForm();
    }
    return (
        <Formik
          onSubmit={onSubmit}
          {...{ initialValues, validationSchema }}
        >
            {({ handleChange, isSubmitting, isValid }) => {
                const disabled = isSubmitting || !isValid
                return (
                    <Form >
                        {FORM_FIELDS.map(({ component = InputField, name}) => (
                          <Field
                            key={name}
                            placeholder={name}
                            onChange={onChangeHandlers[name] || handleChange}
                            {...{ component, name }}
                          />
                        ))}
                        <Button
                          color="primary"
                          variant="contained"
                          type="submit"
                          disabled={disabled}
                        >
                            Send profile
                        </Button>
                    </Form>
                );
            }}

        </Formik>
    )
}

export default ProfileForm

