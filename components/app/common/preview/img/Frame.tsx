import styles from './styles.module.scss'

type Props = {
    className?: string,
    width: number,
    height: number,
    children : React.ReactNode
}
const Frame: React.FC<Props> = ({
    className,
    width,
    height,
    children
}) => {
    return (
        <div className={`${styles['img-wrapper']} ${className}`} style={{width,height}}>
            {children}
        </div>
    )
}

export default Frame