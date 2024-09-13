import {  Card,  Divider,  Grid,  Typography } from "@mui/material";
import {  CalendarToday } from "@mui/icons-material";
import { ListServicios } from "../components/ListServices";
import { MessagesConductor } from "../components/MessagesConductor";
import { DatePike } from "../components/DatePike";
import { Sidebar } from "../components";




  


export const CardConductor = ({children}) => {

    


  return (
     <Grid container 
     className="animate__animated animate__fadeIn animate__faster"  
     direction='row' 
     justifyContent='center' 
     alignItems='center'
     padding='3'
     sx={{ display: 'flex',  }}
     > 
    <Grid container
      direction='row'
      justifyContent='space-around'

    >
        <Sidebar />
    </Grid>
    
    <Grid item size={{ xs: 6, sm:2, md: 3  }}    
      sx={{ borderRadius: 2}}
    >
      <DatePike/>
    </Grid>
    
    <Divider/>
    <Card  sx={{ flexBasis: '60em',  padding: 2, border: 1, borderColor: 'red', justifyContent:'space-between',flexwrap: 'wrap'}}>
        <Grid  container direction='row' justifyContent="space-around" sx={{ mb:1, border: 0 }} >
          

        <Typography variant="h4" >ServicioL.P20T.102</Typography>
            
            <Typography variant="h5" letterSpacing={2}  ><CalendarToday color="error" fontSize="large" />
            <Typography variant="body1" component="span" sx={{ textAlign:"center"}}>01-09-24</Typography>
            </Typography>
  
           <Divider/>
           <Grid item size={{ xs: 6, sm: 2, md: 8 }} 
              sx={{ borderRadius: 2 }}
           >

                            <ListServicios/>
           </Grid>
        
        
    </Grid>
  </Card>


  <Divider/>

    <Grid 
      container
      direction='row'
      justifyContent='center'  
    >
                             <MessagesConductor/>

    </Grid>
     
 </Grid>
        
        
    
        
   
       
  
      

  )    
}
