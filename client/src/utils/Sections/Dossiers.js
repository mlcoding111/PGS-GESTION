import { Columns } from "../gridColumns";
import { FormFields } from "../formFields";

export class Dossiers{
    static get GridColumns(){
        return Columns.dossiers
    }

    static get FormFields(){
        return FormFields.dossiers
    }
}