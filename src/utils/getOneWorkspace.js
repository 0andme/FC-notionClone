//- 단일 워크스페이스 목록 조회 - 상세 내용 포함
import{apiURL,headers}from'~/utils/apiInfo'
import axios from 'axios'

export async function getOneWorkspace(workspaceId){
  const { data } = await axios({
    url: `${apiURL}/${workspaceId}`,
    method: 'GET',
    headers: headers,
  })
  // console.log('단일',data)
  // data= [ { 아이디, 타이틀, 상세내용, 자식 항목 배열[{아이디,타이들}]},,{ } ]
  return data
}
