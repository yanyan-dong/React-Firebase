import ReactDom from 'react-dom'
import './Modal.css'

export default function Modal({ children, isSalesModal }) {
    return ReactDom.createPortal((
        <div className="modal-backdrop">
            <div className="modal" style={{
                border: "4px solid", 
                borderColor: isSalesModal ? "#ff4500" : "#555", // Dynamic Inline Styles
                textAlign: "center"
                }}>
                {/* inline style: the 1st curly braces mean dynamic content, 2nd curly braces mean an object (key: "value")*/}
                {children}
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
