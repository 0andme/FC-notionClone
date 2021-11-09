//- 워크스페이스 수정
import{apiURL,headers}from'~/utils/apiInfo'
import axios from 'axios'

export async function putWorkspace({spaceId,title,content,parentId=undefined}){
  //부모 워크스페이스 삭제 시 parentId=-1
  let param
  if(parentId===undefined) param={title,content}
  else param={parentId,title,content}

  const { data } = await axios({
    url: `${apiURL}/${spaceId}`,
    method: 'PUT',
    headers: headers,
    data:param
  })
  console.log('수정',data)
  // data= 수정된 객체 { 아이디, 타이틀, 상세내용}
  return data
}
