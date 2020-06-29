import React, {useContext, useState, FunctionComponentElement} from 'react'
import Icon from '../Icon/icon'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons' 
import classNames from 'classnames'
import {MenuContext} from './menu'
import {MenuItemProps} from './menuItem'
import {CSSTransition} from 'react-transition-group'
library.add(fas)

export interface SubMenuProps {
    index?: string;
    title: string;
    className?: string;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
    const { index, title, className, children} = props;
    const context = useContext(MenuContext)
    const defaultOpenSubMenu = context.defaultOpenSubMenu
    const openedSubMenu = defaultOpenSubMenu as Array<string>
    const isOpened = (index && context.mode === 'vertical')? 
        openedSubMenu.includes(index): false

    const [menuOpen, setOpen] = useState(isOpened)
    const classes = classNames('menu-item submenu-item', className, {
        'is-active': context.index.slice(0,1) === index,
        'is-opened': menuOpen,
        'is-vertical': context.mode === 'vertical'
    })
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        setOpen(!menuOpen)
    }
    let timer: any
    const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
        clearInterval(timer)
        e.preventDefault()
        timer = setTimeout(() => {
            setOpen(toggle)
        }, 300)
    }
    const clickEvents = context.mode === 'vertical'? {
        onClick: handleClick
    }: {}
    const mouseEvents = context.mode !== 'vertical'? {
        onMouseEnter: (e: React.MouseEvent) => {handleMouse(e, true)},
        onMouseLeave: (e: React.MouseEvent) => {handleMouse(e, false)}
    }: {}
    const renderChildren = () => {
        const subMenuClasses = classNames('submenu', {
            'menu-opened': menuOpen
        })
        const childComponent = React.Children.map(children, (child, i) => {
            const childElement = child as FunctionComponentElement<MenuItemProps>
            if(childElement.type.displayName === 'MenuItem'){
                return React.cloneElement(childElement, {
                    index: `${index}-${i}`
                })
            }else{
                console.error('Warning: SubMenu has a child which is not a MenuItem component')
            }
        }) 
        return (
            <CSSTransition
                in={menuOpen}
                timeout={1000}
                classNames='fade'
                appear={false}
            >
                <ul className={ subMenuClasses }>
                    {childComponent}
                </ul>
            </CSSTransition>
        )
    }
    return (
        <li key={index} className={classes} {...mouseEvents}>
            <div className="submenu-title" {...clickEvents}>
                {title}
                <Icon icon="angle-down" className="arrow-icon"/>
            </div>
           
            {renderChildren()}
        </li>
    )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu