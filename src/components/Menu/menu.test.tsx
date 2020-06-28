import React from 'react'
import { render, RenderResult, fireEvent, cleanup } from '@testing-library/react'
import Menu, {MenuProps} from './menu'
import MenuItem from './menuItem'

const testProps: MenuProps = {
    defaultIndex: 0,
    onSelect: jest.fn(),
    className: "test"
}
const testVarProps: MenuProps = {
    defaultIndex: 0,
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
        </Menu>
    )
}

let wrapper: RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disableElement: HTMLElement

describe('test menu and menuItem component', () => {
    beforeEach(() => {
        wrapper = render(generateMenu(testProps))
        menuElement = wrapper.getByTestId('test-menu')
        activeElement = wrapper.getByText('active')
        disableElement = wrapper.getByText('disable')
    })
    it('should render correct Menu and MenuItem based on default props', () => {
        expect(menuElement).toBeInTheDocument()
        expect(menuElement).toHaveClass('menu test')
        expect(menuElement.getElementsByTagName('li').length).toEqual(3)
        expect(activeElement).toHaveClass('menu-item is-active')
        expect(disableElement).toHaveClass('menu-item is-disabled')
    })
    it('click items should change active and call the right callback', () => {
        const thirdItem = wrapper.getByText('cool')
        fireEvent.click(thirdItem)
        expect(thirdItem).toHaveClass('is-active')
        expect(activeElement).not.toHaveClass('is-active')
        expect(testProps.onSelect).toHaveBeenCalledWith(2)
        fireEvent.click(disableElement)
        expect(disableElement).not.toHaveClass('is-active')
        expect(testProps.onSelect).not.toHaveBeenCalledWith(1)
    })
    it('should show dropdown items when hover on subMenu', () => {
        cleanup()
        const wrapper = render(generateMenu(testVarProps))
        const menuElement = wrapper.getByTestId('test-menu')
        expect(menuElement).toHaveClass('menu-vertical')
    })
})