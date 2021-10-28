import React from 'react'
import PaiementForm from '../Form/PaiementForm'
import { makeStyles } from '@mui/styles';
import { Paper } from '@mui/material'

const useStyles = makeStyles(theme => ({
    pageContent: {
        marginRight: "auto"
    }
}))

export default function AddPaiementPage() {

    const classes = useStyles()

    return (
        <>
            <Paper className={classes.pageContent} sx={{ p: 2, m : 5 }}>
                <PaiementForm />
            </Paper>
        </>
    )
}
