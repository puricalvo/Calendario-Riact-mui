import { useState } from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';


// import { addHours } from 'date-fns';
import { TareaMes, CalendarEventBox, CalendarModal, FabAddNew, FabDelete } from '../components';

import { localizer, getMessagesEs } from '../../helpers';
import { useCalendarStore, useUiStore } from '../../hooks';



export const CalendarPage = () => {

    const { openDateModal } = useUiStore(); 
    const { events, setActiveEvent  } = useCalendarStore();

    
    const [ lastView, setLastView ] = useState(localStorage.getItem('lastView' ) || 'week');

    const eventStyleGetter = ( event, start, end, isSelected ) => {
        

        const style = {
            backgroundColor: '#dc3545',
            borderRadius: '0px',
            opacity: 0.8,
            color: 'white' 
        }

        return {
            style
        }
    }

    const onDoubleClick = ( event ) => {
        // console.log({ doubleClick: event });
        openDateModal();
    }

    const onSelect = ( event ) => {
      // console.log({click: event });
        setActiveEvent( event );
    }

    const onViewChanged = ( event ) => {
       localStorage.setItem('lastView', event );
       setLastView( event )
    }


  return (
    <>
        <TareaMes/>
        
        <Calendar
          culture='es'
          localizer={ localizer }
          events={ events }
          defaultView={ lastView }
          startAccessor="start"
          endAccessor="end"
          style={{ height: 'calc( 100vh - 80px)' }}
          messages={ getMessagesEs() }
          eventPropGetter={ eventStyleGetter }
          components={{
            event: CalendarEventBox
          }}
          onDoubleClickEvent={ onDoubleClick }
          onSelectEvent={ onSelect }
          onView={ onViewChanged }
        />

          <CalendarModal />

          //Botones Flotantes...
          <FabAddNew />
          <FabDelete />

    </>
  )
}
