import { Columns } from "../gridColumns";
import { FormFields } from "../formFields";

export class Facturations{
    static get GridColumns(){
        return Columns.facturations
    }

    static get FormFields(){
        return FormFields.Facturations
    }
}