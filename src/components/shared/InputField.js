import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  border-color: ${({ isInvalid }) => isInvalid ? 'red' : ''};
  border-radius: 4px;
  height: 40px;
  padding: 0 10px;
  text-transform: capitalize;
  margin: 20px 0 0;
  width: 100%;
  box-sizing: border-box;
  
  &:focus::placeholder{
     color: transparent;
  }
`
const InputField = (props) => {
    const { field = {}, form, onChange, placeholder = '' } = props
    const { name, value } = field
    const { errors = {}, setFieldTouched, touched = {} } = form

    const isInvalid = touched[name] && errors[name];

    const onBlur = () => setFieldTouched(name, true);

    const styledInputProps = { isInvalid, name, placeholder, onBlur, onChange, value }

    return (
        <StyledInput {...styledInputProps} />
    )
}

export default InputField