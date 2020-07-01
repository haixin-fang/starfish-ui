import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input, {InputProps} from './input'

const defaultProps: InputProps = {
    onChange: jest.fn(),
    placeholder: 'test-input'
}
const DefaultInput =() => (
    <Input
    {...defaultProps}
    placeholder="漂亮的 Input"
  />
)

const DisabledInput =() => (
    <Input
    disabled
    placeholder="漂亮的 Input"
  />
)

describe('test input components', () => {
    it('default input components', () => {
        const wrapper = render(DefaultInput())
        const defaultElement = wrapper.getByPlaceholderText("漂亮的 Input") as HTMLInputElement
        expect(defaultElement).toBeInTheDocument()
        expect(defaultElement).toHaveClass('input-inner')
        fireEvent.change(defaultElement, {target: {value: '23'}})
        expect(defaultProps.onChange).toHaveBeenCalled()
        expect(defaultElement.value).toEqual('23')
    })
    it('disabled input components', () => {
        const wrapper = render(DisabledInput())
        const Disabled = wrapper.getByPlaceholderText('漂亮的 Input') as HTMLInputElement
        expect(Disabled).toBeInTheDocument()
        expect(Disabled).toBeTruthy()
    })
    it('different size input', () => {
        const wrapper = render(<Input size="lg" placeholder="sizes"/>)
        const SizeElement = wrapper.container.querySelector('.input-wrapper')
        expect(SizeElement).toHaveClass('input-size-lg')
    })
    it('prepend and append element', () => {
        const wrapper = render(<Input placeholder="pend" prepend="https://" append=".com"/>)
        const testContainer = wrapper.container.querySelector('.input-wrapper')
        expect(testContainer).toHaveClass('input-group input-group-append input-group-prepend')
        expect(wrapper.getByText('https://')).toBeInTheDocument()
        expect(wrapper.getByText('.com')).toBeInTheDocument()
    })
})

