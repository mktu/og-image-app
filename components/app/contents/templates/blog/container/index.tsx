import styles from './styles.module.scss'
import Params from '@components/app/contents/templates/blog/parameters'
import Preview from '@components/app/common/preview'
import useBlogTemplate from '@hooks/useBlogTemplate'

const Content: React.FC = () => {
    const { paramProps, previewProps } = useBlogTemplate()
    return (
        <div className={styles.container}>
            <header>
                <h1>
                    Open Graph Image for Blog Template
                </h1>
            </header>
            <main className={styles.main}>
                <Params {...paramProps} />
                <Preview {...previewProps}/>
            </main>
        </div>
    )
}

export default Content