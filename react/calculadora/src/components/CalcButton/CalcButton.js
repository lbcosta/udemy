import React from 'react'
import './styles.css'

export default props => {
    const classesTemplate = `
        btn
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}
    `

    return <button 
        className={classesTemplate}
        onClick={ _ => props.click && props.click(props.label)} >
        {props.label}
        </button>
}