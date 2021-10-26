import React from 'react'
import { FormControl, FormControlLabel, Checkbox as MuiCheckBox } from '@mui/material'

export default function CheckBox(props) {

    const { name, label, value, onChange } = props;

    const convertToDefaultEventParameter = (name, value) => ({
        target:{
            name, value
        }
    })

    return (
        <FormControl>
            <FormControlLabel
                control={<MuiCheckBox
                    name={name}
                    color="primary"
                    checked={value}
                    onChange={ e => onChange(convertToDefaultEventParameter(name, e.target.checked))}
                />}
                label={label}
            />
        </FormControl>
    )
}
