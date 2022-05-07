import { forwardRef, SelectHTMLAttributes } from 'react'
import styles from './styles.module.scss'

type Variants = {
    fontSize ?: 'sm' | 'md' | 'lg'
}

type Props = SelectHTMLAttributes<HTMLSelectElement> & Variants


const Select : React.FC<Props> = forwardRef<HTMLSelectElement, Props>(({
    fontSize = 'sm',
    className,
    ...props
}, ref)=>{
    return <select ref={ref} {...props} className={`${styles.select} ${styles[`select-${fontSize}`]} ${className}`}/>
})

Select.displayName = 'Select'

export default Select