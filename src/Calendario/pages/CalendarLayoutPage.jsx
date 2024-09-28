import {  Grid } from "@mui/material";
import { Navbar } from "../components/Navbar";
import { NothingSelecterView } from "../views/NothingSelecterView";
import { Sidebar2 } from "../components";




export const CalendarLayoutPage = () => {
  return (
    <Grid container>

            <Navbar />

            <Sidebar2 />

            <NothingSelecterView/>
            

            

    </Grid>
  )
}
