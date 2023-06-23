import React from "react"
import { CSSProperties } from "react"
export interface ButtonProps {
    type ?:"default" | "primary" | "warning" | "danger"
    label :  string,
    onClick?: ()=>void
    disabled?: boolean
    style?: CSSProperties
    className?:string
}
 const Button =(props:ButtonProps)=>{
    const {disabled,onClick,label,type,style,className} = props
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            type="button"
            style={style}
            className={className}
        >
            {label}
        </button>
    )
}
export default Button