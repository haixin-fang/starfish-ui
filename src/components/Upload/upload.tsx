import React, { FC, useRef, ChangeEvent, useState } from 'react'
import axios from 'axios'
import UploadList from './uploadList'
import Dragger from './dragger'
export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error'
 
export interface UploadFile {
    uid: string;
    name: string;
    size: number;
    status?: UploadFileStatus;
    percent?: number;
    raw?: File;
    response?: any;
    error?: any;
    
}

export interface UploadProps {
    /**必选参数, 上传的地址 */
    action: string;
    /**	上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传。 */
    beforeUpload?: (file: File) => boolean | Promise<File>;
    /**文件上传时的钩子 */
    onProgress?: (percentage: number, file: File) => void;
    /**文件上传成功时的钩子 */
    onSuccess?: (data: any, file: File) => void;
    /**	文件上传失败时的钩子 */
    onError?: (err: any, file: File) => void;
    /**	文件状态改变时的钩子，上传成功或者失败时都会被调用 */
    onChange?: (file: File) => void;
    /**	上传的文件列表, */
    defaultFileList?: UploadFile[];
    /**文件列表移除文件时的钩子 */
    onRemove?: (file: UploadFile) => void;
    /**设置上传的请求头部 */
    header?: {[key: string]: any};
    /**上传的文件字段名 */
    name?: string;
    /**	上传时附带的额外参数 */
    data?: {[key:string]: any};
    /**支持发送 cookie 凭证信息 */
    withCredentials?: boolean;
    /**	可选参数, 接受上传的文件类型 */
    accept?: string;
    /**是否支持多选文件 */
    multiple?: boolean;
    /**	是否支持拖拽上传 */
    drag?: boolean
}
/**
 * 通过点击或者拖拽上传文件
 * ### 引用方法
 * 
 * ~~~js
 * import { Upload } from 'starfish-ui'
 * ~~~
 */
export const Upload: FC<UploadProps> = (props) => {
    const {
        action,
        onProgress,
        defaultFileList,
        onRemove,
        onSuccess,
        onError,
        beforeUpload,
        onChange,
        header,
        name,
        data,
        withCredentials,
        accept,
        multiple,
        children,
        drag
    } = props
    
    const fileInput = useRef<HTMLInputElement>(null)
    const [fileList, setFileList] = useState<UploadFile[]>(defaultFileList || [])
    const updateFileList = (updateFile: UploadFile, updateObj: Partial<UploadFile>) => {
        setFileList(prevList => {
            return prevList.map(file => {
                if(file.uid === updateFile.uid){
                    return {...file, ...updateObj}
                }else{
                    return file
                }
            })
        })
    }
    const handleClick = () => {
        if(fileInput.current){
            fileInput.current.click()
        }
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;  
        if(!files){
            return
        }
        UploadFiles(files)
        if(fileInput.current){
            fileInput.current.value = ''
        }
    }
    const post = (file: File) => {
        let _file: UploadFile = {
            uid: Date.now() + 'upload-file',
            status: 'ready',
            name: file.name,
            size: file.size,
            percent: 0,
            raw: file
        }
        console.log('file-name'+ file.name)
        setFileList(prevList => {
            return [_file, ...prevList]
        })
        // setFileList([_file, ...fileList])
        const formData = new FormData()
            formData.append(name || 'file', file)
            if(data){
                Object.keys(data).forEach(key => {
                    formData.append(key, data[key])
                })
            }
            axios.post(action, formData, {
                headers: {
                    'Context-Type': 'multipart/form-data',
                    ...header
                },
                withCredentials,
                onUploadProgress: (e) => {
                    let percentage = Math.round((e.loaded * 100) / e.total) || 0
                    if(percentage < 100){
                        updateFileList(_file, {percent: percentage, status: 'uploading'})
                        if(onProgress){             
                            onProgress(percentage, file)
                        }
                    }
                    console.log('progress')
                    console.log(fileList)
                }
            }).then(res => {
                console.log(res)
                updateFileList(_file, {status: 'success', response: res.data})
                if(onSuccess){
                    onSuccess(res.data, file)
                }
                if(onChange){
                    onChange(file)
                }
            }).catch(err => {
                console.error(err)
                updateFileList(_file, {status: 'error', error: err})
                if(onError){
                    onError(err, file)
                }
                if(onChange){
                    onChange(file)
                }
            })
    }
    const UploadFiles = (files: FileList) => {
        let postFiles = Array.from(files)     
        postFiles.forEach(file => {
            if(!beforeUpload){
                post(file)
            }else{
                const result = beforeUpload(file)
                if(result && result instanceof Promise){
                    result.then(processedFile => {
                        post(processedFile)
                    })
                }else if(result !== false){
                    post(file)
                }
            }
        })
        
    }
    const handleRemove = (file: UploadFile) => {
        setFileList((prevList) => {
            return prevList.filter(item => item.uid !== file.uid)
        })
        if(onRemove){
            onRemove(file)
        }
    }
    console.log('fileList')
    console.log(fileList)
    return (
        <div className="upload-component">
            <div className="upload-input"
                style={{display: 'inline-block'}}
                onClick={handleClick}
            >
                {drag ? 
                    <Dragger onFile={(files) => {UploadFiles(files)}}>
                    {children}
                    </Dragger>:
                    children
                }
                <input 
                    type="file" 
                    ref={fileInput}
                    className="file-input"
                    onChange={handleChange}
                    accept={accept}
                    multiple={multiple}
                    style={{display: 'none'}}/>
            </div>
            <UploadList 
                fileList={fileList}
                onRemove={handleRemove}
            />
        </div>
    )
}

Upload.defaultProps = {
    name: 'file'
}
export default Upload;