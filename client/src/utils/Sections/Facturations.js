import { Columns } from "../Grid/Columns";
import { FormFields } from "../Form/formFields";

export class Facturations{
    static get GridColumns(){
        return Columns.facturations
    }

    static get FormFields(){
        return FormFields.Facturations
    }
}