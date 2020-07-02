import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Input from './input'
const DefaultInput = () => (
    <Input
    onChange={action('changed')}
    placeholder="默认的 Input"
    />
)
const DisabledInput = () => (
    <Input
    disabled
    placeholder="禁用的 Input"
    />
)
const SizeInput = () => (
    <>
        <Input
        defaultValue="large size"
        size="lg"
        />
        <Input
        placeholder="small size"
        size="sm"
        />
    </>
)

const DiffInput = () => (
    <>
        <Input
        defaultValue="github.com/fhx10012091/starfish-ui"
        prepend="https://"
        />
        <Input
        style={{marginTop: '30px'}}
        append=".com"
        defaultValue="google"
        />
    </>
)

storiesOf('Input 输入框', module)
    .add('Input', (DefaultInput))
    .add('被禁用 Input', (DisabledInput))
    .add('不同尺寸的Input', (SizeInput))
    .add('带前后缀 Input', (DiffInput))