// https://youtu.be/-XKaSCU0ZLM?t=1240
import React from 'react'
import {Grid } from '@mui/material'
import { makeStyles } from '@mui/styles';
import {useForm, Form} from '../../useForm';
import Controls from '../../Reusable/controls/Controls';



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
    departementId: '',
    actif: false
}

const departementdata = [
    {id: '1', title: 'Apprenti 1'},
    {id: '2', title: 'Apprenti 2'},
    {id: '3', title: 'Apprenti 3'},
    {id: '4', title: 'Compagnon'},
]

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
                    <Controls.Select
                        name="departementId"
                        label="Departement"
                        value={values.departementId}
                        onChange={handleInputChange}
                        options={departementdata}
                    />
                    <Controls.CheckBox
                        name="actif"
                        label="Actif"
                        value={values.actif}
                        onChange={handleInputChange}
                    />
                  
                </Grid>
            </Grid>
            </Form>
    )
}
