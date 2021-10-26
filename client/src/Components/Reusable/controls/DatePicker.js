import React from 'react'
import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DateFnsUtils from '@date-io/date-fns'
import { TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { DatePicker as MuiDatePicker } from '@mui/lab';


export default function DatePicker(props) {

    const { name, label, value, onChange } = props

    // Convert target to a value so onChange event from useForm can handle it
    const convertToDefaultEventParameter = (name, value) => ({
        target: {
            name, value
        }
    })

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MuiDatePicker
          label={label}
          value={value}
          onChange={ date => onChange(convertToDefaultEventParameter(name, date))}
          renderInput={(params) => <TextField sx={{ mt : 2}} {...params} />}
        />
      </LocalizationProvider>
      
    )
}


// import React from 'react'
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DateFnsUtils from '@date-io/date-fns'
// import { TextField } from '@mui/material';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import { DatePicker as MuiDatePicker } from '@mui/lab';


// export default function DatePicker(props) {
//     const [value, setValue] = React.useState(null);
//     // const { name, label, value, onChange } = props
//     return (
//         <LocalizationProvider dateAdapter={AdapterDateFns}>
//         <MuiDatePicker
//           label="Basic example"
//           value={value}
//           onChange={(newValue) => {
//             setValue(newValue);
//           }}
//           renderInput={(params) => <TextField {...params} />}
//         />
//       </LocalizationProvider>
      
//     )
// }
