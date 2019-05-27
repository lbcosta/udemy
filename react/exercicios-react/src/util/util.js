import React from 'react'

const addPropsToChildren = props => React.Children.map(props.children, child => React.cloneElement(child, { ...props }))

export { addPropsToChildren }