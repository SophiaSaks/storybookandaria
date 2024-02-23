import React from 'react'
import { useButton } from '@react-aria/button'
import {Button} from 'react-aria-components';

function MyButton({ onPress, children, isDisabled, primary }) {
  const { buttonProps } = useButton({ onPress })
  return <>
  {primary ?  <Button
  isDisabled={isDisabled}
  {...buttonProps}
  style={{
    background: isDisabled ? '#E0E0E0' :'#0098C3',
    color: isDisabled ? 'A6A6A6':'whitesmoke',
    borderRadius: 4,
    padding: 10,
    border: 'none',
    cursor: isDisabled? '': 'pointer',
    width: 107,
    height: 43,
    filter: isDisabled ? '':'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15))',
    fontSize: 16,
    
  }}

  >{children}</Button> : <Button
  isDisabled={isDisabled}
  {...buttonProps}
  style={{
    background: isDisabled ? '#E0E0E0' :'#009B48',
    color: isDisabled ? 'A6A6A6':'whitesmoke',
    borderRadius: 4,
    padding: 10,
    border: 'none',
    cursor: isDisabled? '': 'pointer',
    width: 107,
    height: 43,
    filter: isDisabled ? '':'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15))',
    fontSize: 16,
    
  }}

  >{children}</Button>}
 

  
  </>
}

export default MyButton;