//- 워크스페이스 생성
import{apiURL,headers}from'~/utils/apiInfo'
import axios from 'axios'

export async function postWorkspace({parentId,title,content}){
  // 부모 아이디 유뮤에 따라 보내는 data 변경
  let param
  if(parentId===undefined){
   param={title,content}
  }
  else{
    param={parentId,title,content}
  }
  const { data } = await axios({
    url: apiURL,
    method: 'POST',
    headers: headers,
    data:param
  })
  // data= { 아이디, 타이틀, 상세내용}
  return data
}
