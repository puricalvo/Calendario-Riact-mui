import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store";


export const useCalendarStore = () => {

    const dispatch = useDispatch();

    //* Funcion para activar el calendario
    const { events, activeEvent } = useSelector( state => state.calendario); //! El state.calendario es el nombre de la carpeta...
    
    //* Funcion para que se muestre el evento  en el modal
    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent( calendarEvent ) );
    }

    //* Funcion para grabar un nuevo evento en el modal
    const startSavingEvrnt = async( calendarEvent ) => {
        // Todo: llegar al backend

        // Todo: Si todo sale Bien
        if ( calendarEvent._id ) {
          // estoy Actualizando si tiene el mismo id...
          dispatch( onUpdateEvent({ ...calendarEvent}) );
        } else {
          // creando uno nuevo...
          dispatch( onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }) )
        }
    }
    //* Borrar un evento que ya existe...
    const startDeletingEvent = () => {
      //Todo: llegar al backend
      
      dispatch( onDeleteEvent() ); // Borrar evento
    }



  return {
    //* Propiedades
    activeEvent,
    events,
    hasEventSelected: !!activeEvent,

    //* Metodos
    startDeletingEvent,
    setActiveEvent,
    startSavingEvrnt,
    
  }
}
