import { Button, ButtonGroup, Grid, Typography } from "@mui/material"


export const Sidebar = () => {
  return (
    <>
         <Grid container  
          direction='row' 
          justifyContent='center' 
          alignItems='center'
          padding='1'
          sx={{
            display:'flex',
            flexwrap: 'wrap'
          }}
            >
            <Grid size={{ xs: 12, md: 3 }}  sx={{ flexBasis: 'auto'}}>
                <Typography variant='h3' component='div' color='black' sx={{ p:1, display: { xs: "none", md: "inline-flex" } }}>Servicios y Mensajeria</Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }} sx={{ flexBasis: 'auto', display: { xs: "none", md: "inline-flex" }}} >
                <Typography variante='h5' fontSize={25} component='p'>para este dia:</Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }} sx={{ flexBasis: 'auto'}} >
                <Typography variant="h6" component='data' sx={{ p:1, display: { xs: "none", md: "inline-flex" } }}>29-08-24</Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }} sx={{ flexBasis: 'auto'}} >
            <ButtonGroup variant="outlined" size="large" aria-label="Large button group" sx={{ p:1 }} >
            <Button  color="error" sx={{ fontSize: '1rem', mr: 0, ml: '-2px'}}>Marcar como leído</Button>
            <Button  color="error" sx={{ fontSize: '1rem', mr: 0, ml: '-2px'}}>Ver hoja conductor/a</Button>
            </ButtonGroup>
            </Grid>
         </Grid>

    
    </>    
  )
}
