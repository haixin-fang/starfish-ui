import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons' 
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
// import Icon from './components/Icon/icon'
// library.add(fas) // 把所有相关的图标一起引用
const App = () => {
  return (
    <div>
      {/* <FontAwesomeIcon icon={faCoffee} size="10x"/> */}
      {/* <Icon theme='danger' icon='arrow-down' size="10x"/> */}
      <div className='button'>
        <Button disabled>disabled Default</Button>
        <Button btnType={ButtonType.Primary} autoFocus>Primary</Button>
        <Button btnType={ButtonType.Danger}>Danger</Button>
        <Button btnType={ButtonType.Default}>Default</Button>
        <Button size={ButtonSize.Small}>Small</Button>
        <Button size={ButtonSize.Large}>Large</Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com">链接有效</Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com" disabled>链接</Button>
      </div>
      <div className='menu1'>
        <Menu defaultIndex='0' defaultOpenSubMenu={['1']}>
          <MenuItem >
            cool link 1
          </MenuItem>
          <SubMenu title={'subMenu'}>
            <MenuItem >
              cool link 2
            </MenuItem>
            <MenuItem>
              cool link 3
            </MenuItem>
          </SubMenu>
          <MenuItem disabled>
            cool link 2
          </MenuItem>
          <MenuItem>
            cool link 3
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default App;
