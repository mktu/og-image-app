import { useRouter } from 'next/router'
import AppSettingContext from '@contexts/AppSettingContext';
import { useContext } from 'react';

const usePreview = () => {
    const router = useRouter()
    const { baseUrl } = useContext(AppSettingContext)
    const searchParams = new URLSearchParams(router.query as Record<string,string>);
    const url = `${baseUrl}/blog-template?${searchParams.toString()}`
    return {
        url,
    }
}


export default usePreview