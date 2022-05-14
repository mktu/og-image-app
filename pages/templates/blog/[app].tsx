import type { NextPage } from 'next'
import App from '@components/app/contents/templates/blog'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
    const router = useRouter()
    const { app } = router.query
    if(!app){
        return null
    }
  return (
    <App />
  )
}

export default Home
