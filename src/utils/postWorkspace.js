//- 워크스페이스 생성
import{apiURL,headers}from'~/utils/apiInfo'
import axios from 'axios'

export async function postWorkspace({parentId,title,content}){
  const { data } = await axios({
    url: `${apiURL}/${parentId}`,
    method: 'POST',
    headers: headers,
    data:{
      title,
      content
    }
  })
  console.log('생성',data)
  // data= { 아이디, 타이틀, 상세내용}
  return data
}
