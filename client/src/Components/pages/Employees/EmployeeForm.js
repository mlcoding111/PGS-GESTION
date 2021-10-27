// https://youtu.be/-XKaSCU0ZLM?t=1240
import React from 'react'
import {Grid } from '@mui/material'
import { makeStyles } from '@mui/styles';
import {useForm, Form} from '../../useForm';
import Controls from '../../Reusable/controls/Controls';

import { Employee } from '../../../utils/Sections/Employee';


const useStyles = makeStyles(theme =>({
        textField: {
            width:'80%',
            margin: `${theme.spacing(1)}!important`
        }
}))

const { initialFValues, departementdata, employeeTypes } = Employee.FormFields


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
                    <Controls.DatePicker

                        name="date_embauche"
                        label="Date d'embauche"
                        value={values.date_embauche}
                        onChange={handleInputChange}
                    />
                    <Controls.CheckBox
                        name="actif"
                        label="Employer actif"
                        value={values.actif}
                        onChange={handleInputChange}
                    />

                    <div>
                        <Controls.Button text="Submit" type="Submit"/>
                        <Controls.Button text="Reset" color="error" type="Submit"/>
                    </div>

                  
                </Grid>
            </Grid>
            </Form>
    )
}
