import { LabelHTMLAttributes } from 'react'
import styles from './styles.module.scss'

type Variants = {
    labelSize?: 'sm' | 'md' | 'lg'
}

type Props = LabelHTMLAttributes<HTMLLabelElement> & Variants


const Label: React.FC<Props> = ({
    labelSize = 'sm',
    className,
    ...props
}) => {
    return <label {...props} className={`
    ${styles[`label-${labelSize}`]} 
    ${className}
    ${styles['label']}
    `} />
}

export default Label