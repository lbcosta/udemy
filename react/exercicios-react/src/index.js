import React from 'react'
import ReactDOM from 'react-dom'
import Familia from './components/Familia'
import FamiliaFuncional from './components/FamiliaFuncional'
import Membro from './components/Membro'

ReactDOM.render(
    <>
    <Familia sobrenome='Pereira' >
        <Membro nome='Claudio'/>
        <Membro nome='Marcela'/>
        <Membro nome='Thomaz'/>
    </Familia>
    <FamiliaFuncional membros={['Claudio', 'Marcela', 'Thomaz']} sobrenome='Funcional'/>
    </>
, document.getElementById('root'))