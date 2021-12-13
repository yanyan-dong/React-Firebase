import './App.css'
import { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id: 1},
    {title: "bowser's live stream", id: 2},
    {title: "race on moo moo farm", id: 3}
  ])

  console.log(showModal)

  const handleClick = (id) => {
    setEvents(prevEvents => {
      return prevEvents.filter(event => id !== event.id)
    })
  }

  const handleClose = () => {
    setShowModal(false)
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
          <button onClick={() => setShowModal(true)}>show modal</button>
        </div>
      )}

      {/* pass the handleClose function as a prop */}
      {showModal && <Modal handleClose={handleClose}>
        <h2>Terms and Conditions</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum totam omnis vel similique delectus temporibus ut quas praesentium quia incidunt, fuga quo maiores ipsum, eaque eveniet. Neque dolor iste ad.</p>
      </Modal>}

    </div>
  );
}

export default App;