import React from 'react';
import { render } from '@testing-library/react';
import Button from './button';

// 测试用例必须使用命令行npm test 

test('ourfirst react test case', () => {
  const wrapper = render(<Button>nice</Button>);
  const element = wrapper.queryByText('nice');
  expect(element).toBeInTheDocument();
});
