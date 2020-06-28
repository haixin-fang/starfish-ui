import React from 'react'
import { render, RenderResult, fireEvent, cleanup, wait } from '@testing-library/react'
import Menu, {MenuProps} from './menu'
import MenuItem from './menuItem'
import SubMenu from './subMenu'

const testProps: MenuProps = {
    defaultIndex: '0',
    onSelect: jest.fn(),
    className: "test"
}
const testVarProps: MenuProps = {
    defaultIndex: '0',
    mode: 'vertical'
}

const generateMenu = (props: MenuProps) => {
    return (
        <Menu {...props}>
          <MenuItem>
            active
          </MenuItem>
          <MenuItem disabled>
            disable
          </MenuItem>
          <MenuItem>
            cool
          </MenuItem>
          <SubMenu title={'subMenu'}>
            <MenuItem >
              cool1
            </MenuItem>
            <MenuItem>
              cool2
            </MenuItem>
          </SubMenu>
        </Menu>
    )
}
const createStyleFile = () => {
    const cssFile: string = `
      .submenu {
        display: none;
      }
      .submenu.menu-opened {
        display:block;
      }
    `
    const style = document.createElement('style')
    style.type = 'text/css'
    style.innerHTML = cssFile
    return style
}
let wrapper: RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disableElement: HTMLElement

describe('test menu and menuItem component', () => {
    beforeEach(() => {
        wrapper = render(generateMenu(testProps))
        wrapper.container.append(createStyleFile())
        menuElement = wrapper.getByTestId('test-menu')
        activeElement = wrapper.getByText('active')
        disableElement = wrapper.getByText('disable')
    })
    it('should render correct Menu and MenuItem based on default props', () => {
        expect(menuElement).toBeInTheDocument()
        expect(menuElement).toHaveClass('menu test')
        expect(menuElement.querySelectorAll(':scope > li').length).toEqual(4)
        expect(activeElement).toHaveClass('menu-item is-active')
        expect(disableElement).toHaveClass('menu-item is-disabled')
    })
    it('click items should change active and call the right callback', () => {
        const thirdItem = wrapper.getByText('cool')
        fireEvent.click(thirdItem)
        expect(thirdItem).toHaveClass('is-active')
        expect(activeElement).not.toHaveClass('is-active')
        expect(testProps.onSelect).toHaveBeenCalledWith('2')
        fireEvent.click(disableElement)
        expect(disableElement).not.toHaveClass('is-active')
        expect(testProps.onSelect).not.toHaveBeenCalledWith('1')
    })
    it('should show dropdown items when hover on subMenu', () => {
        cleanup()
        const wrapper = render(generateMenu(testVarProps))
        const menuElement = wrapper.getByTestId('test-menu')
        expect(menuElement).toHaveClass('menu-vertical')
    })
    it('should show cool link 2 items when hover on subMenu', async () => {
        // toBeVisible判断节点是否显示
        expect(wrapper.queryByText('cool1')).not.toBeVisible()
        // 获取文本节点为subMenu的Element实例
        const subMenuElement = wrapper.getByText('subMenu')
        // 通过内置事件，相当于用户已经再操作了
        fireEvent.mouseEnter(subMenuElement)
        // 当定义的事件的回调函数里面有异步代码，则使用async await来处理异步
        // wait内置方法
        await wait(() => {
            expect(wrapper.queryByText('cool1')).toBeVisible()
        })
        fireEvent.click(wrapper.getByText('cool1'))
        // 通过点击某方法，则有一个节点则会有返回值
        expect(testProps.onSelect).toHaveBeenCalledWith('3-0')
        fireEvent.mouseLeave(subMenuElement)
        await wait(() => {
            expect(wrapper.queryByText('cool1')).not.toBeVisible()
        })
    })
}) 