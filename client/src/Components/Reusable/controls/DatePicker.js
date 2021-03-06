import React from "react";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import DateFnsUtils from '@date-io/date-fns'
import { TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { DatePicker as MuiDatePicker } from "@mui/lab";
import frLocale from "date-fns/locale/fr";

import { format } from "date-fns";

const localeMap = {
  fr: frLocale,
};


export default function DatePicker(props) {
  const { name, label, value, onChange } = props;
  const [locale, setLocale] = React.useState('fr');

  // Convert target to a value so onChange event from useForm can handle it
  const convertToDefaultEventParameter = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={localeMap[locale]}>
      <MuiDatePicker
        label={label}
        value={value}
        onChange={(date) =>
          onChange(convertToDefaultEventParameter(name, date))
        }
        renderInput={(params) => <TextField sx={{ mt: 2 }} {...params} />}
      />
    </LocalizationProvider>
  );
}
