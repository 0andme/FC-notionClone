//- 워크스페이스 수정
import{apiURL,headers}from'~/utils/apiInfo'
import axios from 'axios'

export async function putWorkspace({parentId,title,content}){
  //부모 워크스페이스 삭제 시 parentId=-1
  const { data } = await axios({
    url: `${apiURL}/${parentId}`,
    method: 'PUT',
    headers: headers,
    data:{
      title,
      content
    }
  })
  console.log('수정',data)
  // data= 수정된 객체 { 아이디, 타이틀, 상세내용}
  return data
}
