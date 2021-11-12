import React, {useState} from 'react'
import { makeStyles } from '@mui/styles';
import { Paper } from '@mui/material';

const useStyles = makeStyles(theme =>({
        root: {
            '& .MuiFormControl-root': {
                width: "80%!important",
                margin: `${theme.spacing(1)}!important`
            },
            display: "flex!important",
            justifyContent: "center!important"
        },
        pageContent: {
            marginRight: "auto"
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
        <Paper className={classes.pageContent} sx={{ p: 2, m : 5 }}>
        <form className={classes.root} autoComplete="off">
            {props.children}
            {/* <button onClick={handleClick}>ss</button> */}
        </form>
        </Paper>
    )
}
