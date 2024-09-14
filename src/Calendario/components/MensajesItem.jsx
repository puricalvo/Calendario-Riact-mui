import {   FormControlLabel, Grid, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import { useMemo } from "react";



export const MensajesItem = ({ title = '', body, id  }) => {

    const newTitle = useMemo( () => {
        return title.length > 17
            ? title.substring(0,17) + '...'
            : title;
    },[ title ])

  return (
    <ListItem >
    <ListItemButton>
      <ListItemIcon>
        <FormControlLabel  control={<Checkbox />}  />
      </ListItemIcon>
      <Grid container>
        <ListItemText primary={ newTitle }/>
        <ListItemText secondary={ body }/>
      </Grid> 
    </ListItemButton>
  </ListItem>
  )
}
