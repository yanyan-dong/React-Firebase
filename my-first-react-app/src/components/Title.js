// props

import './Title.css'

// destructure the different properties from the props object directly in the function call
export default function Title({ title, subtitle }) {
    return (
        <div className="title-block">
            <h1 className="title">{title}</h1>
            <br/>
            <h2 className="subtitle">{subtitle}</h2>
        </div>
    )
}

// // other way: 

//import React from "react"

// export default function Title(props) {
//     return (
//         // <>...</> is a react fragment: wrapping the element in JSX, but when it outputs to the DOM, it doesn't output HTML tag.
//         <>
//             <h1 className="title">{props.title}</h1>
//             <br/>
//             <h2 className="subtitle">{props.subtitle}</h2>
//         </>
//     )
// }