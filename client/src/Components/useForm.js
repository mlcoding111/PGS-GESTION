import React, {useState} from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme =>({
        root: {
            '& .MuiFormControl-root': {
                width: "80%!important",
                margin: `${theme.spacing(1)}!important`
            },
            display: "flex!important",
            justifyContent: "center!important"
        }
}))

export function useForm(initialFValues) {
    
   const [values, setValues] = useState(initialFValues);

    const handleInputChange = e => {
           const { name, value } = e.target
           setValues({
               ...values,
               [name]: value
           })
           console.log({ name, value })
       }

    return {
        values,
        setValues,
        handleInputChange
    }
}

export function Form(props) {

    const classes = useStyles()
    return (
        <form className={classes.root} autoComplete="off">
            {props.children}
            {/* <button onClick={handleClick}>ss</button> */}
        </form>
    )
}
