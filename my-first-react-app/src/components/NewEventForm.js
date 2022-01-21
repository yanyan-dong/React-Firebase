import { useState, useRef } from 'react'
import './NewEventForm.css'

// forms and label in React
export default function NewEventForm( {addEvent} ) {
    // way a: useState and onChange event
    const [title, setTitle] = useState('')
    const [date, setDate] =useState('')
    const [location, setLocation] = useState('manchester')

    // // way b: useRef
    // const title = useRef()
    // const date = useRef()


    // reset the state, control the value of inputs
    const resetForm =() => {
    // way a:
        setTitle('')
        setDate('')
        setLocation('manchester')

    // // way b:
    //     title.current.value = ""
    //     date.current.value = ""
    }

    const handleSubmit = (e) => {
        e.preventDefault() // revents the default behavior of the browser refresh.

    // create a new event object
    //     // way b:
    //     const event = {
    //         title: title.current.value,
    //         date: date.current.value,
    //         id : Math.floor(Math.random() * 10000)
    //     }


        // way a:
        const event = {
            title: title,
            date: date,
            location: location,
            id: Math.floor(Math.random() * 10000) // not a perfect way of creating a random number because occasionally you will get the same one. But that's going to be extremely rare in this case when we're just adding one or two new events.
        }

        console.log(event)

        addEvent(event)
        //every time a user submits a new event, reset the form
        resetForm()
    }

    return (
        <form className="new-event-form" onSubmit={handleSubmit}>
            {/* <label htmlFor="event">Event title:</label>
            <input type="text" id="event" /> */}

            <label>
                <span>Event Title:</span>
                <input 
                    type="text" 
                    // way a:
                    // onChange event: we can create a handleChange fuction, but there are more than one place need to use the fuction, so just use (e) => setTitle(), and (e) => setDate()
                    onChange={(e) => setTitle(e.target.value)} 
                    value={title} 
                    // // way b:
                    // ref={title}
                />
            </label>
            <label>
                <span>Event Date:</span>
                <input 
                    type="date" 
                    // way a:
                    onChange={(e) => setDate(e.target.value)} 
                    value={date} 
                    // // way b:
                    // ref={date}
                />
            </label>
            <label>
                <span>Event Location:</span>
                {/* select box */}
                <select onChange={(e) => setLocation(e.target.value)}>
                    <option value="manchester">Manchester</option>
                    <option value="paris">Paris</option>
                    <option value="chicago">chicago</option>
                </select>
            </label>
            <button>Submit</button>

            {/* <p>title - {title}, date - {date}</p>
            <p onClick={resetForm}>reset the form</p> */}

        </form>
    )
}
