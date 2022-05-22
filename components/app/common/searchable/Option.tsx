import { forwardRef, useEffect, useRef } from 'react'
import styles from './styles.module.scss'
import TextButton from '../buttons/text-button'

type Props = Omit<Parameters<typeof TextButton>[0], 'onSelect'> & {
    option: { key: string, value: string },
    selected: boolean,
    onSelect: (key : string)=>void
}

const Option = forwardRef<HTMLButtonElement, Props>(({
    option,
    onChange,
    onFocus,
    onBlur,
    onSelect,
    className,
    selected,
    ...props
}) => {
    const ref = useRef<HTMLButtonElement>(null)
    useEffect(()=>{
        if(!selected || !ref.current){
            return
        }
        ref.current.scrollIntoView({block : 'nearest'})
    },[selected])
    return (
        <TextButton
            ref={ref}
            className={`${styles['option-item']} ${selected ? styles['option-item-selected'] : ''}`}
            base='none'
            onClick={()=>{onSelect(option.key)}}
            {...props}>
            {option.value}
        </TextButton>
    )
})

Option.displayName = 'Option'

export default Option