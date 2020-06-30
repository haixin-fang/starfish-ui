import React from 'react';
import { render } from '@testing-library/react';
import Button, {ButtonProps, ButtonType, ButtonSize} from './button';

// 测试用例必须使用命令行npm test 

// test('ourfirst react test case', () => {
//   const wrapper = render(<Button>nice</Button>)
//   const element = wrapper.queryByText('nice')
//   expect(element).toBeTruthy()
//   expect(element).toBeInTheDocument()
// });

const TestProps: ButtonProps = {
    btnType: 'primary',
    size: 'lg',
    className: 'kiss'
}


// 分类

describe('test Button component', () => {
    it('should render the correct default button', () => {
        const wrapper = render(<Button>nice</Button>)
        const element = wrapper.getByText('nice')
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('BUTTON') // 判断tag名是否为Button
        expect(element).toHaveClass('btn btn-default') // 判断该组件是否有这些class
    })
    it('should render the correct component based on different props', () => {
        const wrapper = render(<Button {...TestProps}>nice</Button>)
        const element = wrapper.getByText('nice')
        expect(element).toBeInTheDocument()
        expect(element).toHaveClass('btn btn-primary kiss btn-lg')
    })
    it('should render a link when btntype equals link and href is provided', () => {
        const wrapper = render(<Button btnType='link' href="http://www.baidu.com">Link</Button>)
        const element = wrapper.getByText('Link')
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('A')
        expect(element).toHaveClass('btn btn-link')

    })
    it('should render disabled button when disabled', () => {
        const wrapper = render(<Button disabled btnType='link' href="http://www.baidu.com">Link</Button>)
        const element = wrapper.getByText('Link')
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('A')
        expect(element).toHaveClass('btn btn-link disabled')
    })
})