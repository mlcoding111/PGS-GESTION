import { Button as MuiButton} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useLocation } from 'react-router'

import React from 'react'
import Dispatch from '../../../utils/Functions/Dispatch/Dispatch.js'
import { useHistory } from 'react-router';
import returnCurrentSection from '../../../utils/UtilityFunctions'

// Redux import
import { useDispatch } from "react-redux";

const useStyles = makeStyles(theme=>({
    root:{
        margin: theme.spacing(0.5),
        marginRight: "1rem!important"
    },
    label: {
        textTransform: 'none'
    }

}))


export default function Button(props) {
    const history = useHistory()
    const {text, size, color, variant, onClick, values, type, dispatchType, setValues, initialFValues, id, ...other} = props

    const dispatch = useDispatch()
    const location = useLocation()
    let { pathname } = location

    const makeRequest = (dispatchType) => {
        return new Promise((resolve, reject) => {
            console.log('Making dispatch request..')
            if(dispatchType == "add"){
                resolve(dispatch(Dispatch.handleCreateDispatch(pathname, values)))
            }else if(dispatchType == "update"){
                resolve(dispatch(Dispatch.handleUpdateDispatch(pathname, values, id)))
            }else{
                reject("error....")
            }
        })
    }

    const pushHistory = () => {
        return new Promise((resolve, reject)=>{ 
            resolve(history.push(`/${returnCurrentSection(pathname)}`))
        })
    }

    // This function handle the dispatch request. We make sure the dispatch is handled and the grid list is updated before directering the user to the grid list
    async function doWork(dispatchType){
        try{
            const response = await makeRequest(dispatchType)
            console.log('work executed')
            const processedResponse = await pushHistory()
            console.log("history push")
        }catch(err){
            console.log(err)
        }

    }
        

    const handleClick = (e) => {
        e.preventDefault()
        switch(dispatchType){
            case "reset":
                setValues(initialFValues)
                console.log('reset')
                break
            case "add":
                doWork(dispatchType)
                break
            case "delete":
                console.log('delete')
                break
            case "update":
                doWork(dispatchType)
                break

            default:
                console.log('unknow button')
        }

    }

    const classes = useStyles()

    return (
        <MuiButton
            variant={variant || "contained"} // We define defaults values but we can still change it if we pass a props
            size={size || "large"}
            color={color || "primary"}
            text={text}
            onClick={handleClick}
            {...other} // Can take other props such as "Type" and etc..
            classes={{root: classes.root, label: classes.label}}
            > 
                {text}
        </MuiButton>
    )
}
