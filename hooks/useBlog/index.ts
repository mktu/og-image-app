import useParameters from './useParameters'
import usePreview from './usePreview'

const useBlog = ()=>{
    const paramProps = useParameters()
    const previewProps = usePreview({
        ...paramProps
    })
    
    return {
        paramProps,
        previewProps
    }
}

export default useBlog