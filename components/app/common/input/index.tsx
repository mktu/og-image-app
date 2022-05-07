import { forwardRef, InputHTMLAttributes } from 'react'
import styles from './styles.module.scss'

type Variants = {
    textSize?: 'sm' | 'md' | 'lg'
}

type Props = InputHTMLAttributes<HTMLInputElement> & Variants

const Input: React.FC<Props> = forwardRef<HTMLInputElement, Props>(({
    textSize = 'md',
    className,
    ...props
}, ref) => {
    return <input ref={ref} {...props} className={`${styles.input} ${styles[`input-${textSize}`]} ${className}`} />
})

Input.displayName = 'Input'

export default Input