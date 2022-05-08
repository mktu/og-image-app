import useParameters from './useParameters'
import usePreview from './usePreview'

const useBlogTemplate = ()=>{
    const paramProps = useParameters()
    const previewProps = usePreview()
    
    return {
        paramProps,
        previewProps
    }
}

export default useBlogTemplate