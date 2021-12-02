// if the image in src folder, need to import, then use img tag and {} when needed
import './App.css';

// useState hook: component data can be changed over time or in reaction to something
import { useState } from 'react'

function App() {
  // const [initialState, toChangeStateValue] = useState()
  // reevaluate the fuction with new state value
  
  // const [name, setName] = useState('Susan')

  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id: 1},
    {title: "bowser's live stream", id: 2},
    {title: "race on moo moo farm", id: 3}
  ])

  const handleClick = (id) => {
    // setName('Mike')
    // console.log(name)

    // use filter() method: will not change the original array, it returns a new array which has items filtered or removed from the original one.
    setEvents((prevEvents) => { // previous state value is guaranteed to be up to date. prevState holds is the value of state before the setState was triggered.
      return prevEvents.filter((event) => {
        return id !== event.id
        // returns true will keep it, returns false will filter it
    })
    })
    console.log(id)
  }

  return (
    <div className="App">
      {/* <h1>My name is {name}.</h1>
      <button onClick={handleClick}>Change name</button> */}
       
       {/* map() method: cycle througn an array and return a new array*/}
       {/*use curly brace, because using dynamic JS*/}
       {events.map((event, index) => ( 
         <div key={event.id}>
           <h2>{index} - {event.title}</h2>
           {/* not using handleClick(event.id) directly, because it will fire right away in the browser when the component is first rendered. */}
           <button onClick={() => handleClick(event.id)}>Delete the event</button>
         </div>
       ))}
       {/* return JSX, use parenteses ()*/}
    </div>
  );
}

export default App;
