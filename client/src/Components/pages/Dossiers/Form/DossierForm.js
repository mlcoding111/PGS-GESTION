import React from "react";
import { Grid } from "@mui/material";
import { useForm, Form } from "../../../useForm";
import Controls from "../../../Reusable/controls/Controls";
import { FormStyle } from "../../../Reusable/Styles/FormStyle";
import { Dossier } from "../../../../utils/Sections/Dossier";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const { initialFValues, clientType } = Dossier.FormFields;

export default function DossierForm() {
  const { values, setValues, handleInputChange } = useForm(initialFValues);
  const location = useLocation();
  const classes = FormStyle();  

  const dossier = useSelector((state)=> location.state ? state.dossiers.find((dossier)=> dossier._id === location.state.id): null)  
   // Check if we passed an id trough location.state ( which mean the user want to update this dossier )

  React.useEffect(()=> {
    if(dossier){
      console.log('Dossier found.. ', dossier)
      setValues(dossier)
    }
  }, [dossier])
  
  return (
    <Form name="dossierForm" values={values}>
      <Grid container className={classes.grid}>
        <Grid item xs={6}>
          <Controls.Input
            name="nomClient"
            label="Nom"
            value={values.nomClient}
            onChange={handleInputChange}
          />

          <Controls.DatePicker
            name="dateAccepter"
            label="Date accepter"
            value={values.dateAccepter}
            onChange={handleInputChange}
          />

          <Controls.Input
            name="montant"
            label="Montant de la facture"
            value={values.montant}
            onChange={handleInputChange}
          />
          <Controls.Select
            name="typeTravaux"
            label="Type de travaux"
            value={values.typeTravaux}
            onChange={handleInputChange}
            options={clientType}
          />
        </Grid>

        <Grid item xs={6}>
          <Controls.Input
            name="numeroClient"
            label="Numéro du client"
            value={values.numeroClient}
            onChange={handleInputChange}
          />
          <Controls.DatePicker
            name="dateAjouter"
            label="Date ajouter"
            value={values.dateAjouter}
            onChange={handleInputChange}
          />

          <Controls.Input
            name="numeroFacture"
            label="Numéro de la facture"
            value={values.numeroFacture}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={12} className={classes.submit}>
          <div>
            <Controls.Button text="Soumettre" type="Submit"  dispatchType={location.state ? "update": "add"} values={values} id={location.state ? location.state.id : null}/>
            <Controls.Button text="Réinitialiser" color="error" type="Reset" dispatchType={"reset"} setValues={setValues} initialFValues={initialFValues}/>
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
