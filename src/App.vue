<template>
<NotionSidebar/>
<!-- NotionTopbar버튼이 눌리면 사이드바 열리게 열리고 나면 버튼은 사라져야함 -->
<!-- <NotionTopbar/> -->
<!-- <NotionFrame/> -->
</template>

<script>
import NotionFrame from '~/components/NotionFrame'
import NotionSidebar from '~/components/NotionSidebar'
import NotionTopbar from '~/components/NotionTopbar'

export default {
  components:{
    NotionFrame,
    NotionSidebar,
    NotionTopbar
  },
  data() {
    return {
      
    }
  },
  created(){
    // 데이터 가져오기
      this.$store.dispatch('getAlldata')
      
  }
}
</script>