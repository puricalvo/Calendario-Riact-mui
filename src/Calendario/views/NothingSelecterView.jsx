
import { Divider, Grid, Typography } from "@mui/material";
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';

export const NothingSelecterView = () => {
  return (
    
    <Grid
        container
        spacing={ 0 }
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ 
          minHeight: 'calc(100vh - 110px)', 
          backgroundColor: 'primary.main', 
          padding: 0,
          marginTop: 0,
          borderRadius: 3 
        }}
    >
      <Grid item size={{ xs: 12 }}>
          <AirportShuttleIcon sx={{fontSize: 100, color: "white"}} />
      </Grid>
        <Divider/>
      <Grid item size={{ xs: 12 }}>
          <Typography color='white' variant="h3">Bienvenido...</Typography>
      </Grid>
  
      
    </Grid>
  )
}

