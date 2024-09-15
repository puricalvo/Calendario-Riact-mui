import {  Badge, FormControlLabel, Grid, Icon,  IconButton,  List,  ListItem,   ListItemIcon,  ListItemText,  Typography, Checkbox } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';




function notificationsLabel(count) {
  if (count === 0) {
    return 'no notifications';
  }
  if (count > 99) {
    return 'more than 99 notifications';
  }
  return `${count} notifications`;
}

  
  
  
  export const MessagesConductor = () => {


  return (
    <Grid container justifyContent="space-between">
        <Grid item >
            <Icon fontSize="large">
                <CommentRoundedIcon color="error" fontSize="large"/> 
            </Icon>
            <Typography variant="h4" component="div">Comentarios al conduct@r...</Typography>
        </Grid>

        


        <Grid container direction='row' 
          justifyContent='space-between' 
          alignItems='center'
          padding='3'
          sx={{
            display:'flex',
            flexwrap: 'wrap'
          }} >


          
              <List>
                  <ListItem >
                    
                      <ListItemIcon>
                        <FormControlLabel  control={<Checkbox />}  />
                      </ListItemIcon>
                      <Grid container>
                        <ListItemText primary={' mensaje de hoy' }/>
                      </Grid>        
                   
                  </ListItem>
              </List>    

            
                <Grid>
                <IconButton  aria-label={notificationsLabel(100)}>
                    <Badge badgeContent={100} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                </Grid>
             

              

                    
                
               
             
            
                   
                  
            
            
               
               
           

          
            
                  
            
            
        </Grid>
        

    </Grid>
        
            

    
  );
}
