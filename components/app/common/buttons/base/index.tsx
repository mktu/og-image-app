import { forwardRef, ButtonHTMLAttributes } from 'react'
import styles from './styles.module.scss'

type Variants = {
    textSize?: 'sm' | 'md' | 'lg' | 'none',
    border ?: 'none' | 'rounded'
}

export type BaseProps = ButtonHTMLAttributes<HTMLButtonElement> & Variants

const Button = forwardRef<HTMLButtonElement, BaseProps>(({
    textSize = 'md',
    border = 'none',
    className,
    ...props
}, ref) => {
    return <button ref={ref} {...props} 
    className={`
        ${styles.button}
        ${styles[`button-${textSize}`]} 
        ${styles[`button-border-${border}`]}
        ${className}`} />
})

Button.displayName = 'Button-Base'

export default Button