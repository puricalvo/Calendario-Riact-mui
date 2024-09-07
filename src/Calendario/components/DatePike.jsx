import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import 'dayjs/locale/es';
import { Grid  } from '@mui/material';
import { useState } from 'react';



dayjs.extend(updateLocale);
// Replace "en" with the name of the locale you want to update.
dayjs.updateLocale('ES', {
  Domingo: 0, Lunes: 1., Martes: 2, Miercoles: 3, Jueves: 4, Viernes: 5, Sabado: 6,
  weekStart: 1,
});


dayjs('2019-01-25').format('DD/MM/YYYY') // '25/01/2019'


export const DatePike = () => {
  const [value, setValue] = useState(null);

 
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}  adapterLocale="ES">
      <Grid container components={['DateCalendar']}>
        <Grid item label="DateCalendar">
          <DateCalendar className='react-calendar' 
              sx={{ 
                "& .MuiPickersDay-root": {  fontSize: "20px"  }          
            }}     
            value={value}
            onChange={(newValue, context) => {
              if (context.validationError == null) {
                setValue(newValue);
              }
            }}
            minDate={dayjs('1901-01-01')}
            maxDate={dayjs('2099-12-31')}
              format="DD/MM/YYYY"
              defaultValue={dayjs('2024-04-05')}
              views={['year', 'month', 'day']}
              dayOfWeekFormatter={(weekday) => `${weekday.format('dd')}.`}
              
          />
        </Grid>
      </Grid>
    </LocalizationProvider>
    
  );
}
          