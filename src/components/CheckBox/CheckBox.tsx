import React from 'react'
import {Checkbox} from '@mui/material'
import { CheckProps } from './CheckBoxProps'
const CheckBox = (props:CheckProps) => {
  return (
    <Checkbox {...props}/>
  )
}

export default CheckBox