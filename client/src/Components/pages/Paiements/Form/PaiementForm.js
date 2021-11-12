import React from "react";
import { Grid } from "@mui/material";
import { useForm, Form } from "../../../useForm";
import Controls from "../../../Reusable/controls/Controls";
import { FormStyle } from "../../../Reusable/Styles/FormStyle";
import { Paiements } from "../../../../utils/Sections/Paiements";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const { initialFValues, clientType } = Paiements.FormFields;

export default function PaiementForm() {
  const { values, setValues, handleInputChange } = useForm(initialFValues);
  const location = useLocation();
  const classes = FormStyle();  

  const paiement = useSelector((state)=> location.state ? state.paiements.find((paiement)=> paiement._id === location.state.id): null)  
   // Check if we passed an id trough location.state ( which mean the user want to update this paiement )

  React.useEffect(()=> {
    if(paiement){
      console.log('paiement found.. ', paiement)
      setValues(paiement)
    }
  }, [paiement])

  return (
    <Form name="paiementForm">
      <Grid container className={classes.grid}>
        <Grid item xs={6}>
          <Controls.Input
            name="fournisseur"
            label="Fournisseur"
            value={values.fournisseur}
            onChange={handleInputChange}
          />
          <Controls.Input
            name="faitPar"
            label="Fait par.."
            value={values.faitPar}
            onChange={handleInputChange}
          />
          <Controls.Input
            name="accepterPar"
            label="Accepter par.."
            value={values.accepterPar}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={6}>
          <Controls.Input
            name="montant"
            label="Montant"
            value={values.montant}
            onChange={handleInputChange}
          />
          <Controls.DatePicker
            name="date"
            label="Date"
            value={values.date}
            onChange={handleInputChange}
          />

          <Controls.Input
            name="numeroFacture"
            label="Numéro de la facture.."
            value={values.numeroFacture}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={12} className={classes.submit}>
          <div>
          <Controls.Button text="Soumettre" type="Submit"  dispatchType={location.state ? "update": "add"} values={values} id={location.state ? location.state.id : null}/>
            <Controls.Button text="Reset" color="error" type="Submit" />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
