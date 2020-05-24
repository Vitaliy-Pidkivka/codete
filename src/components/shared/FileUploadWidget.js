import React, {Fragment} from 'react';
import styled from 'styled-components';
import {FormLabel} from '@material-ui/core';
import withStyles from "@material-ui/core/es/styles/withStyles";
import {createStyles} from "@material-ui/styles";

const styles = createStyles({
    root: {
        display: 'block',
        backgroundColor: '#3f51b5',
        cursor: 'pointer',
        borderRadius: '2px',
        marginLeft: '2px',
        marginRight: '2px',
    }
})

const StyledInput = styled.input`
  display: none;
`

const Label = styled.div`
  text-transform: uppercase;
  color: white;
  transition: all .3s ease;
  padding: 10px 4px;
  cursor: pointer;
  display: block;
  box-sizing: border-box;
  margin-top: 20px;
  font-weight: bold;
  font-family: cursive;
  margin-bottom: 10px;
  border-radius: 2px;
  
  &:hover {
    background: #f4e5b1;
    color: black; 
  }
`

const INPUT_ID = 'upload_avatar_input'

const FileUploadWidget = (props) => {
    const { classes: { root }, field: { name } = {}, onChange } = props
    return (
        <Fragment>
            <StyledInput
                accept="image/*"
                id={INPUT_ID}
                type="file"
                {...{ name, onChange }}
            />
            <FormLabel
                color="primary"
                classes={{root}}
                htmlFor={INPUT_ID}
                variant="contained"
            >
                <Label>UPLOAD IMAGE</Label>
            </FormLabel>
        </Fragment>
    )
}

export default withStyles(styles)(FileUploadWidget)
