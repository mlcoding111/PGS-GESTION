import { Columns } from "../Grid/Columns";
import { FormFields } from "../Form/formFields";

export class Dossier{
    static get GridColumns(){
        return Columns.dossiers
    }

    static get FormFields(){
        return FormFields.Dossiers
    }
}