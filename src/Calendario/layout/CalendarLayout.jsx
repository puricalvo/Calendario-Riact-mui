import { Box, Divider, Grid, Toolbar } from "@mui/material"
import { Navbar, Sidebar } from "../components";




export const CalendarLayout = ({children}) => {
  return (
   
        <Grid container 
          direction='column'  
          padding='1' 
          justifyContent='space-around' 
          alignItems='center'
          sx={{ display: 'flex', flexwrap: 'wrap' }}
        >
               
                      <Navbar />

                      <Divider/>
                      
                      <Sidebar />

                      
              
              
                          
              
       
         
       

        <Box 
            component="main"
            sx={{ flexGrow: 1, p: 2, }}
        >


          
           <Toolbar/>
            
            { children }
           
              

        </Box>

        </Grid>
  )
}
