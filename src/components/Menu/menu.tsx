import React, {createContext, useState} from 'react'
import classNames from 'classnames'

type MenuMode = 'horizontal' | 'vertical' // 纵横向
type SelectCallback = (selectIndex: number) => void
interface MenuProps {
    defaultIndex?: number;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: SelectCallback;
    children: React.ReactNode;
}

interface IMenuContext {
    index: number;
    onSelect?: SelectCallback;
}

export const MenuContext = createContext<IMenuContext>({index: 0})


const Menu: React.FC<MenuProps> = (props) => {
    const {
        className,
        mode,
        style,
        children,
        defaultIndex,
        onSelect
    } = props
    const [ currentActive, setActive ] = useState(defaultIndex)
    console.log(onSelect)
    const classes = classNames('menu', className, {
        'menu-vertical': mode === 'vertical' // 默认是横向的
    })
    // 子组件可以调用该方法，修改值
    const handleContext = (index: number) => {
        setActive(index)
        if(onSelect){
            onSelect(index)
        }
    }
    // 通过context跨组件传值，
    // 也可以通过子组件传值修改父组件的值，然后修改传入子组件的值
    const passedContext: IMenuContext = {
        index: currentActive ? currentActive : 0,
        onSelect: handleContext
    }

    return (
        <ul className={classes} style={style}>
            <MenuContext.Provider value={passedContext}>
                {children}
            </MenuContext.Provider>
        </ul>
    )
}

Menu.defaultProps = {
    defaultIndex: 0,
    mode: 'horizontal'
}

export default Menu