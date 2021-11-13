import { Button as MuiButton} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useLocation } from 'react-router'

import React from 'react'
import Dispatch from '../../../utils/Functions/Dispatch/Dispatch.js'
import { useHistory } from 'react-router';
import returnCurrentSection from '../../../utils/UtilityFunctions'

// Redux import
import { useDispatch } from "react-redux";

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
    const history = useHistory()
    const {text, size, color, variant, onClick, values, type, dispatchType, setValues, initialFValues, id, ...other} = props

    const dispatch = useDispatch()
    const location = useLocation()
    let { pathname } = location

    console.log({dispatchType})

        // console.log(values)

    const handleClick = (e) => {
        e.preventDefault()
        switch(dispatchType){
            case "add":
                dispatch(Dispatch.handleCreateDispatch(pathname, values))
                console.log('add')
                break
            case "delete":
                console.log('delete')
                break
            case "update":
                dispatch(Dispatch.handleUpdateDispatch(pathname, values, id))
                console.log("update")
                break
            case "reset":
                setValues(initialFValues)
                break
            default:
                console.log('unknow button')
        }
        history.push(`/${returnCurrentSection(pathname)}`)
    }

    const classes = useStyles()

    return (
        <MuiButton
            variant={variant || "contained"} // We define defaults values but we can still change it if we pass a props
            size={size || "large"}
            color={color || "primary"}
            text={text}
            onClick={handleClick}
            {...other} // Can take other props such as "Type" and etc..
            classes={{root: classes.root, label: classes.label}}
            > 
                {text}
        </MuiButton>
    )
}
