import Label from '@components/app/common/label'
import Caution from '@components/app/common/icons/Caution'
import styles from './styles.module.scss'

type Props = {
    children: React.ReactElement,
    label: string,
    className?: string,
    error?: string
}

const Input: React.FC<Props> = ({
    children,
    label,
    className,
    error
}) => {
    const { id } = children.props
    return (
        <div className={`${styles.container} ${className}`}>
            <div className={styles['item']}>
                <Label className={styles.label} htmlFor={id}>{label}</Label>
                {children}
            </div>
            {error && (
                <div className={styles['error']}>
                    <Caution width={16} height={16} />
                    {error}
                </div>
            )}
        </div>
    )
}

export default Input