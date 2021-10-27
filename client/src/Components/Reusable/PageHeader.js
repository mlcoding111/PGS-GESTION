// This will be the header for each page 
import React from 'react'
import {Paper, Card, Typography} from '@mui/material'
import { makeStyles} from '@mui/styles'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fdfdff',
        padding:theme.spacing(4),
        marginBottom: theme.spacing(2),
        textAlign: "left",
        display: "flex",
        justifyContent: "center"
    }
}))

export default function PageHeader({title, subTitle, icon}) {
    const classes = useStyles()
    return (
        <Paper elevation={3} square className={classes.root}>
            <div>
                <Card>
                    {icon}
                </Card>
                <div>
                    <Typography 
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: 'bold!important' }}>
                    {title}    
                    </Typography>
                    {/* <Typography 
                    variant="h6"
                    component="div">
                    {subTitle}    
                    </Typography> */}
                </div>

            </div>
                
        </Paper>
    )
}
