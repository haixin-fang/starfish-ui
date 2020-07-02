import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import Upload, {UploadFile}  from './upload'
import Icon from '../Icon/icon'
import Button from '../Button/button'
const defaultFileList: UploadFile[] = [
  { uid: '123', size: 1234, name: 'hello.md', status: 'uploading', percent: 30 },
  { uid: '122', size: 1234, name: 'xyz.md', status: 'success', percent: 30 },
  { uid: '121', size: 1234, name: 'eyiha.md', status: 'error', percent: 30 }
]
// const filePromise = (file: File) => {
//     const newFile = new File([file], 'new_name.docx', {type:file.type})
//     return Promise.resolve(newFile)
// }
const checkFileSize = (file: File) => {
    if (Math.round(file.size / 1024) > 50) {
      alert('file too big')
      return false;
    }
    return true;
  }
const UploadDefault = () => {
    return (
        <>
            <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                onChange={action('change')}
                // beforeUpload={filePromise}
                defaultFileList={defaultFileList}
                name='fileName'
                data={{'key': 'value'}}
                header={{'X-Powered-By': 'roadsign'}}
                accept=".jpg"
                multiple
                drag={true}
            >
                <Icon icon="upload" size="5x" theme="secondary" />
                <br/>
                <p>Drag file over to upload</p>
            </Upload>
        </>
    )
}
const FirstUpload = () => {
    return (
        <>
            <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                onChange={action('change')}
                onProgress={action('progress')}
                onRemove={action('remove')}
            >
                <Button btnType='primary' size="lg">文件上传</Button>
            </Upload>
        </>
    )
}
const SizeUpload = () => {
    return (
        <>
            <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={checkFileSize}
                onChange={action('change')}
                onProgress={action('progress')}
                onRemove={action('remove')}
            >
                <Button btnType='primary' size="lg">不能传大于50KB</Button>
            </Upload>
        </>
    )
}


storiesOf("六、Upload 文件上传", module)
    .add('Upload', (FirstUpload))
    .add('检测上传文件大小', SizeUpload, {
        info: {
            text: `
                
                  ## 示例代码
                  ~~~js
                  const checkFileSize = (file: File) => {
                    if (Math.round(file.size / 1024) > 50) {
                      alert('file too big')
                      return false;
                    }
                    return true;
                  }
                  return (
                    <>
                        <Upload
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            beforeUpload={checkFileSize}
                            onChange={action('change')}
                            onProgress={action('progress')}
                            onRemove={action('remove')}
                        >
                            <Button btnType='primary' size="lg">不能传大于50KB</Button>
                        </Upload>
                    </>
                )
                  ~~~
                
            `
        }
    })
    .add('拖拽上传文件', (UploadDefault))