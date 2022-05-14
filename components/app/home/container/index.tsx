import styles from './styles.module.scss'
import List from '../content-list'

const Content: React.FC = () => {
    return (
        <div className={styles.container}>
            <header>
                <h1>
                    Open Graph Image App
                </h1>
            </header>
            <main className={styles.main}>
                <h2>Your app list is here</h2>
                <List />
            </main>
        </div>
    )
}

export default Content