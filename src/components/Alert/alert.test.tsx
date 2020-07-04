import React from 'react'
import {render, fireEvent, wait} from '@testing-library/react'
import Alert from './alert'

describe('test alert component', () => {
    it('test default alert', () => {
        const wrapper = render(<Alert title="this is alert"/>)
        const alertElement = wrapper.getByText('this is alert')
        expect(alertElement).toBeInTheDocument()
        expect(alertElement.tagName).toEqual('SPAN')
    })
    it('test type alert', async () => {
        const wrapper = render(<Alert title="this is alert" type='danger'/>)
        const alertElement = wrapper.container.querySelector('.close-icon-alert') as HTMLElement
        expect(alertElement).toBeInTheDocument()
        expect(wrapper.container.querySelector('.alert')).toHaveClass('alert-danger')
        fireEvent.click(alertElement)
        await wait(() => {
            expect(wrapper.container.querySelector('.alert') as HTMLElement).not.toBeInTheDocument()
        })
    })
    it('test description alert', () => {
        const wrapper = render(<Alert description="nh" title="this is alert"/>)
        const desElement = wrapper.getByText('nh')
        expect(desElement).toBeInTheDocument()
        expect(desElement.tagName).toEqual('P')
        const titleElement = wrapper.getByText('this is alert')
        expect(titleElement).toBeInTheDocument()
        expect(titleElement.tagName).toEqual('SPAN')
    })
})