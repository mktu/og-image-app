import { forwardRef } from 'react'
import styles from './styles.module.scss'
import Base from '../base'

type ColorType = 'primary' | 'secondary' | 'text'

type Props = Parameters<typeof Base>[0] & {
    colorType?: ColorType,
    base?: 'text-button' | 'none'
}

const Button = forwardRef<HTMLButtonElement, Props>(({
    className,
    colorType = 'primary',
    base = 'text-button',
    ...props
}, ref) => {
    return <Base ref={ref} border='none' className={`
    ${styles[base]} 
    ${styles[`text-button-${colorType}`]} 
    ${className}`}
        {...props} />
})

Button.displayName = 'Text-Button'

export default Button