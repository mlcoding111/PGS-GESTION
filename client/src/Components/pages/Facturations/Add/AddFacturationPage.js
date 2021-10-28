import React from 'react'
import FacturationForm from '../Form/FacturationForm'
import { makeStyles } from '@mui/styles';
import { Paper } from '@mui/material'

const useStyles = makeStyles(theme => ({
    pageContent: {
        marginRight: "auto"
    }
}))

export default function AddFacturationPage() {
    const classes = useStyles()

    return (
        <>
            <Paper className={classes.pageContent} sx={{ p: 2, m : 5 }}>
                <FacturationForm />
            </Paper>
        </>
    )
}
