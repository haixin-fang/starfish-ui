import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import Button from '../Button/button'
import Icon from './icon'
const defaultIcon = () => (
    <>
    <Icon
      icon="check"
      size="3x"
    />
    <Icon
      icon="times"
      size="3x"
    />
    <Icon
      icon="anchor"
      size="3x"
    />
    <Icon
      icon="trash"
      size="3x"
    />
    <Icon
      icon="address-book"
      size="3x"
    />
    <Icon
      icon="affiliatetheme"
      size="3x"
    />
    <Icon
      icon="air-freshener"
      size="3x"
    />
    <Button
      disabled={false}
      size="lg"
    >
      <Icon icon="check" />
       check 
    </Button>
    </>
)

const diffThemeIcon = () => (
    <>
    <Icon
      icon="check"
      size="3x"
      theme="success"
    />
    <Icon
      icon="times"
      size="3x"
      theme="danger"
    />
    <Icon
      icon="anchor"
      size="3x"
      theme="primary"
    />
    <Icon
      icon="exclamation-circle"
      size="3x"
      theme="warning"
    />
    <Icon
      icon="angle-double-left"
      size="3x"
      theme="info"
    />
    <Icon
      icon="audible"
      size="3x"
      theme="light"
    />
    <Icon
      icon="award"
      size="3x"
      theme="dark"
    />
    
    </>
)
const BehaviorIcon = () => (
    <>
     <Icon
      icon="spinner"
      size="3x"
      spin
      theme="primary"
    />
    <Icon
      icon="spinner"
      pulse
      size="3x"
      theme="success"
    />
    <Icon
      icon="spinner"
      pulse
      size="3x"
      theme="danger"
    />
    <Icon
      icon="spinner"
      pulse
      size="3x"
      theme="info"
    />
    <Icon
      icon="spinner"
      pulse
      size="3x"
      theme="light"
    />
    <Icon
      icon="spinner"
      pulse
      size="3x"
      theme="dark"
    />
    </>
)

storiesOf('Icon 图标', module)
    .add('Icon', (defaultIcon))
    .add('不同主题 Icon', (diffThemeIcon))
    .add('不同行为 Icon', (BehaviorIcon), 
    {
        info: {
            text: "更多例子请参见：https://github.com/FortAwesome/react-fontawesome#basic"
        }})

