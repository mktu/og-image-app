import { forwardRef } from 'react'
import styles from './styles.module.scss'
import Base from '../base'

type StrokeType = 'stroke-primary' | 'stroke-secondary' | 'stroke-text'
type FillType = 'fill-primary' | 'fill-secondary' | 'fill-text'

type Props = Parameters<typeof Base>[0] & {
    strokeType?: StrokeType,
    fillType?: FillType
}



const Button = forwardRef<HTMLButtonElement, Props>(({
    className,
    strokeType = 'stroke-text',
    fillType = 'fill-text',
    ...props
}, ref) => {
    return <Base ref={ref}
        textSize='none'
        className={`
    ${styles[`icon-button`]} 
    ${styles[`icon-button-${strokeType}`]} 
    ${styles[`icon-button-${fillType}`]} 
    ${className}`}
        {...props} />
})

Button.displayName = 'Icon-Button'

export default Button