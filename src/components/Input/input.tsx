
import React, {FC, ReactElement, InputHTMLAttributes, ChangeEvent} from 'react'
import classNames from 'classnames'
import { IconProp} from '@fortawesome/fontawesome-svg-core'
import Icon from '../Icon/icon'
type InputSize = 'lg' | 'sm'
// Omit 是忽略泛型指定的属性值
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
    disabled?: boolean;
    size?: InputSize;
    icon?: IconProp;
    prepend?: string | ReactElement;
    append?: string | ReactElement;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<InputProps> = (props) => {
    const {
        disabled,
        size,
        icon,
        prepend,
        append,
        style,
        ...restProps
    } = props

    const classes = classNames('input-wrapper', {
        'is-disabled': disabled,
        [`input-size-${size}`]: size,
        'input-group': prepend || append,
        'input-group-append': !!append, 
        // 因为append是一个字符串等，要确定为boolean，只能!!
        'input-group-prepend': !!prepend
    })
    const setValueInitOrDefault = (value: any) => {
        if(typeof value === 'undefined' || value === null){
            return ''
        }
        return value
    }
    if('value' in props){
        delete props.defaultValue
        props.value = setValueInitOrDefault(props.value)
    }
    return (
        // 会根据属性判断是否添加不同节点
        <div style={style} className={classes}>
            {prepend && <div className="input-group-prepend">{prepend}</div>}
            {icon && <div className="icon-wrapper"><Icon icon={icon} title={`title-${icon}`}/></div>}
            <input 
            className="input-inner"
            type='text' 
            disabled={disabled} 
            {...restProps}/>
            {append && <div className="input-group-append">{append}</div>}
        </div>
    )
}

export default Input;