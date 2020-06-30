import React, {useState} from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons' 
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Transition from './components/Transition/transition'
// library.add(fas) // 把所有相关的图标一起引用
const App = () => {
  const [show, setShow] =useState(false)
  return (
    <div>
      {/* <FontAwesomeIcon icon={faCoffee} size="10x"/>
      <Icon theme='danger' icon='arrow-down' size="10x"/> */}
      <div className='button'>
        <Button disabled>disabled Default</Button>
        <Button btnType='primary' autoFocus>Primary</Button>
      </div>
      <Button size='lg' onClick={() => setShow(!show)}>Large</Button>
      <Transition
        in={show}
        animation='zoom-in-bottom'
        appear={false}
        timeout={300}
        wrapper={true}
      >
        <Button btnType='primary' autoFocus>Primary</Button>
        <Button btnType='danger' autoFocus>Danger</Button>
      </Transition>
      <div className='menu1'>
        <Menu defaultIndex='0' onSelect={(index) =>alert(index)}>
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
