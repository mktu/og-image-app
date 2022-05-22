import { forwardRef, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import Input from '../input'
import Clickaway from './Clickaway'
import Option from './Option'
import Check from '@components/app/common/icons/Check'
import XCircle from '@components/app/common/icons/XCircle'
import AngleDown from '@components/app/common/icons/AngleDown'
import IconButton from '@components/app/common/buttons/icon-button'

type Props = Omit<Parameters<typeof Input>[0], 'onSelect' | 'onChange'> & {
    options: { key: string, value: string }[],
    onSelect: (key: string) => void
}

const Searchable = forwardRef<HTMLInputElement, Props>(({
    options,
    value,
    onBlur,
    onSelect,
    ...props
}, ref) => {
    const [wrapperEl, setWrapperEl] = useState<HTMLSpanElement>()
    const [showOption, setShowOption] = useState(false)
    const [selected, setSelected] = useState('')
    const [currentOptions, setCurrentOptions] = useState<typeof options>(options)
    const [text, setText] = useState('')
    const resolved = Boolean(options.find(v => v.key === value)) && text === value

    useEffect(() => {
        if (text) {
            setCurrentOptions(options.filter(v => v.value.includes(text as string)))
        } else {
            setCurrentOptions(options)
        }
    }, [text, options])

    const confirm = (key: string) => {
        setText(key)
        setShowOption(false)
        onSelect(key)
    }
    return (
        <>
            <span className={styles['input-wrapper']}
                ref={(elm) => {
                    elm && setWrapperEl(elm)
                }}
            >
                <Check width={16} height={16}
                    className={resolved ? styles['input-checker-resolved'] : styles['input-checker-unresolved']}
                />
                <Input autoComplete='off'
                    border='none'
                    ref={ref}
                    onMouseDown={(e) => {
                        e.stopPropagation()
                    }}
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value)
                        setShowOption(true)
                    }}
                    onBlur={(e) => {
                        setShowOption(false)
                        onBlur && onBlur(e)
                    }}
                    onKeyDown={(e) => {
                        const { key } = e
                        const curIndex = currentOptions.findIndex(v => v.key === selected)
                        if (key === 'ArrowDown' && currentOptions.length > 0) {
                            const next = curIndex === -1 ? 0 : (currentOptions.length - 1) >= curIndex ? curIndex + 1 : curIndex
                            if (!currentOptions[next]) {
                                return
                            }
                            setSelected(currentOptions[next].key)
                            setShowOption(true)
                        } else if (key === 'ArrowUp' && currentOptions.length > 0 && curIndex > 0) {
                            const next = curIndex - 1
                            setSelected(currentOptions[next].key)
                        } else if ((key === 'Enter' || key === 'Tab' || key === 'ArrowRight') && selected) {
                            const val = currentOptions.find(v => v.key === selected)
                            if (!val) {
                                return
                            }
                            confirm(val.key)
                        }
                    }}
                    {...props} />
                {Boolean(text) ? (
                    <IconButton onClick={()=>{
                        setText('')
                        onSelect('')
                    }}>
                        <XCircle  width={16} height={16} strokeWidth={1}/>
                    </IconButton>
                ) : (
                    <IconButton onClick={()=>{
                        setShowOption(true)
                        wrapperEl?.getElementsByTagName('input')[0].focus()
                    }}>
                        <AngleDown width={16} height={16} strokeWidth={1}/>
                    </IconButton>
                )}

            </span>
            <div className={styles['options-wrapper']}>
                <Clickaway onClickAway={() => {
                    setSelected('')
                }} excludeArea={wrapperEl}>
                    <ul className={styles['options']} style={{
                        width: wrapperEl ? wrapperEl.clientWidth : 0,
                        opacity: showOption ? 1 : 0
                    }}>
                        {currentOptions.map(v => (
                            <li key={v.key}>
                                <Option option={v} selected={selected === v.key} onSelect={confirm} />
                            </li>
                        ))}
                    </ul>
                </Clickaway>

            </div>
        </>
    )
})

Searchable.displayName = 'Searchable'

export default Searchable