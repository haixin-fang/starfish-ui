import React, {FC, useState} from 'react'
import classNames from 'classnames'
export interface ISwitch {
    defaultChecked?: boolean;
    /**选中的颜色 */
    activeColor?: string;
    inactiveColor?: string;
    activeText?: string;
    inactiveText?: string;
    disabled?: boolean;
    readonly change?: (checked: boolean) => void
}

export const Switch: React.FC<ISwitch> = (props) => {
    const {
        activeColor, 
        inactiveColor, 
        defaultChecked, 
        activeText, 
        inactiveText,
        disabled,
        change,
        ...restProps
        } = props
    
    const [checked, setChecked] = useState(disabled ? false: defaultChecked || false)
    // 通过checked来判断用户是否选中，也对用户传入的样式进行动态变化
    const style = checked ? 
        (!disabled && activeColor?{
            borderColor: activeColor,
            boxShadow: `${activeColor} 0 0 0 16px inset`,
            backgroundColor: activeColor,
        }:!disabled && {
            borderColor: '#64bd63',
            boxShadow: '#64bd63 0 0 0 16px inset',
            backgroundColor: '#64bd63',
        }) || (disabled? {
            backgroundColor: '#dcdfe6',
            border: '1px solid #dcdfe6',
            boxShadow: '#dcdfe6 0 0 0 16px inset'
        }: {}): 
        (!disabled && inactiveColor?{
            borderColor: inactiveColor,
            boxShadow: `${inactiveColor} 0 0 0 16px inset`,
            backgroundColor: inactiveColor,
        }: !disabled && {
            borderColor: '#dfdfdf',
            boxShadow: '#dfdfdf 0 0 0 0 inset',
            backgroundColor: '#fdfdfd',
        }) || (disabled? {
            backgroundColor: '#dcdfe6',
            border: '1px solid #dcdfe6',
            boxShadow: '#dcdfe6 0 0 0 16px inset'
        }: {})
    const handleClick = () => {
        if(!disabled){
            setChecked(!checked)
            change && change(!checked)
        }
    }
    const inactiveClasses = classNames('switch-inactive', {
        "is-active": !checked
    })
    const activeClasses = classNames('switch-active', {
        "is-active": checked
    })
    const handleInactive = () => {
        !disabled && setChecked(false)
        change && change(false)
    }
    const handleActive = () => {
        !disabled && setChecked(true)
        change && change(true)
    }
    const inputClasses = classNames('switch', {
        'is-disabled': disabled
    })
    return (
        <div className="switch-div">
            {
                inactiveText && 
                <span 
                    className={inactiveClasses}
                    onClick={handleInactive}>{inactiveText}</span>
            }
            <input 
                type="checkbox" 
                checked={checked}
                onClick={handleClick} 
                className={inputClasses}
                style={style}
                id="ckb"
                {...restProps}/>
            {
                activeText && 
                <span 
                    className={activeClasses}
                    onClick={handleActive}>{activeText}</span>
            }
        </div>
    )
}


export default Switch;