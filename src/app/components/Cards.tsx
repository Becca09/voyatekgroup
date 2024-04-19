
import React from 'react'
import { LinkOrButton } from './LinkOrButton'

interface TripInfoProps {
    head: string,
    details: string
    classname: string
    buttonText: string
    buttonClass: string
}

const Cards = ({ head, details, classname, buttonClass, buttonText }: TripInfoProps) => {
    return (
        <div className={`p-3 rounded mt-10 ${classname}`} style={{ maxWidth: '200px' }}>
            <h3 className="mb-3">{head}</h3>
            <p className="mb-10" >{details}</p>
            <LinkOrButton className={buttonClass}>{buttonText}</LinkOrButton>
        </div>
    )
}

export default Cards