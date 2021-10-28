import { Columns } from "../gridColumns";
import { FormFields } from "../formFields";

export class Dossier{
    static get GridColumns(){
        return Columns.dossiers
    }

    static get FormFields(){
        return FormFields.Dossiers
    }
}