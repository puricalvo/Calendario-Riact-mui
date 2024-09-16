import { Navbar, Sidebar } from "../components";
import { Divider, Grid, Toolbar } from "@mui/material";


export const HomePage = ({ children }) => {

 

  return (
    <>
    
    
    
    <Grid container
          className="animate__animated animate__fadeIn animate__faster" 
          direction='row'  
          padding='1' 
          justifyContent='center' 
          alignItems='center'
          sx={{ display: 'flex', flexwrap: 'wrap', width: "100%" }}
        >
        

                      <Navbar />
                      <Divider/>
        </Grid>
               
                      

        <Grid container
          className="animate__animated animate__fadeIn animate__faster" 
          direction='row'  
          padding='1' 
          justifyContent='center' 
          alignItems='center'
          sx={{ display: 'flex', flexwrap: 'wrap', width: "100%",  }}
        >  

                      <Sidebar />
                      <Divider/>
        
        </Grid>

      
     
                
          <Toolbar/>
           
            
            { children }
           
      
      </> 
  )
}
