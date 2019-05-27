import React from 'react'
import { addPropsToChildren } from '../util/util'
export default props => 
    <div>
        { addPropsToChildren(props) }
    </div>