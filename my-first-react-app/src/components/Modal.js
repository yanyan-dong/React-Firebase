import ReactDom from 'react-dom'
import './Modal.css'

export default function Modal({ children, handleClose }) {
    return ReactDom.createPortal((
        <div className="modal-backdrop">
            <div className="modal">
                {children}
                <button onClick={handleClose}>close</button>
            </div>
            
        </div>
    ), document.body)
    // ReactDom.createPortal: move to other element(document.body)
}

// export default function Modal(props) {
//     return (
//         <div className="modal-backdrop">
//             <div className="modal">
//                 {props.children}
//             </div>
            
//         </div>
//     )
// }
