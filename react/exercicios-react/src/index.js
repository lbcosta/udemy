import React from 'react'
import ReactDOM from 'react-dom'
import Familia from './components/Familia'
import FamiliaFuncional from './components/FamiliaFuncional'
import Membro from './components/Membro'
import Contador from './components/Contador/Contador'

ReactDOM.render(
    <>
    <Familia sobrenome='Pereira' >
        <Membro nome='Claudio'/>
        <Membro nome='Marcela'/>
        <Membro nome='Thomaz'/>
    </Familia>
    <FamiliaFuncional membros={['Claudio', 'Marcela', 'Thomaz']} sobrenome='Funcional'/>
    <Contador />
    </>
, document.getElementById('root'))



// import React, { Component } from 'react'
// import { render, unmountComponentAtNode } from 'react-dom'
// import moment from 'moment'

// class Clock extends Component {
//     constructor() {
//         super()
//         this.state = { time : moment().format('D. MMMM YYYY H:mm:ss') }
//     }

//     componentDidMount() {
//         console.log('Starting Clock');
//         this.ticking = setInterval( _ => 
//             this.setState({ time : moment().format('DD MMMM YYYY H:mm:ss') })
//             , 1000
//         )
//     }

//     componentWillUnmount() {
//         clearInterval(this.ticking)
//         console.log('Stopping Clock');
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.onClose}>X</button>
//                 <h1>{this.state.time}</h1>
//             </div>
            
//         )
//     }
// }

// const target = document.getElementById('root')

// render(
//    <Clock onClose={ _ => unmountComponentAtNode(target)} /> 
// , target)