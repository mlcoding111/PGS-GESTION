import React, {useState, useEffect} from 'react'
import {Grid, Container, TexField, TextField, Button} from '@mui/material'
import { makeStyles } from '@mui/styles';
import useForm from '../../useForm';

const useStyles = makeStyles(theme =>({
    root: {
        '& .MuiFormControl-root':{
        width:'80% !important',
        margin: theme.spacing(1),
    }
        },
        textField: {
            width:'80%',
            margin: `${theme.spacing(1)}!important`
        }
}))

const initialFValues = {
    id: 0,
    prenom: 's',
    nom: '',
    courriel: 's',
    date_embauche: new Date(),
    date_naissance: new Date(),
    reference_nom: '',
    reference_telephone: '',
    type_employer: '',
    actif: false
}

export default function EmployeeForm() {

    const classes = useStyles()

   const {
        values,
        setValues,
        handleInputChange
    } = useForm(initialFValues);


        return (
        <form classes={classes.root} name="employeeForm">
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                    variant="outlined"
                    label="Prenom"
                    name="prenom"
                    onChange={handleInputChange}
                    value={values.prenom}
                    className={classes.textField}
                    />  
                    <TextField
                    variant="outlined"
                    label="Courriel"
                    name="courriel"
                    onChange={handleInputChange}
                    value={values.courriel}
                    className={classes.textField}
                    />               
                    <Button onClick={()=> console.log(values)}>Salut</Button>   
                </Grid>
            </Grid>
        </form>
    )
}
