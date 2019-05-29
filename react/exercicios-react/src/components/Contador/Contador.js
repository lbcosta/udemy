import React, { useState, useEffect } from 'react'
import './styles.css'

export default props => {
    const [count, setCount] = useState(0)
    const [evenOrOdd, setEvenOrOdd] = useState('Par')

    useEffect(() => count % 2 === 0 ? setEvenOrOdd('Par') : setEvenOrOdd('Impar'))

    return (
        <div className='contador'>
            <h1>{ count }</h1>
            <p>{ evenOrOdd }</p>
            <button className='btn' onClick={() => setCount(count-1)} >Dec</button>
            <button className='btn' onClick={() => setCount(count+1)} >Inc</button>
        </div>
    )
}