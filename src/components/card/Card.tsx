import { useState } from 'react'
import './card.css'

const Card = ({ title, description }: {
    title: string, description: string
}) => {
    const [numero, setNumero] = useState(0)

    return (
        <div className='card'>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{numero}</p>
            <button onClick={() => setNumero((prev) => prev += 1)}>asdasd</button>
        </div>
    )
}

export default Card