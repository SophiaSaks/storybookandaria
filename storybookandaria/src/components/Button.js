import React from 'react'
import { useButton } from '@react-aria/button'

function Button({ onPress, children }) {
  const { buttonProps } = useButton({ onPress })
  return <button 
  {...buttonProps}
  style={{
    background: '#0098C3',
    color: 'whitesmoke',
    borderRadius: 4,
    padding: 10,
    border: 'none',
    cursor: 'pointer',
    width: 107,
    height: 43,
    filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15))',
    fontSize: 16,
  }}

  >{children}</button>;
}

export default Button;