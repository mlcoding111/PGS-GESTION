import { Button as MuiButton} from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles(theme=>({
    root:{
        margin: theme.spacing(0.5),
        marginRight: "1rem!important"
    },
    label: {
        textTransform: 'none'
    }

}))

export default function Button(props) {

    const {text, size, color, variant, onClick, ...other} = props

    const classes = useStyles()

    return (
        <MuiButton
            variant={variant || "contained"} // We define defaults values but we can still change it if we pass a props
            size={size || "large"}
            color={color || "primary"}
            text={text}
            onClick={onClick}
            {...other} // Can take other props such as "Type" and etc..
            classes={{root: classes.root, label: classes.label}}
            > 
                {text}
        </MuiButton>
    )
}
