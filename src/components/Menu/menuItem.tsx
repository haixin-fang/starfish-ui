import React, {useContext, FC} from 'react'
import classNames from 'classnames'
import {MenuContext} from './menu'
export interface MenuItemProps {
    index?: string;
    /**选项是否被禁用 */
    disabled?: boolean;
    /**选项扩展的 className */
    className?: string;
    /**选项的自定义 style */
    style?: React.CSSProperties;
}

export const MenuItem: FC<MenuItemProps> = (props) => {
    const {index, disabled, className, style, children} = props
    const menuContext = useContext(MenuContext)

    const classes = classNames('menu-item', className, {
        'is-disabled': disabled,
        'is-active': menuContext.index === index && !disabled
    })
    const handleClick = () => {
        if (menuContext.onSelect && !disabled && (typeof index === 'string')) {
            menuContext.onSelect(index)
        }
    }
    return (
        <li className={classes} style={style} onClick={handleClick}>
            {children}
        </li>
    )
}

MenuItem.displayName = 'MenuItem'

export default MenuItem;
