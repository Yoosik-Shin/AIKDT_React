import Insert from '../../components/board/Insert'
import * as boards from '../../apis/boards'
import { useNavigate } from 'react-router-dom'

const InsertContainer = () => {

  const navigate = useNavigate()

  // 게시글 등록 요청 핸들러
  const onInsert = async (data, headers) => {
    try {
      const response = await boards.insert(data, headers)
      const msg = await response.data
      console.log(msg);
      alert('등록 완료')
      // 게시글 목록으로 이동
      navigate('/boards')
    } catch (error) {
      console.log(error);
    }
  }


  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
        return customUploadAdapter(loader);
    };
  }

  const customUploadAdapter = (loader) => {
        return {
          upload() {
            return new Promise( (resolve, reject) => {
              const formData = new FormData();
              loader.file.then( async (file) => {
                    console.log(file);
                    formData.append("pTable", 'editor');
                    formData.append("file", file);

                    const headers = {
                        headers: {
                            'Content-Type' : 'multipart/form-data',
                        },
                    };
    
                    let response = await files.upload(formData, headers);
                    let data = await response.data;
                    console.log(`data : ${data}`);
                    
                    let newFile = data;
                    let newFileNo = newFile.no

										// 이미지 렌더링
                    await resolve({
                        default: `http://localhost:8080/files/img/${newFileNo}`
                    })
                    
              });
            });
          },
        };
    };

  return (
    <>
      <Insert onInsert={onInsert} />
    </>
  )
}

export default InsertContainer