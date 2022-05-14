import Link from 'next/link'
import styles from './styles.module.scss'

type Props = {
    title: string,
    children: React.ReactNode,
}

const TopLink = '/'

const Content: React.FC<Props> = ({
    title,
    children
}) => (
    <div className={styles.container}>
        <header>
            <h1>
                {title}
            </h1>
        </header>
        <main className={styles.main}>
            {children}
        </main>
        <footer className={styles.footer}>
            <Link href={TopLink}>
                <a href={TopLink} className='link-primary'>
                    Back to Top
                </a>
            </Link>
        </footer>
    </div>
)

export default Content