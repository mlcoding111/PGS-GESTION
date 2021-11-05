import { Columns } from "../Grid/Columns";
import { FormFields } from "../Form/formFields";

export class Employee{
    static get GridColumns(){
        return Columns.employees
    }

    static get FormFields(){
        return FormFields.Employee
    }
}