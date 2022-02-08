import { useState, useEffect, useRef } from 'react'

export const useFetch = (url, _options) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    // use useRef to wrap an object/array argument, which is a useEffect dependency
    const options = useRef(_options).current

    useEffect(() => {// create the function inside the useEffect

        console.log(options)

        // abort controller
        const controller = new AbortController()

        const fetchData = async () => {
            setIsPending(true)

            // try catch block
            try {
                const res = await fetch(url, {signal: controller.signal})
                // console.log(res)
                if (!res.ok) {
                    throw new Error(res.statusText) // it will fire the catch block
                }
                const json = await res.json()
    
                setIsPending(false)
                setData(json)
                setError(null)
            } catch (err) {
                if (err.name === "AbortError") {
                    console.log('the fetch is aborted')
                } else {
                    setIsPending(false)
                    setError('Could not fetch the data')
                    console.log(err.message)
                }
            }
        }

        fetchData() // invoke the fetchDate() and get the data

        // clean up function
        return () => {
            controller.abort()
        }
    }, [url, options])
        // if the url is changed, it will trigger useEffect to run the function again, because url is useEffect dependancy 


    return { data, isPending, error } // return array or object
}

