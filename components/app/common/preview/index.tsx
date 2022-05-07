import styles from './styles.module.scss'
import useBlog from '@hooks/useBlog'
import IconButton from '@components/app/common/buttons/icon-button'
import { calcOgImageHeight } from '@libs/image'
import Img, { Frame } from '@components/app/common/preview/img'
import Copy from '@components/app/common/icons/Copy'

type Props = ReturnType<typeof useBlog>['previewProps']
const mainImageWidth = 400
const mainImageHeight = calcOgImageHeight(mainImageWidth)
const squareImageSize = 250

const Preview: React.FC<Props> = ({
    url
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.preview}>
                <div className={styles.label}>1:1.91</div>
                {/* <div className={styles['review-manu']}>
                <IconButton>
                    <Copy width={16} height={16} /> COPY URL
                </IconButton>
            </div> */}
                <Frame width={mainImageWidth} height={mainImageHeight}>
                    <Img width={mainImageWidth} height={mainImageHeight} src={url} alt='Main Preview' />
                </Frame>
            </div>
            <div className={styles.preview}>
                <div className={styles.label}>1:1</div>
                <Frame className={styles.preview} width={squareImageSize} height={squareImageSize}>
                    <Img width={squareImageSize} height={squareImageSize} src={url} alt='Sub Preview' style={{ objectFit: 'cover' }} />
                </Frame>
            </div>
        </div>
    )
}

export default Preview