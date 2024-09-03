import { Grid } from "@mui/material";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from "dayjs";
import { useState } from "react";


export const DatePike = () => {
  const [value, setValue] = useState(dayjs('2024-09-03'));

  return (
    
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Grid container components={['DateCalendar']}>
      <Grid item label="Controlled calendar">
          <DateCalendar 
          value={value} 
          onChange={(newValue) => setValue(newValue)}
          
           />
        </Grid>
    </Grid>
    </LocalizationProvider>
  );
}
          