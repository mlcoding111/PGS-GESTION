// Every data required for each Forms will be stored here
export class FormFields{
    static get Employee(){

        const initialFValues = {
            id: 0,
            prenom: '',
            nom: '',
            courriel: '',
            date_embauche: new Date(),
            date_naissance: new Date(),
            reference_nom: '',
            reference_telephone: '',
            type_employer: 'a1',
            departementId: '',
            actif: false
        }

        const employeeTypes = [
            { id: 'a1', title: 'A1'},
            { id: 'a2', title: 'A2'},
            { id: 'a3', title: 'A3'},
            { id: 'c', title: 'C'}
        ]

        const departementdata = [
            {id: '1', title: 'Apprenti 1'},
            {id: '2', title: 'Apprenti 2'},
            {id: '3', title: 'Apprenti 3'},
            {id: '4', title: 'Compagnon'},
        ]   

        return {
            initialFValues,
            employeeTypes,
            departementdata
        }        
    }
}