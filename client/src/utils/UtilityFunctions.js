// This will be a file containing utility functions that we can use for the entire project
import { sectionsName } from "./constants/sections"


// This function check which of the section is included in the route and returns it
const returnCurrentSection = (pathname) => {
    let path;
    sectionsName.map((item, index)=>{
        if (pathname.indexOf(item) > -1) path = item
    })
    console.log(`Current section : ${path}`)
    return path
}

export default returnCurrentSection
