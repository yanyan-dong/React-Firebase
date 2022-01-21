// CHALLENGE - Reusable Event List Component

import React from 'react'
import styles from './EventList.module.css'

    export default function EventList({ events, handleClick }) {
        return (
            <div>
                {/* map() creates a new array */}
                {/* The index is used inside map() method to state the position of each element in an array, but it doesn’t change the original array. */}
                {events.map((event, index) => (
                    <div className={styles.card} key={event.id}>
                        <h2>{index} - {event.title}</h2>
                        <p>{event.location} - {event.date}</p>
                        <button onClick={() => handleClick(event.id)}>delete event</button>
                    </div>
                ))}
            </div>
        )
    }


// React.Fragment

// export default function EventList({ events, handleClick }) {
//     return (
//         <div>
//             {events.map((event, index) => (
//                 <React.Fragment key={event.id}>
//                     <h2>{index} - {event.title}</h2>
//                     <button onClick={() => handleClick(event.id)}>delete event</button>
//                 </React.Fragment>
//             ))}
//         </div>
//     )
// }
