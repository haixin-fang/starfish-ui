import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import InputNumber from './inputnumber'

describe('test inputNumber component', () => {
    it('base make inputnumber', () => {
        const swapper = render(<InputNumber/>)
        const defaultElement = swapper.getByText('+')
        expect(defaultElement).toHaveClass('right')
        expect(defaultElement).toBeInTheDocument()      
    })
    it('disable inputnumber component', () => {
        const swapper = render(<InputNumber disabled/>)
        const AddElement = swapper.getByText('+')
        expect(AddElement).toBeInTheDocument()
        expect(AddElement).not.toHaveClass('is-disabled')
    })

})