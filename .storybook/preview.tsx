import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react';
import {withInfo} from '@storybook/addon-info'
import "../src/styles/index.scss"

const wrapperStyle: React.CSSProperties = {
  padding: '20px 40px',
  width: '600px'
}

const storyWrapper = (stroyFn: any) => (
  <div style={wrapperStyle}>
    <h3>组件演示</h3>
    {stroyFn()}
  </div>
)
addDecorator(storyWrapper)
const loaderFn = () => {
  const allExports = [require('../src/components/welcome.stories.tsx')];
  const req = require.context('../src/components', true, /\.stories\.tsx$/);
  req.keys().forEach(filename => req(filename));
  return allExports;
};
addDecorator(withInfo)
addParameters({
  info: {
    inline: true,
    styles: stylesheet => ({
    // Setting the style with a function
    ...stylesheet,
    infoBody: {
        ...stylesheet.infoBody,
        padding: '20px 40px 20px'
             },
        header: {
            ...stylesheet.header,
            h1: {
                ...stylesheet.header.h1,
                color: '#0d6efd',
                    },
                },
        }),
    }
 });

// addParameters({info: { inline: true, header: false}})
configure(loaderFn, module);

