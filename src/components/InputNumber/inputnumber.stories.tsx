import React from 'react'
import {storiesOf} from '@storybook/react'
import InputNumber from "./inputnumber"
import {action} from '@storybook/addon-actions'
const BaseInputNumber = () => (
    <InputNumber/>
)
const DisableInputValue = () => {
    return (
        <InputNumber disabled/>
    )
}

const StepInputNumber = () => (
    <InputNumber step={2}/>
)
const StrictInputNumber = () => (
    <InputNumber stepStrict step={3}/>
)
const ChangeInputNumber = () => (
    <InputNumber change={action('change')}/>
)
const RangeInputNumber = () => (
    <InputNumber min={1} max={8}/>
)
storiesOf('InputNumber 计数器', module)
    .add('InputNumber 基础用法', BaseInputNumber)
    .add('InputNumber 禁用状态', DisableInputValue)
    .add('InputNumber 步数', StepInputNumber)
    .add('InputNumber 严格步数', StrictInputNumber)
    .add('InputNumber 范围', RangeInputNumber)
    .add('InputNumber 获取最新值', ChangeInputNumber)