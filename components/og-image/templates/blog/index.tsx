import { NextApiRequest } from "next"
import { CSSProperties } from "react"
import { renderToStaticMarkup } from 'react-dom/server'
import { createRequestUrl } from '@libs/font'
import { parseRequest } from './parse'
import { bodyStyle, logoStyle, titleStyle, authorStyle, authorImageStyle } from './style'
import Logo from './logo'


export type ComponentProps = {
    title: string,
    authorName: string,
    titleFontSize?: CSSProperties['fontSize'],
    authorImageUrl?: string,
    authorFontSize?: string,
    font?: string
}

type MarkupProps = ComponentProps

export const Component: React.FC<ComponentProps> = ({
    title,
    authorName,
    titleFontSize = '4.5rem',
    authorFontSize = '2rem',
    authorImageUrl,
    font
}) => (
    <div style={{
        ...bodyStyle,
        fontFamily: font ? `'${font}'` : bodyStyle.fontFamily
    }}>
        <div style={logoStyle}><Logo width={500 / 2} height={291 / 2} /></div>
        <div style={{ ...titleStyle, fontSize: titleFontSize }}>{title}</div>
        <div style={{ ...authorStyle, fontSize: authorFontSize }}>
            {authorImageUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={authorImageUrl} width={64} height={64} alt='author' style={authorImageStyle} />
            )}
            <span>{authorName}</span>
        </div>
    </div>
)

export const Markup: React.FC<MarkupProps> = ({
    font,
    title,
    authorName,
    ...props
}) => {
    return (
        <html>
            <meta charSet='UTF-8' />
            {/* eslint-disable-next-line @next/next/no-head-element */}
            <head>
                {font && (
                    <style dangerouslySetInnerHTML={{ __html: createRequestUrl(font, encodeURIComponent(title+authorName)) }} />
                )}
                {/* <style dangerouslySetInnerHTML={{ __html: `@import url('https://fonts.googleapis.com/css2?family=M+PLUS+1&display=swap');` }} /> */}
            </head>
            <body >
                <Component font={font} title={title} authorName={authorName} {...props}/>
            </body>
        </html>
    )
}

export const renderNode = async (req: NextApiRequest) => {
    const html = renderToStaticMarkup(<Markup {...parseRequest(req)} />)
    return '<!doctype html>' + html
}