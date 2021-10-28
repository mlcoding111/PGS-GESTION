import { Columns } from "../gridColumns";
import { FormFields } from "../formFields";

export class Paiements{
    static get GridColumns(){
        return Columns.paiements
    }

    static get FormFields(){
        return FormFields.Paiements
    }
}