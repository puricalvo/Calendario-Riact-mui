import { Badge,  Checkbox,  Divider, Grid, Icon, IconButton, Toolbar, Typography } from "@mui/material";
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';

import MailIcon from '@mui/icons-material/Mail';


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
            <Grid item size={{ xs:12, md: 8, p: 2 }}>
                <Typography variant="body1" component="p">
                    <Checkbox />
                    Hola, tienes que recoger a Maria a las 12:30.
                </Typography>
            </Grid>
            <Grid item size={{ md: 4, p: 4 }}>
                <IconButton aria-label={notificationsLabel(100)}>
                    <Badge badgeContent={100} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
            </Grid>
        </Grid>
        

    </Grid>
        
            

    
  );
}
