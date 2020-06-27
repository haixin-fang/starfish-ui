import React from 'react';
import Button, {ButtonSize, ButtonType} from './components/Button/button'
const App = () => {
  return (
    <div>
      <Button disabled>disabled</Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com">链接</Button>
      <Button size={ButtonSize.Large} btnType={ButtonType.Danger}>default</Button>
    </div>
  );
}

export default App;
