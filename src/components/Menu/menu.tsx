import React, {createContext, useState} from 'react'
import classNames from 'classnames'
import {MenuItemProps} from './menuItem'

type MenuMode = 'horizontal' | 'vertical' // 纵横向
type SelectCallback = (selectIndex: string) => void
export interface MenuProps {
    defaultIndex?: string;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: SelectCallback;
    defaultOpenSubMenu?: Array<string>
}

interface IMenuContext {
    index: string;
    onSelect?: SelectCallback;
    mode?: MenuMode;
    defaultOpenSubMenu?: Array<string>
}

export const MenuContext = createContext<IMenuContext>({index: '0'})


const Menu: React.FC<MenuProps> = (props) => {
    const {
        className,
        mode,
        style,
        children,
        defaultIndex,
        onSelect,
        defaultOpenSubMenu
    } = props
    const [ currentActive, setActive ] = useState(defaultIndex)
    const classes = classNames('menu', className, {
        'menu-vertical': mode === 'vertical', // 默认是横向的
        'menu-horizontal': mode !== 'vertical',
    })
    // 子组件可以调用该方法，修改值
    const handleContext = (index: string) => {
        setActive(index)
        if(onSelect){
            onSelect(index)
        }
    }
    // 通过context跨组件传值，
    // 也可以通过子组件传值修改父组件的值，然后修改传入子组件的值
    const passedContext: IMenuContext = {
        index: currentActive ? currentActive : '0',
        onSelect: handleContext,
        mode: mode,
        defaultOpenSubMenu: defaultOpenSubMenu
    }

    const renderChildren = () => {
        return React.Children.map(children, (child, index) => {
            const childElement = child as React.FunctionComponentElement<MenuItemProps>
            if(childElement.type.displayName === 'MenuItem' || childElement.type.displayName === 'SubMenu'){
                return React.cloneElement(childElement, {
                    index: index.toString()
                })
            }else{
                console.error('Warning: Menu has a child which is not a MenuItem componentaring')
            }
        })
    }
    return (
        <ul className={classes} style={style} data-testid='test-menu'>
            <MenuContext.Provider value={passedContext}>
                {renderChildren()}
            </MenuContext.Provider>
        </ul>
    )
}

Menu.defaultProps = {
    defaultIndex: '0',
    mode: 'horizontal',
    defaultOpenSubMenu: []
}

export default Menu