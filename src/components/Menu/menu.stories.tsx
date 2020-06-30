import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Menu from './menu'
import MenuItem from './menuItem'
import SubMenu from './subMenu'

const MenuDefault = () => (
    <>
       <Menu defaultIndex='0' 
       onSelect={action('menu')}
       defaultOpenSubMenu={['2']}>
          <MenuItem >
            cool link 1
          </MenuItem>
          <MenuItem>
            cool link 2
          </MenuItem>
          <SubMenu title={'下拉选项'}>
            <MenuItem >
                下拉选项一
            </MenuItem>
            <MenuItem>
                下拉选项二
            </MenuItem>
          </SubMenu>
          <MenuItem disabled>
            disabled
          </MenuItem>
        </Menu>
    </>
)
const MenuVeriable = () => (
    <>
       <Menu defaultIndex='0' 
       mode="vertical"
       onSelect={action('menu')}
       >
          <MenuItem >
            cool link 1
          </MenuItem>
          <MenuItem>
            cool link 2
          </MenuItem>
          <SubMenu title={'下拉选项'}>
            <MenuItem >
                下拉选项一
            </MenuItem>
            <MenuItem>
                下拉选项二
            </MenuItem>
          </SubMenu>
          <MenuItem disabled>
            disabled
          </MenuItem>
        </Menu>
    </>
)

const MenuDefaultVeriable = () => (
    <>
       <Menu defaultIndex='0' 
       mode="vertical"
       onSelect={action('menu')}
       defaultOpenSubMenu={['2']}>
          <MenuItem >
            cool link 1
          </MenuItem>
          <MenuItem>
            cool link 2
          </MenuItem>
          <SubMenu title={'下拉选项'}>
            <MenuItem >
                下拉选项一
            </MenuItem>
            <MenuItem>
                下拉选项二
            </MenuItem>
          </SubMenu>
          <MenuItem disabled>
            disabled
          </MenuItem>
        </Menu>
    </>
)
storiesOf('Menu 菜单', module)
    .add('Menu', (MenuDefault))
    .add('纵向 Menu', (MenuVeriable))
    .add('默认展开的纵向 Menu', (MenuDefaultVeriable))


