import { Link as RouterLink } from 'react-router-dom';
import { Button, ButtonGroup, Grid, Link, Typography } from "@mui/material"

export const Sidebar2 = () => {
  return (
    <>
        <Grid item size={{ xs: 12, md: 3 }}  sx={{ flexGrow: 'auto'}}>
                <Typography variant='h3' component='div' color='black' sx={{ p:1, display: { xs: "none", md: "inline-flex" } }}>Servicios y Mensajeria</Typography>
                <Typography variante='p' fontSize={20} component='small' sx={{ p:0, display: { xs: "none", md: "inline-flex" } }}>para este dia:</Typography>
                <Typography variant="h6" component='small' sx={{ p:0, display: { xs: "none", md: "inline-flex" } }}>29-08-24</Typography>
            <ButtonGroup variant="outlined" component='small'  size="large" aria-label="large button group" sx={{ p:1 }} >
            <Button  color="error" sx={{ fontSize: '0.75rem', mr: 0, ml: '-2px'}}>Marcar como leído</Button>
            <Button    
              color="error" 
              sx={{ fontSize: '0.75rem', mr: 0, ml: '-2px'}}>
              <Link component={ RouterLink } color='inherit' to="/home">
                Ver hoja del conductor
              </Link>
            </Button>
            </ButtonGroup>
        </Grid>
            
    </>
  )
}
