// https://youtu.be/-XKaSCU0ZLM?t=1240
import React, {useState, useEffect} from 'react'
import {Grid, Container, TexField, TextField, Button, FormControl, RadioGroup, Radio} from '@mui/material'
import { makeStyles } from '@mui/styles';
import {useForm, Form} from '../../useForm';
import { FormControlLabel, FormLabel } from '@material-ui/core';

import Input from '../../controls/Input';

const useStyles = makeStyles(theme =>({
        textField: {
            width:'80%',
            margin: `${theme.spacing(1)}!important`
        }
}))


const initialFValues = {
    id: 0,
    prenom: '',
    nom: '',
    courriel: '',
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
            <Form  name="employeeForm">
            <Grid container>
                <Grid item xs={6}>
                    <Input
                        name="prenom"
                        label="Prenom"
                        value={values.fullName}
                        onChange={handleInputChange}
                    />
                    <Input
                        name="courriel"
                        label="Courriel"
                        value={values.courriel}
                        onChange={handleInputChange}
                    />
        
                </Grid>
                <Grid item xs={6}>
                    <FormControl>
                        <FormLabel>Type</FormLabel>
                        <RadioGroup row
                        name="employeeType"
                        onChange={handleInputChange}
                        value={values.type_employer}>
                            <FormControlLabel value="a1" control={<Radio/>} label="A1"/>
                            <FormControlLabel value="a2" control={<Radio/>} label="A2"/>
                            <FormControlLabel value="a3" control={<Radio/>} label="A3"/>
                            <FormControlLabel value="c" control={<Radio/>} label="C"/>
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
            </Form>
    )
}
