import React from "react";
import { Grid } from "@mui/material";
import { useForm, Form } from "../../../useForm";
import Controls from "../../../Reusable/controls/Controls";
import { FormStyle } from "../../../Reusable/Styles/FormStyle";
import { Dossier } from "../../../../utils/Sections/Dossier";

const { initialFValues, clientType } = Dossier.FormFields;

export default function PaiementForm() {
  const classes = FormStyle();
  const { values, setValues, handleInputChange } = useForm(initialFValues);

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
            <Controls.Button text="Submit" type="Submit"  dispatchType={"add"} values={values}/>
            <Controls.Button text="Reset" color="error" type="Submit" />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
