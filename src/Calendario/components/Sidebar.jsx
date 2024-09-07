import { Button, ButtonGroup, Grid, Typography } from "@mui/material"


export const Sidebar = () => {
  return (
    <>
         <Grid container  
          direction='row' 
          justifyContent='space-around' 
          alignItems='center'
          padding='2'
          sx={{
            display:'flex',
            flexwrap: 'wrap',
          }}
            >
            <Grid size={{ xs: 12, md: 3 }}  sx={{ flexGrow: 'auto'}}>
                <Typography variant='h3' component='div' color='black' sx={{ p:1, display: { xs: "none", md: "inline-flex" } }}>Servicios y Mensajeria</Typography>
                <Typography variante='p' fontSize={20} component='small' sx={{ p:0, display: { xs: "none", md: "inline-flex" } }}>para este dia:</Typography>
                <Typography variant="h6" component='small' sx={{ p:0, display: { xs: "none", md: "inline-flex" } }}>29-08-24</Typography>
            </Grid>
            
            <Grid size={{ xs: 12, md: 3 }} sx={{ flexGrow: 'auto'}} >
            <ButtonGroup variant="outlined" size="large" aria-label="Large button group" sx={{ p:1 }} >
            <Button  color="error" sx={{ fontSize: '1rem', mr: 0, ml: '-2px'}}>Marcar como leído</Button>
            <Button  color="error" sx={{ fontSize: '1rem', mr: 0, ml: '-2px'}}>Ver hoja conductor/a</Button>
            </ButtonGroup>
            </Grid>
         </Grid>

    
    </>    
  )
}
