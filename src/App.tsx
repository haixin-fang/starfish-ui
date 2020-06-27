import React from 'react';
import Button, {ButtonSize, ButtonType} from './components/Button/button'
const App = () => {
  return (
    <div>
      <Button disabled>disabled Default</Button>
      <Button btnType={ButtonType.Primary} autoFocus>Primary</Button>
      <Button btnType={ButtonType.Danger}>Danger</Button>
      <Button btnType={ButtonType.Default}>Default</Button>
      <Button size={ButtonSize.Small}>Small</Button>
      <Button size={ButtonSize.Large}>Large</Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com">链接有效</Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com" disabled>链接</Button>
    </div>
  );
}

export default App;
