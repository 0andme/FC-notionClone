//- 전체 워크스페이스 목록 조회 - 상세 내용 미포함
import{apiURL,headers}from'~/utils/apiInfo'
import axios from 'axios'

export async function getAllWorkspace() {
  const { data } = await axios({
    url: apiURL,
    method: 'GET',
    headers: headers,
  })
  // console.log('전체',data)
  // data= [ { 아이디, 타이틀, 자식 항목 배열[{아이디,타이들}]},,{ } ]
  return data
}
