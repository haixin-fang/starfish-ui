import React from 'react';
import Button, {ButtonSize, ButtonType} from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
const App = () => {
  return (
    <div>
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
        <Menu defaultIndex={0} mode="vertical" onSelect={(index) => alert(index)}>
          <MenuItem >
            cool link 1
          </MenuItem>
          <MenuItem >
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
