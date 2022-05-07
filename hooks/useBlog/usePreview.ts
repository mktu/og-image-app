import { useState, useEffect } from 'react'

type Props = {
    title: string,
    authorName: string,
    authorImageUrl: string,
    titleFontSize: string,
    authorFontSize: string,
    hasError: boolean
}

const basePath = '/api/og-image'

const usePreview = ({
    title,
    authorName,
    authorImageUrl,
    titleFontSize,
    authorFontSize,
    hasError
}: Props) => {
    const [url, setUrl] = useState(basePath)
    useEffect(() => {
        if(hasError){
            return
        }
        let unmounted = false
        const data = {
            title,
            authorName,
            authorImageUrl,
            titleFontSize,
            authorFontSize
        };
        const searchParams = new URLSearchParams(data);
        setTimeout(() => {
            if(unmounted){
                return
            }
            setUrl(`${basePath}?${searchParams.toString()}`)
        }, 500);
        return () => {
            unmounted = true
        }
    }, [title,
        authorName,
        authorImageUrl,
        titleFontSize,
        authorFontSize,
        hasError
    ])

    return {
        url,
    }
}


export default usePreview