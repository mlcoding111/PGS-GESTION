// https://youtu.be/-XKaSCU0ZLM?t=1240
import React from "react";
import { Grid } from "@mui/material";
import { useForm, Form } from "../../../useForm";
import Controls from "../../../Reusable/controls/Controls";
import { FormStyle } from "../../../Reusable/Styles/FormStyle";
import { Employee } from "../../../../utils/Sections/Employee";

const { initialFValues, departementdata, employeeTypes } = Employee.FormFields;

export default function EmployeeForm() {
  const classes = FormStyle()
  const { values, setValues, handleInputChange } = useForm(initialFValues);

  return (
    <Form name="employeeForm" values={values}>
      <Grid container className={classes.grid}>
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
          <Controls.Input
            name="referenceNom"
            label="Nom complet de la référence"
            value={values.referenceNom}
            onChange={handleInputChange}
          />
          <Controls.DatePicker
            name="dateNaissance"
            label="Date de naissance"
            value={values.dateNaissance}
            onChange={handleInputChange}
          />
          <Controls.Select
            name="typeEmployer"
            label="Type d'employer"
            value={values.typeEmployer}
            onChange={handleInputChange}
            options={employeeTypes}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.Input
            name="nom"
            label="Nom"
            value={values.nom}
            onChange={handleInputChange}
          />
          <Controls.Input
            name="telephone"
            label="Téléphone"
            value={values.telephone}
            onChange={handleInputChange}
          />

          <Controls.Input
            name="referenceTelephone"
            label="Numéro de la référence"
            value={values.referenceTelephone}
            onChange={handleInputChange}
          />
          <Controls.DatePicker
            name="dateEmbauche"
            label="Date d'embauche"
            value={values.dateEmbauche}
            onChange={handleInputChange}
          />

          <Controls.CheckBox
            name="actif"
            label="Employer actif"
            value={values.actif}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} className={classes.submit}>
          <div>
            <Controls.Button text="Submit" type="Submit"  dispatchType={"add"} values={values}/>
            <Controls.Button text="Reset" color="error" type="Submit" dispatchType={"reset"} values={values} setValues={setValues} initialFValues={initialFValues}/>
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}

{
  /* <Controls.RadioGroup
                        name="type_employer"
                        label="Type de l'employer"
                        value={values.type_employer}
                        onChange={handleInputChange}
                        items={employeeTypes}
                    /> */
}
