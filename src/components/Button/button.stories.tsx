import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button, {ButtonSize, ButtonType} from './button'

const defaultButton = () => (
    <>
    <Button onClick={action('clicked')} btnType={ButtonType.Default}>default button</Button>
    <Button disabled>disabled button</Button>
    </>
)
const buttonWithSize = () => (
    <>
        <Button size={ButtonSize.Small}>Small Button</Button>
        <Button size={ButtonSize.Large}>Large Button</Button>
    </>
)
const buttonWithType = () => (
    <>
        <Button btnType={ButtonType.Primary} autoFocus>Primary Button</Button>
        <Button btnType={ButtonType.Danger}>Danger Button</Button>
        <Button btnType={ButtonType.Link} href="https://github.com/fhx10012091/roadsign.git">Link</Button>
        <Button btnType={ButtonType.Link} href="https://github.com/fhx10012091/roadsign.git" disabled>Disabled Link</Button>
    </>
)


storiesOf('Button 按钮', module)
    .add('默认 Button', defaultButton)
    .add('不同尺寸的 Button', buttonWithSize)
    .add('不同类型的 Button', buttonWithType)

