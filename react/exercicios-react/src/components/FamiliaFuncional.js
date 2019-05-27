import React from 'react'
import Membro from './Membro'

export default ({ membros, sobrenome }) => 
    <div>
        { membros.map(membro => <Membro nome={membro} sobrenome={sobrenome}/>) }
    </div>