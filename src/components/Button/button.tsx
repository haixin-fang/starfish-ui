import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
// import PropTypes from 'prop-types';
import classNames from 'classnames'

// export enum ButtonSize {
//     Large = 'lg',
//     Small = 'sm'
// }
export type ButtonSize = 'lg' | 'sm'

// export enum ButtonType {
//     Primary = 'primary',
//     Default = 'default',
//     Danger = 'danger',
//     Link = 'link'
// }
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'
interface BaseButtonProps {
    /**选项扩展的 className */
    className?: string;
    /** 设置Button禁用 */
    disabled?: boolean;
    /** 设置Button尺寸 */
    size?: ButtonSize;
    /** 设置Button类型 */
    btnType?: ButtonType;
    /** 设置Button超链接 */
    href?: string;
    children: React.ReactNode
}
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement> // button标签上默认的属性，如autoFocus 各种事件
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement> // a标签合并自定义属性和默认属性
export type ButtonProps = Partial<NativeButtonProps&AnchorButtonProps> // 里面的类型不一定都需要定义
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 * 
 * ~~~js
 * import { Button } from 'roadsign'
 * ~~~
 */

export const Button: FC<ButtonProps> = (props) => {
    const {
        btnType,
        disabled,
        size,
        children,
        href,
        className,
        ...restProps
    } = props
    // 所有的Button组件都有btn 类
    const classes = classNames('btn', className, {
        [`btn-${btnType}`]: btnType, 
        // 如果key是动态变化的可以使用中括号来组成。
        // 只要用户传入了btnType，则设置用户传入的，否则使用默认
        [`btn-${size}`]: size,
        'disabled':  (btnType === 'link') && disabled
        //因为a链接里面没有disabled属性，就需要判断是否需要
    })
    if(btnType === 'link' && href){
        return (
            <a 
            className={classes}
            href={href}
            {...restProps}>
                {children}
            </a>
        )
    }else{
        return (
        <button
            className={classes}
            {...restProps}
            disabled={disabled} //button里面自己就有disabled属性
        >{children}</button>
        )
    }
}

// Button.propTypes = {
//     /** 这里text是注释 */
//     className: PropTypes.string,
//     btnType: PropTypes.string
// }
Button.defaultProps = {
    disabled: false,
    btnType: 'default'
}
export default Button;