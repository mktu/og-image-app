import styles from './styles.module.scss'
import { ImgHTMLAttributes, useEffect, useState } from 'react'
import Frame from './Frame'

type Props = ImgHTMLAttributes<HTMLImageElement>
const Preview: React.FC<Props> = ({
    src,
    alt,
    ...props
}) => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
    }, [src])
    const imageComponent = (
        // eslint-disable-next-line @next/next/no-img-element
        <img className={loading ? styles['img-loading'] : undefined}
            src={src}
            alt={alt}
            onLoad={() => {
                setLoading(false)
            }}
            {...props}
        />
    )

    return imageComponent
}
export { Frame }
export default Preview