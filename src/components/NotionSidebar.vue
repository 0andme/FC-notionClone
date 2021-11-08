// sideBar
// ㄴ workspaceWrap
//   ㄴ workspaceHeader
//   ㄴ workspaceList 
<template>
<div class="sideBar">
  <!-- <div class="userInfo"></div> -->
  <div  class="workspaceWrap">
    <!-- 워크스페이스 헤더 -->
    <div class="workspaceHeader" @mouseover.self="isHover=true" @mouseleave.self="isHover=false" >
      <span>WORKSPACE</span>
      <!-- 워크스페이스 추가 컴포넌트 -->
      <AddWorkspace :parentId='undefined' :isHover="isHover"  @changeIsHover='changeIsHover'/>
    </div>

    <!-- 워크스페이스 목록 -->
    <ul class="workspaceList" >
      <template  v-for="space in this.$store.state.workspace.allSpaceList" :key="space.id">
        <WorkspaceItem :parentId="undefined" :deepth="deepth" :space="space"/>
      </template>

    </ul>
  </div>
</div>
  
</template>
<script>
import WorkspaceItem from "~/components/WorkspaceItem"
import AddWorkspace from '~/components/AddWorkspace'
export default {
  components:{
    WorkspaceItem,
    AddWorkspace
  },
  data(){
    return{
      isHover:false,
      deepth:0
    }
  },
  methods:{
    changeIsHover(state){
      this.isHover=state
    }  
  }
  
}
</script>
<style lang="scss" scoped>

.sideBar{
  width: 240px;

  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  
  background-color: #f7f6f3;
  .workspaceHeader{
    
  }
}
</style>