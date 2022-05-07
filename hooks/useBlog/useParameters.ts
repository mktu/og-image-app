import { useEffect } from 'react'
import { useForm } from "react-hook-form";

export const PixelSizes = ['48px','64px','92px'] as const

const useParameters = ()=> {
    const { register, watch, formState: { errors }, reset } = useForm({mode : 'onChange'});
    useEffect(()=>{
        reset({
            'titleFontSize' : '64px',
            'authorFontSize' : '48px'
        })
    },[reset])
    return {
        title : watch('title'),
        authorName : watch('authorName'),
        authorImageUrl : watch('authorImageUrl'),
        titleFontSize : watch('titleFontSize'),
        authorFontSize : watch('authorFontSize'),
        register,
        errors,
        hasError : Object.keys(errors).length !== 0
    }
}

export default useParameters