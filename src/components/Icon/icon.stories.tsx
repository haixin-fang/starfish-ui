import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import Button from '../Button/button'
import Icon from './icon'
// import { faFileExcel } from '@fortawesome/free-solid-svg-icons'
const defaultIcon = () => (
    <>
    <Icon
      icon="check"
      size="3x"
    />
    <Icon
      icon="times"
      size="3x"
      style={{marginLeft: '10px'}}
    />
    <Icon
      icon="anchor"
      size="3x"
      style={{marginLeft: '10px'}}
    />
    <Icon
      icon="trash"
      size="3x"
      style={{marginLeft: '10px'}}
    />
    <Icon
      icon="address-book"
      size="3x"
      style={{marginLeft: '10px'}}
    />
    <Icon
      icon="affiliatetheme"
      size="3x"
      style={{marginLeft: '10px'}}
    />
    <Icon
      icon="air-freshener"
      size="3x"
      style={{marginLeft: '10px'}}
    />
    <Button
      disabled={false}
      size="lg"
      style={{marginLeft: '10px'}}
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
      style={{marginLeft: '10px'}}
    />
    <Icon
      icon="anchor"
      size="3x"
      theme="primary"
      style={{marginLeft: '10px'}}
    />
    <Icon
      icon="exclamation-circle"
      size="3x"
      theme="warning"
      style={{marginLeft: '10px'}}
    />
    <Icon
      icon="angle-double-left"
      size="3x"
      theme="info"
      style={{marginLeft: '10px'}}
    />
    <Icon
      icon="audible"
      size="3x"
      theme="light"
      style={{marginLeft: '10px'}}
    />
    <Icon
      icon="award"
      size="3x"
      theme="dark"
      style={{marginLeft: '10px'}}
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
      style={{marginLeft: '10px'}}
    />
    <Icon
      icon="spinner"
      pulse
      size="3x"
      theme="danger"
      style={{marginLeft: '10px'}}
    />
    <Icon
      icon="spinner"
      pulse
      size="3x"
      theme="info"
      style={{marginLeft: '10px'}}
    />
    <Icon
      icon="spinner"
      pulse
      size="3x"
      theme="light"
      style={{marginLeft: '10px'}}
    />
    <Icon
      icon="spinner"
      pulse
      size="3x"
      theme="dark"
      style={{marginLeft: '10px'}}
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

