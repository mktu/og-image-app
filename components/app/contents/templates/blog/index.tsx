import Head from 'next/head'
import Container from './container'

const Page: React.FC = () => (
    <>
        <Head>
            <title>Og image app</title>
            <meta name="description" content="Generate og image app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container />
    </>
)

export default Page