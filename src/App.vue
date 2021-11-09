<template >
  <Loader v-if="!fetched"/>
  <template v-else>
    <NotionSidebar/>
    <NotionTopbar/>
    <NotionFrame/>
   </template>
</template>

<script>
import NotionFrame from '~/components/NotionFrame'
import NotionSidebar from '~/components/NotionSidebar'
import NotionTopbar from '~/components/NotionTopbar'
import Loader from '~/components/Loader'
export default {
  components:{
    NotionFrame,
    NotionSidebar,
    NotionTopbar,
    Loader
  },
  data() {
    return {
      fetched:false
    }
  },
  created(){
    // 데이터 가져오기
      this.$store.dispatch('getAlldata').then(()=>{
        setTimeout(()=>{this.fetched=true},1000)
      })
      
  }
}
</script>