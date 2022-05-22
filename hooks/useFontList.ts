import { useEffect, useState } from "react"

const url = 'https://api.fontsource.org/fontlist'
type FontListType = {[key:string]:string}

const fectFontList = async () => {
    const ret = await fetch(url)
    return (await ret.json()) as FontListType
}

const useFontList = ()=> {
    const [fontList,setFontList] = useState<FontListType>({})
    const [error,setError] = useState('')
    useEffect(()=>{
        fectFontList().then(setFontList).catch(e=>{
            console.error(e)
            setError('failed to fetch font resources.')
        })
    },[])
    return {
        fontList,
        error
    }
}

export default useFontList