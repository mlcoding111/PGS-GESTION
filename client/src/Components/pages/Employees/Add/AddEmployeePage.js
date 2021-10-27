import React from 'react'
import EmployeeForm from '../EmployeeForm'
import { makeStyles } from '@mui/styles';
import { Paper } from '@mui/material'

const useStyles = makeStyles(theme => ({
    pageContent: {
        marginRight: "auto"
    }
}))

export default function AddEmployee() {

    const classes = useStyles()

    return (
        <>
            <Paper className={classes.pageContent} sx={{ p: 2, m : 5 }}>
                <EmployeeForm />
            </Paper>
        </>
    )
}
