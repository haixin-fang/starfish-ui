import React from 'react'
import { configure, addDecorator } from '@storybook/react';
import {withInfo} from '@storybook/addon-info'
import "../src/styles/index.scss"

configure(require.context('../src', true, /\.stories\.tsx$/), module)
const styles: React.CSSProperties = {
  textAlign: 'center'
}
const CenterDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>
addDecorator(CenterDecorator)
addDecorator(withInfo)
