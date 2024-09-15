import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonGroup, Divider, Grid, Typography } from "@mui/material"
import { startNewNote } from "../../store/calendario";
import { CardConductor, NothingSelecterView } from "../views";



export const Sidebar = () => {

  const dispatch = useDispatch();
  const { isSaving, active } = useSelector( state => state.calendario);

  const onClickNewNote = () => {
    dispatch( startNewNote() );
    
  }

  

  
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
            width: '100%'
          }}
            >
            

            <Grid size={{ xs: 12, md: 3 }}  sx={{ flexGrow: 'auto'}}>
                <Typography variant='h3' component='div' color='black' sx={{ p:1, display: { xs: "none", md: "inline-flex" } }}>Servicios y Mensajeria</Typography>
                <Typography variante='p' fontSize={20} component='small' sx={{ p:0, display: { xs: "none", md: "inline-flex" } }}>para este dia:</Typography>
                <Typography variant="h6" component='small' sx={{ p:0, display: { xs: "none", md: "inline-flex" } }}>29-08-24</Typography>
            <ButtonGroup variant="outlined" component='small'  size="large" aria-label="large button group" sx={{ p:1 }} >
            <Button  color="error" sx={{ fontSize: '0.75rem', mr: 0, ml: '-2px'}}>Marcar como leído</Button>
            <Button   onClick={ onClickNewNote } disabled={ isSaving } color="error" sx={{ fontSize: '0.75rem', mr: 0, ml: '-2px'}}>Ver hoja conductor/a</Button>
            </ButtonGroup>
            </Grid>
            
            
         </Grid>

         <Divider/>
         <Divider/>

        
        <Grid container
          direction='row' 
          justifyContent='center' 
          alignItems='center'
          padding='2'
          sx={{
            display:'flex',
            flexwrap: 'wrap',
            width: '80%'
          }}
        >
            {
                (!!active)
                 ? <CardConductor/>
                 : <NothingSelecterView/>
            }

      </Grid>
        
    
  </>    
  )
}
