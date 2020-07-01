
import React, {FC, ReactElement, InputHTMLAttributes, ChangeEvent} from 'react'
import classNames from 'classnames'
import { IconProp} from '@fortawesome/fontawesome-svg-core'
import Icon from '../Icon/icon'
type InputSize = 'lg' | 'sm'
// Omit 是忽略泛型指定的属性值
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
    /**是否禁用 Input */
    disabled?: boolean;
    /**设置 input 大小，支持 lg 或者是 sm */
    size?: InputSize;
    /**添加图标，在右侧悬浮添加一个图标，用于提示 */
    icon?: IconProp;
    /**添加前缀 用于配置一些固定组合 */
    prepend?: string | ReactElement;
    /**添加后缀 用于配置一些固定组合 */
    append?: string | ReactElement;
    onChange? : (e: ChangeEvent<HTMLInputElement>) => void;
}
/**
 * Input 输入框 通过鼠标或键盘输入内容，是最基础的表单域的包装。
 * ### 引用方法
 * 
 * ~~~js
 * import { Input } from 'roadsign'
 * ~~~
 */

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
        delete restProps.defaultValue
        restProps.value = setValueInitOrDefault(props.value)
    }
    return (
        // 会根据属性判断是否添加不同节点
        <div style={style} className={classes}>
            {prepend && <div className="input-group-prepend">{prepend}</div>}
            {icon && <div className="icon-wrapper"><Icon icon={icon} title={`title-${icon}`}/></div>}
            <input 
            className="input-inner"
            disabled={disabled} 
            {...restProps}/>
            {append && <div className="input-group-append">{append}</div>}
        </div>
    )
}

export default Input;