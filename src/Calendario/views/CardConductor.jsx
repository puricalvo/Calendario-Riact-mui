import {   Box, Card,  Divider,  Grid,  Typography } from "@mui/material";
import {  CalendarToday } from "@mui/icons-material";
import { ListServicios } from "../components/ListServices";
import { MessagesConductor } from "../components/MessagesConductor";
import { DatePike } from "../components/DatePike";



  


export const CardConductor = () => {

    


  return (
     <Grid container  
     direction='row' 
     justifyContent='center' 
     alignItems='center'
     padding='3'
     sx={{ display: 'flex',  }}
     > 

    <Card  sx={{ 
        flexBasis: '25em',   
        padding: 2, 
        border: 1, 
        borderColor: 'black', 
        justifyContent:'space-between', 
        flexwrap: 'wrap',
        }}>
    <Grid item size={{ xs: 6, sm:2, md: 3  }} 
      
    >
        <DatePike/>
    </Grid>
    </Card>
    
    <Divider/>
    <Card  sx={{ flexBasis: '70em',  padding: 2, border: 1, borderColor: 'red', justifyContent:'space-between',flexwrap: 'wrap'}}>
        <Grid  container direction='row' justifyContent="space-around" sx={{ mb:1, border: 0 }} >
          

        <Typography variant="h4" >ServicioL.P20T.102</Typography>
            
            <Typography variant="h5" letterSpacing={2}  ><CalendarToday color="error" fontSize="large" />
            <Typography variant="body1" component="span" sx={{ textAlign:"center"}}>01-09-24</Typography>
            </Typography>
  
           <Divider/>
        
                            <ListServicios/>
        
    </Grid>
  </Card>


  <Divider/>

                             <MessagesConductor/>
     
 </Grid>
        
        
    
        
   
       
  
      

  )    
}
