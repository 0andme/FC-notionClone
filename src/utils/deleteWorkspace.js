//- 워크스페이스 삭제
// 자식 워크 스페이스의 부모 워크 스페이스 참조도 같이 삭제
import{apiURL,headers}from'~/utils/apiInfo'
import axios from 'axios'

export async function deleteWorkspace(workspaceId) {
  const { data } = await axios({
    url: `${apiURL}/${workspaceId}`,
    method: 'DELETE',
    headers: headers,
  })
  // console.log('del',data)
  // data= 워크스페이스 삭제 여부
  return data
}
