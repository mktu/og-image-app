import { useRouter } from "next/router"

const baseUrl = '/api/og-image'

const useAppSetting = ()=> {
    const router = useRouter()
    const app = (router.query['app'] || '') as string
    return {
        baseUrl,
        app
    }
}

export default useAppSetting