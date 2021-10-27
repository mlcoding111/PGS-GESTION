import { Columns } from "../gridColumns";
import { FormFields } from "../formFields";

export class Employee{
    static get GridColumns(){
        return Columns.employees
    }

    static get FormFields(){
        return FormFields.Employee
    }
}