import { useState } from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';


import { addHours } from 'date-fns';
import { TareaMes, CalendarEventBox, CalendarModal } from '../components';

import { localizer, getMessagesEs } from '../../helpers';






const events = [{
    title: 'Cumpleaño de jefe',
    notes: 'Hay que comprar el pastel',
    start: new Date(),
    end: addHours( new Date(), 2),
    bgColor: '#dc3545',
    user: {
        _id: '123',
        name: 'Fernando'
    }

}]


export const CalendarPage = () => {

    const [lastView, setLastView] = useState(localStorage.getItem('lastView' ) || 'week');

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
        console.log({ doubleClick: event });
    }

    const onSelect = ( event ) => {
        console.log({ click: event });
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

    </>
  )
}
