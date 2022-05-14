import Input from '@components/app/common/input'
import Select from '@components/app/common/select'
import LabeledInput from '@components/app/common/composites/labeled-input'
import useBlogTemplate from '@hooks/useBlogTemplate'
import { PixelSizes } from '@hooks/useBlogTemplate/useParameters'
import styles from './styles.module.scss'

type Props = ReturnType<typeof useBlogTemplate>['paramProps']

const Parameters: React.FC<Props> = ({
    register,
    errors,
}) => {
    return (
        <div className={styles.container}>
            <LabeledInput className={styles['input-item']} label='Title'>
                <Input id='title' {...register('title')} />
            </LabeledInput>
            <LabeledInput className={styles['input-item']} label='Title Font Size'>
                <Select {...register('titleFontSize')}>
                    {PixelSizes.map(v => (<option key={v}>{v}</option>))}
                </Select>
            </LabeledInput>
            <LabeledInput className={styles['input-item']} label='Author Name'>
                <Input id='author-name'  {...register('authorName')} />
            </LabeledInput>
            <LabeledInput className={styles['input-item']} label='Author Icon Image' error={errors['authorImageUrl']?.message}>
                <Input id='author-image' {...register('authorImageUrl', { 
                    pattern: {
                        value : /https?:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#\u3000-\u30FE\u4E00-\u9FA0\uFF01-\uFFE3]+/g,
                        message : 'Must be a URL'
                    } })} />
            </LabeledInput>
            <LabeledInput className={styles['input-item']} label='Author Font Size' error={errors['authorFontSize']?.message}>
                <Select {...register('authorFontSize')} >
                    {PixelSizes.map(v => (<option key={v}>{v}</option>))}
                </Select>
            </LabeledInput>
        </div>
    )
}

export default Parameters