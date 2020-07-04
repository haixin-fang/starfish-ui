import React from 'react'
import {storiesOf} from '@storybook/react'
import {Alert} from './alert'
import {action} from '@storybook/addon-actions'


const DefaultAlert = () => (
    <Alert title="this is alert"/>
)
const DiffTypeAlert = () => (
       <>
       <Alert 
        type="success"
        onClose={action('close')}
        style={{marginTop: '15px'}}
        title="this is alert"/>
        <Alert 
        type="warning"
        style={{marginTop: '15px'}}
        onClose={action('close')}
        title="this is alert"/>
        <Alert 
        type="danger"
        style={{marginTop: '15px'}}
        onClose={action('close')}
        title="this is alert"/>
       </>
)
const DesAlert = () => (
    <Alert 
     onClose={action('close')}
     description="this is alert"
     title="Title"/>
)

storiesOf('Alert提示框', module)
    .add('Alert', DefaultAlert)
    .add('不同样式的Alert', DiffTypeAlert)
    .add('添加描述的Alert', DesAlert)