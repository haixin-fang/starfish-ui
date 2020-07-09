import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import Switch from './switch'


const defaultSwitch = () => {
    return (
        <Switch 
        // activeColor="red" 
        // inactiveColor="yellow"
        // disabled
        change={action('checked')}
        // defaultChecked={true}
        />
    )
}
const colorSwitch = () => (
    <Switch 
        activeColor="red" 
        change={action('checked')}
        inactiveColor="yellow"
    />
)
const fontSwitch = () => (
    <Switch
        activeText="按月付费"
        inactiveText="按年付费"
        change={action('checked')}
    />
)
const disabledSwitch = () => (
    <Switch 
        disabled
        change={action('checked')}/>
)

storiesOf('Switch 开关', module)
    .add('Switch基本用法', defaultSwitch)
    .add('Switch更改背景颜色', colorSwitch)
    .add('Switch文字描述', fontSwitch)
    .add('Switch禁用', disabledSwitch)