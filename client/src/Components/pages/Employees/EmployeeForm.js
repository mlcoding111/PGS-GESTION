// https://youtu.be/-XKaSCU0ZLM?t=1240
import React, {useState, useEffect} from 'react'
import {Grid, Container, TexField, TextField, Button, FormControl} from '@mui/material'
import { makeStyles } from '@mui/styles';
import {useForm, Form} from '../../useForm';
import { FormControlLabel, FormLabel } from '@material-ui/core';

import Controls from '../../controls/Controls';

const useStyles = makeStyles(theme =>({
        textField: {
            width:'80%',
            margin: `${theme.spacing(1)}!important`
        }
}))

const employeeTypes = [
    { id: 'a1', title: 'A1'},
    { id: 'a2', title: 'A2'},
    { id: 'a3', title: 'A3'},
    { id: 'c', title: 'C'}
]

const initialFValues = {
    id: 0,
    prenom: '',
    nom: '',
    courriel: '',
    date_embauche: new Date(),
    date_naissance: new Date(),
    reference_nom: '',
    reference_telephone: '',
    type_employer: 'a1',
    gender: 'male',
    actif: false
}


export default function EmployeeForm() {

   const {
        values,
        setValues,
        handleInputChange
    } = useForm(initialFValues);


        return (
            <Form  name="employeeForm">
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name="prenom"
                        label="Prenom"
                        value={values.prenom}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        name="courriel"
                        label="Courriel"
                        value={values.courriel}
                        onChange={handleInputChange}
                    />
        
                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup
                        name="type_employer"
                        label="Type de l'employer"
                        value={values.type_employer}
                        onChange={handleInputChange}
                        items={employeeTypes}
                    />
                  
                </Grid>
            </Grid>
            </Form>
    )
}
