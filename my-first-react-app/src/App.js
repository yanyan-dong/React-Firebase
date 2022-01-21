import './App.css'
import { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList'
import NewEventForm from './components/NewEventForm'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([])

  const addEvent = (event) => {
    // prevState: it holds the value of state before the setState was triggered by React
    setEvents((prevEvents) => {
      // return a new array
      return [...prevEvents, event]
    })
    setShowModal(false)
    // the modal will be closed after the form submitted, so we don't need the close button inside of the modal anymore
  }

  const handleClick = (id) => {
    setEvents(prevEvents => {
      return prevEvents.filter(event => id !== event.id)
    })
  }

  const abc="All the latest events in Marioland"

  return (
    <div className="App">

      {/* Title needed to inside of App div, because we can't have multiple parents inside JXS*/}
      <Title title="Events in Your Area" subtitle={abc} />
      {/* <Title title="another title" subtitle="another subtitle" /> */}
      

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>
      )}  
      {/* {showEvents && events.map((event, index) => (
        <React.Fragment key={event.id}>
          <h2>{index} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>delete event</button>
        </React.Fragment>
        // cannon use props in short <>...</> react fragment
      ))} */}

      {/* // CHALLENGE - Reusable Event List Component */}
      {showEvents && <EventList events={events} handleClick={handleClick}/>}

      {/* <Modal>
        <h2>10% OFF COUPON CODE!</h2>
        <p>Use the code WELCOME at the checkout.</p>
      </Modal> */}

      {!showModal && (
        <div>
          <h2>CHALLENGE - Showing the Modal</h2>
          <button onClick={() => setShowModal(true)}>Add New Event</button>
        </div>
      )}

      {showModal && <Modal isSalesModal={true}>
        <NewEventForm addEvent={addEvent}/>
      </Modal>}

    </div>
  );
}

export default App;