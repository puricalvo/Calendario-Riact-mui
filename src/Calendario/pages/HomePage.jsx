import { Box, Grid, IconButton } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";



import { CalendarLayout } from "../layout/CalendarLayout";
import { CardConductor, NothingSelecterView } from "../views";


export const HomePage = () => {
  return (
    
    
    
    <CalendarLayout>
       
      
     
    
      <NothingSelecterView/>
      
      {/* <CardConductor/> */}

    
      <IconButton
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'dimgray',
          ":hover": {backgroundColor: 'error.main', },
          position: 'fixed',
          right: 50,
          bottom: 50, 
        }}
      >
        <AddOutlined sx={{ fontSize: 30}}/>
      </IconButton>
      
   
    </CalendarLayout>
  )
}
