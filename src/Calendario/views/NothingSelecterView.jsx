
import { Box, Divider, Grid, Typography } from "@mui/material";
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';

export const NothingSelecterView = () => {
  return (
    
    <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{
          minHeight: '70vh',
          display: 'flex',
          flexWrap: "wrap",
          backgroundColor: 'primary.main', 
          padding: 2,
          marginTop: 0,
          borderRadius: 3 ,
        }}
    >
      
      <Grid item size={{ xs: 1, sm: 2, md: 12 }} sx={{   textAlign: "center",  }}>
          <AirportShuttleIcon sx={{fontSize: 80, color: "white" }} />
          <Typography color='white' variant="h4">Bienvenido...</Typography>
      
      </Grid>
      
    </Grid>
      
  )
}

