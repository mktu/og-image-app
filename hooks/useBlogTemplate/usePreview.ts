import { useRouter } from 'next/router'

const basePath = '/api/og-image/blog-template'

const usePreview = () => {
    const router = useRouter()
    const searchParams = new URLSearchParams(router.query as Record<string,string>);
    const url = `${basePath}?${searchParams.toString()}`
    return {
        url,
    }
}


export default usePreview