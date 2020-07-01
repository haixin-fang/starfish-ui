import React, {FC, useState, useEffect} from 'react';
import axios from 'axios'
import Upload from './components/Upload/upload'
const App: FC = () => {
  // const [title, setTitle] = useState('')
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(e.target.files)
  //   const files = e.target.files
  //   if(files){
  //     const uploadFiles = files[0]
  //     const formData = new FormData()
  //     formData.append(uploadFiles.name, uploadFiles)
  //     axios.post('https://jsonplaceholder.typicode.com/posts', formData, {
  //       headers: {
  //         'Context-Type': "multipart/form-data"
  //       }
  //     }).then(res => {
  //       console.log(res)
  //     })
  //   }
  // }
  return (
    <div>
      <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76"/>
    </div>
  );
}

export default App;
