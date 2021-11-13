// https://youtu.be/-XKaSCU0ZLM?t=1240
import React from "react";
import { Grid } from "@mui/material";
import { useForm, Form } from "../../../useForm";
import Controls from "../../../Reusable/controls/Controls";
import { FormStyle } from "../../../Reusable/Styles/FormStyle";
import { Employee } from "../../../../utils/Sections/Employee";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const { initialFValues, departementdata, employeeTypes } = Employee.FormFields;

export default function EmployeeForm() {
  const { values, setValues, handleInputChange } = useForm(initialFValues);
  const location = useLocation();
  const classes = FormStyle();  

  const employer = useSelector((state)=> location.state ? state.employers.find((employer)=> employer._id === location.state.id): null)  
   // Check if we passed an id trough location.state ( which mean the user want to update this employer )

  React.useEffect(()=> {
    if(employer){
      console.log('employer found.. ', employer)
      setValues(employer)
    }
  }, [employer])

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
            <Controls.Button text="Soumettre" type="Submit"  dispatchType={location.state ? "update": "add"} values={values} id={location.state ? location.state.id : null}/>
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
