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
    const {text, size, color, variant, onClick, values, type, dispatchType, setValues, initialFValues, ...other} = props

    const handleSubmit = (e) => {
        e.preventDefault()

        if(type == "Submit"){
            switch(dispatchType){
                case "add":
                    console.log('add')
                    break
                case "delete":
                    console.log('delete')
                    break
                case "update":
                    console.log("update")
                    break
                case "reset":
                    setValues(initialFValues)
                    break
                default:
                    console.log('unknow button')
            }
        }else{
            console.log("not a submit btn..")
        }
        
    
        // console.log(values)
    }



    const classes = useStyles()

    return (
        <MuiButton
            variant={variant || "contained"} // We define defaults values but we can still change it if we pass a props
            size={size || "large"}
            color={color || "primary"}
            text={text}
            onClick={!type ? "Submit": console.log("not a submit button")}
            onSubmit={handleSubmit}
            {...other} // Can take other props such as "Type" and etc..
            classes={{root: classes.root, label: classes.label}}
            > 
                {text}
        </MuiButton>
    )
}
