import { Box, Divider, Grid, Toolbar } from "@mui/material"
import { Navbar, Sidebar } from "../components";




export const CalendarLayout = ({children}) => {
  return (
   
        <Grid container
          className="animate__animated animate__fadeIn animate__faster" 
          direction='row'  
          padding='1' 
          justifyContent='space-around' 
          alignItems='center'
          sx={{ display: 'flex', flexwrap: 'wrap', width: "100%",  }}
        >
               
                      <Navbar />

                      <Divider/>
                      

                      
              
              
                          
              
       
         
       

      <Grid 
              
              size={{ xs:12, md: 2,  }}
              sx={{ 
                    height: {sm: "100%"} ,
                    width: { sm: "80%" },
                    backgroundColor: 'white', 
                    padding: 2, 
                    borderRadius: 0,
                    marginTop: 0 ,
                    direction:"row"
                }}
      >
                
          
           <Toolbar/>
            
            { children }
           
              

        </Grid>

        </Grid>
  )
}
