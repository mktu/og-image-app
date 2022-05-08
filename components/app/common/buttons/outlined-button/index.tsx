import { forwardRef } from 'react'
import styles from './styles.module.scss'
import Base from '../base'

type ColorType = 'primary' | 'secondary' | 'text'

type Props = Parameters<typeof Base>[0] & {
    colorType ?: ColorType,
}

const Button = forwardRef<HTMLButtonElement, Props>(({
    className,
    colorType = 'primary',
    ...props
}, ref) => {
    return <Base ref={ref} {...props} border='rounded' className={`
    ${styles[`outlined-button-${colorType}`]} 
    ${className}`} />
})

Button.displayName = 'Outlined-Button'

export default Button