import React from 'react'
import EmployeeForm from '../EmployeeForm'
import { makeStyles } from '@mui/styles';
import { Paper } from '@mui/material'

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

export default function AddEmployee() {

    const classes = useStyles()

    return (
        <div>
            <Paper classes={classes.pageContent} sx={{ p: 2, m : 5 }}>
                <EmployeeForm />
            </Paper>

        </div>
    )
}
