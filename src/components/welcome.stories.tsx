import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome page', module)
  .add('welcome', () => {
    return (
      <div style={{width: "1000px"}}>
        <h1 >欢迎来到 roadsign 组件库</h1>
        <h4 style={{marginTop: "30px"}}>使用 REACT+TYPESCRIPT 从零到一打造一打造自己的组件库</h4>
        <p>roadsign 是个人级别的React UI组件库</p>
        <h5 style={{
            marginTop: "30px", 
            fontWeight: 700}}>安装</h5>
        <code style={{
            border: "1px solid #eee",
            marginTop: "10px",
            display: "inline-block",
            padding: "10px 300px 10px 15px"}}>
          npm install roadsign --save<br></br>
          yarn add antd
        </code>
        <h5 style={{
            marginTop: "30px", 
            fontWeight: 700}}>使用</h5>
        <code style={{
            border: "1px solid #eee",
            marginTop: "10px",
            display: "inline-block",
            padding: "10px 300px 10px 15px"}}>
          // 加载样式<br></br>
        import 'roadsign/dist/index.css'<br></br>
        // 引入组件<br></br>
        import {'Button'} from 'roadsign'<br></br>
        </code>
        <h5 style={{
            marginTop: "30px", 
            fontWeight: 700}}>知识点</h5>
        <div style={{
            marginTop: "10px",
            display: "inline-block",
            padding: "10px 300px 10px 15px"}}>
          <ul>
              <li>🔥typescript with React Hooks</li>
              <li>⛑️使用 react-testing-library 完成单元测试</li>
              <li>📚使用 storybook 本地调试和生成文档页面</li>
              <li>📚使用 react-doc-gen 自动生成文档</li>
              <li>📦使用第三方库扩充组件-(react-fontawesome, react-transition-group)</li>
              <li>🌹样式（Sass）文件从零开始，掌握大型应用的 CSS 组织方法</li>
              <li>🎉涉及全部流程，包括最后的 npm publish，husky提交发布前验证，travis CI/CD 集成，发布文档站点等</li>
          </ul>
        </div>
      </div>
    )
  }, { info : { 
      disable: true 
    }})