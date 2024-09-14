import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";



import { CalendarLayout } from "../layout/CalendarLayout";
import { CardConductor, NothingSelecterView } from "../views";
import { startNewNote } from "../../store/calendario/thunks";


export const HomePage = () => {

  const dispatch = useDispatch();
  const { isSaving, active } = useSelector( state => state.calendario);

  const onClickNewNote = () => {
    dispatch( startNewNote() );
    
  }

  return (
    
    <CalendarLayout>

      {
        (!!active)
         ? <CardConductor/>
         : <NothingSelecterView/>
      }
      
      <IconButton
        onClick={ onClickNewNote }
        size="large"
        disabled={ isSaving }
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
