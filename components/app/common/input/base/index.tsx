import { forwardRef, InputHTMLAttributes } from 'react'
import styles from './styles.module.scss'

type Variants = {
    textSize?: 'sm' | 'md' | 'lg',
    border?: 'default' | 'none'
}

type Props = InputHTMLAttributes<HTMLInputElement> & Variants

const Input = forwardRef<HTMLInputElement, Props>(({
    textSize = 'md',
    border = 'default',
    className,
    ...props
}, ref) => {
    return <input 
    ref={ref}  
    className={`
    ${styles.input} 
    ${styles[`input-border-${border}`]}
    ${styles[`input-${textSize}`]}
     ${className}`} {...props}/>
})

Input.displayName = 'Input'

export default Input