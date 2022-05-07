import Input from '@components/app/common/input'
import Select from '@components/app/common/select'
import InputFrame from '@components/app/common/frames/input'
import useBlog from '@hooks/useBlog'
import { PixelSizes } from '@hooks/useBlog/useParameters'
import styles from './styles.module.scss'

type Props = ReturnType<typeof useBlog>['paramProps']

const Parameters: React.FC<Props> = ({
    register,
    errors,
}) => {
    return (
        <div className={styles.container}>
            <InputFrame className={styles['input-item']} label='Title'>
                <Input id='title' {...register('title')} />
            </InputFrame>
            <InputFrame className={styles['input-item']} label='Title Font Size'>
                <Select {...register('titleFontSize')}>
                    {PixelSizes.map(v => (<option key={v}>{v}</option>))}
                </Select>
            </InputFrame>
            <InputFrame className={styles['input-item']} label='Author Name'>
                <Input id='author-name'  {...register('authorName')} />
            </InputFrame>
            <InputFrame className={styles['input-item']} label='Author Icon Image' error={errors['authorImageUrl']?.message}>
                <Input id='author-image' {...register('authorImageUrl', { 
                    pattern: {
                        value : /https?:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#\u3000-\u30FE\u4E00-\u9FA0\uFF01-\uFFE3]+/g,
                        message : 'Must be a URL'
                    } })} />
            </InputFrame>
            <InputFrame className={styles['input-item']} label='Author Font Size' error={errors['authorFontSize']}>
                <Select {...register('authorFontSize')} >
                    {PixelSizes.map(v => (<option key={v}>{v}</option>))}
                </Select>
            </InputFrame>
        </div>
    )
}

export default Parameters