import styles from './styles.module.scss'
import Params from '@components/app/contents/blog/parameters'
import Preview from '@components/app/common/preview'
import useBlog from '@hooks/useBlog'

const Content: React.FC = () => {
    const { paramProps, previewProps } = useBlog()
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