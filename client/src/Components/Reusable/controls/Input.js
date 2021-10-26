import React from 'react'
import { makeStyles } from '@mui/styles';
import { TextField } from '@mui/material';


const useStyles = makeStyles(theme =>({
    textField: {
        width:'80%',
        margin: `${theme.spacing(1)}!important`
    }
}))

export default function Input(props) {

    const classes = useStyles()

    const {name, label, value, onChange} = props
    return (
        <TextField
            variant="outlined"
            label={label}
            name={name}
            onChange={onChange}
            value={value}
            className={classes.textField}
        />  
    )
}
