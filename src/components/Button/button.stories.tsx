import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from './button'

const defaultButton = () => (
    <>
    <Button onClick={action('clicked')} btnType='default'>default button</Button>
    <Button disabled>disabled button</Button>
    </>
)
const buttonWithSize = () => (
    <>
        <Button size='sm'>Small Button</Button>
        <Button size='lg'>Large Button</Button>
    </>
)
const buttonWithType = () => (
    <>
        <Button btnType='primary' autoFocus>Primary Button</Button>
        <Button btnType='danger'>Danger Button</Button>
        <Button btnType='link' href="https://github.com/fhx10012091/roadsign.git">Link</Button>
        <Button btnType='link' href="https://github.com/fhx10012091/roadsign.git" disabled>Disabled Link</Button>
    </>
)


storiesOf('Button 按钮', module)
    .addParameters(
        {
            info: {
                text: `
                页面中最常用的的按钮元素，适合于完成特定的交互
                ### 引用方法
                ~~~js
                import { Button } from 'roadsign'
                ~~~
                `
            }
        }
    )
    .add('默认 Button', (defaultButton))
    .add('不同尺寸的 Button', buttonWithSize)
    .add('不同类型的 Button', buttonWithType)

