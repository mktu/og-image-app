import Document, { Html, Head, Main, NextScript } from 'next/document';
export default class CustomDocument extends Document {
    render() {
        return (
            <Html lang="ja">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href={`https://fonts.googleapis.com/css2?family=M+PLUS+1:wght@500&display=swap`} rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}