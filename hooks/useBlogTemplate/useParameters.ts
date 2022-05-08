import { useEffect } from 'react'
import { useForm } from "react-hook-form";
import usePush from '../usePush'

export const PixelSizes = ['48px', '64px', '92px'] as const

const useParameters = () => {
    const { register, watch, formState: { errors }, reset } = useForm({ mode: 'onChange' });
    const push = usePush()
    const title = watch('title');
    const authorName = watch('authorName');
    const authorImageUrl = watch('authorImageUrl');
    const titleFontSize = watch('titleFontSize');
    const authorFontSize = watch('authorFontSize');
    const hasError = Object.keys(errors).length !== 0
    useEffect(() => {
        if(hasError){
            return
        }
        let unmounted = false
        const data : Record<string,string> = {
            title,
            authorName,
            authorImageUrl,
            titleFontSize,
            authorFontSize
        };
        Object.keys(data).forEach(key => (data[key] === undefined || data[key] === '') && delete data[key])
        const searchParams = new URLSearchParams(data);
        
        setTimeout(() => {
            if(unmounted){
                return
            }
            push(`?${searchParams.toString()}`)
        }, 500);
        return () => {
            unmounted = true
        }
    }, [title,authorName,authorImageUrl,titleFontSize,authorFontSize,hasError,push])
    useEffect(() => {
        reset({
            'titleFontSize': '64px',
            'authorFontSize': '48px'
        })
    }, [reset])
    return {
        register,
        errors,
    }
}

export default useParameters