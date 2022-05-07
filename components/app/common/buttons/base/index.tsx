import { forwardRef, ButtonHTMLAttributes } from 'react'
import styles from './styles.module.scss'

type Variants = {
    textSize?: 'sm' | 'md' | 'lg'
}

export type BaseProps = ButtonHTMLAttributes<HTMLButtonElement> & Variants

const Button = forwardRef<HTMLButtonElement, BaseProps>(({
    textSize = 'md',
    className,
    ...props
}, ref) => {
    return <button ref={ref} {...props} 
    className={`${styles.button} ${styles[`button-${textSize}`]} ${className}`} />
})

Button.displayName = 'Button-Base'

export default Button