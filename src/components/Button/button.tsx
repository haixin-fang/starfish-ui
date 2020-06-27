import React from 'react'
import classNames from 'classnames'

export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}

export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link'
}

interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    href?: string;
    children: React.ReactNode
}

const Button: React.FC<BaseButtonProps> = (props) => {
    const {
        btnType,
        disabled,
        size,
        children,
        href
    } = props
    // 所有的Button组件都有btn 类
    const classes = classNames('btn', {
        [`btn-${btnType}`]: btnType, 
        // 如果key是动态变化的可以使用中括号来组成。
        // 只要用户传入了btnType，则设置用户传入的，否则使用默认
        [`btn-${size}`]: size,
        'disabled':  (btnType === ButtonType.Link) && disabled
        //因为a链接里面没有disabled属性，就需要判断是否需要
    })
    if(btnType === ButtonType.Link && href){
        return (
            <a 
            className={classes}
            href={href}>
                {children}
            </a>
        )
    }else{
        return (
        <button
            className={classes}
            disabled={disabled} //button里面自己就有disabled属性
        >{children}</button>
        )
    }
}
Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default
}
export default Button