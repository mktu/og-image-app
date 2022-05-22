import { NextRouter, useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import AppSettingContext from '@contexts/AppSettingContext';
import usePush from '../usePush'

export const PixelSizes = ['48px', '64px', '92px'] as const

const FontlistApiBasePath = 'https://api.fontsource.org/v1/fonts'

const fetchFontFamily = async (fontId:string)=>{
    const ret =  await fetch(`${FontlistApiBasePath}/${fontId}`)
    return (await ret.json())['family']
}

const getFromRouter = (r:NextRouter, key:string, defaultValue = '')=>{
    return (r.query[key] || defaultValue) as string
}

const useParameters = () => {
    const router = useRouter()
    const { app } = useContext(AppSettingContext)
    const { register, watch, formState: { errors } } = useForm({
        mode: 'onChange', defaultValues: {
            'title': getFromRouter(router,'title'),
            'authorName': getFromRouter(router,'authorName'),
            'titleFontSize': getFromRouter(router,'titleFontSize','64px'),
            'authorFontSize': getFromRouter(router,'titleFontSize','48px'),
            'authorImageUrl': getFromRouter(router,'authorImageUrl'),
            'font' : ''
        }
    });
    const push = usePush()
    const fontStates = useState('')
    const [fontId] = fontStates
    const [fontFamily,setFontFamily] = useState('')
    const title = watch('title');
    const authorName = watch('authorName');
    const authorImageUrl = watch('authorImageUrl');
    const titleFontSize = watch('titleFontSize');
    const authorFontSize = watch('authorFontSize');

    const hasError = Object.keys(errors).length !== 0

    useEffect(()=>{
        fontId && fetchFontFamily(fontId).then(setFontFamily)
    },[fontId])
    useEffect(() => {
        if (hasError ) {
            return
        }
        let unmounted = false
        const data: Record<string, string> = {
            app,
            title,
            authorName,
            authorImageUrl,
            titleFontSize,
            authorFontSize,
            font : fontFamily
        };
        Object.keys(data).forEach(key => (data[key] === undefined || data[key] === '') && delete data[key])
        const searchParams = new URLSearchParams(data);

        setTimeout(() => {
            if (unmounted) {
                return
            }
            push(`?${searchParams.toString()}`)
        }, 500);
        return () => {
            unmounted = true
        }
    }, [app, title, authorName, authorImageUrl, titleFontSize, authorFontSize, fontFamily, hasError, push])
    return {
        register,
        errors,
        fontStates,
    }
}

export default useParameters