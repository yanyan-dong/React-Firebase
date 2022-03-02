import { useLocation } from 'react-router-dom'

export default function Contact() {
    const queryString =useLocation().search
    // console.log(queryString)

    const queryParams = new URLSearchParams(queryString)
    // give queryParams an object
    const name = queryParams.get("name")
    // use the get method to get a specific parameter: name

    return (
        <div>
            <h2>Hey {name}, contact us here...</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, provident temporibus. Enim explicabo praesentium qui sapiente ea perferendis aspernatur autem nihil error maxime facere porro fuga, velit officia aut odit.</p>
        </div>
    )
}
