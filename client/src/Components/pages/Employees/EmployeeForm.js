import React, {useState, useEffect} from 'react'

import {Grid, Container, TexField, TextField} from '@mui/material'

const initialFieldValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    hireDate: new Date()

}
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'prenom', headerName: 'Prénom', width: 130 },
    { field: 'nom', headerName: 'Nom', width: 130 },
    { field: 'courriel', headerName: 'Courriel', width: 130 },
    { field: 'date_embauche', headerName: 'Date embauche', width: 200 },
    { field: 'date_naissance', headerName: 'Date de naissance', width: 200 },
    { field: 'reference_nom', headerName: 'Nom reference', width: 200 },
    { field: 'reference_telephone', headerName: '# Reference', width: 130 },
    { field: 'type_employe', headerName: 'Type', width: 70 }
];

export default function EmployeeForm() {
    
    const [values, setValues] = useState(initialFieldValues)
    
    return (
        <form>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                    variant="outlined"
                    label="Nom Complet"
                    value={values.fullName}
                    />
                </Grid>
            </Grid>
        </form>
    )
}
