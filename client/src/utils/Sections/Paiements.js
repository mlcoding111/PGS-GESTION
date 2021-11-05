import { Columns } from "../Grid/Columns";
import { FormFields } from "../Form/formFields";

export class Paiements{
    static get GridColumns(){
        return Columns.paiements
    }

    static get FormFields(){
        return FormFields.Paiements
    }
}