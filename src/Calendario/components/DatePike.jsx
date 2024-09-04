
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import 'dayjs/locale/de';
import { Grid } from '@mui/material';

dayjs.extend(updateLocale);
// Replace "en" with the name of the locale you want to update.
dayjs.updateLocale('es', {
  Domingo: 0, Lunes: 1., Martes: 2, Miercoles: 3, Jueves: 4, Viernes: 5, Sabado: 6,
  weekStart: 1,
});
export const DatePike = () => {

  return (

    <LocalizationProvider dateAdapter={AdapterDayjs}  adapterLocale="de">
      <Grid container components={['DateCalendar']}>
        <Grid item label="Uncontrolled calendar">
          <DateCalendar defaultValue={dayjs('2024-09-04')}
            views={['year', 'month', 'day']}
          />
        </Grid>
      </Grid>
    </LocalizationProvider>
    
  );
}
          