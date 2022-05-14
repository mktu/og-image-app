import styles from './styles.module.scss'
import Params from '@components/app/contents/templates/blog/parameters'
import Preview from '@components/app/common/preview'
import Layout from '@components/app/common/layout/content'
import useBlogTemplate from '@hooks/useBlogTemplate'

const Content: React.FC = () => {
    const { paramProps, previewProps } = useBlogTemplate()
    return (
        <Layout title='Open Graph Image for Blog Template'>
            <div className={styles.main}>
                <Params {...paramProps} />
                <Preview {...previewProps} />
            </div>
        </Layout>
    )
}

export default Content