import React from 'react'
import classNames from 'classnames'

type MenuMode = 'horizontal' | 'vertical' // 纵横向

interface MenuProps {
    defaultIndex?: number;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: (selectIndex: number) => void;
    children: React.ReactNode;
}

const Menu: React.FC<MenuProps> = (props) => {
    const {
        className,
        mode,
        style,
        children,
        defaultIndex
    } = props
    const classes = classNames('menu', className, {
        'menu-vertical': mode === 'vertical' // 默认是横向的
    })
    return (
        <ul className={classes} style={style}>
            {children}
        </ul>
    )
}

Menu.defaultProps = {
    defaultIndex: 0,
    mode: 'horizontal'
}

export default Menu