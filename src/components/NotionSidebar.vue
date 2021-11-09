// sideBar
// ㄴ userInfo
// ㄴ workspaceWrap
//   ㄴ workspaceHeader
//   ㄴ workspaceList 
<template>
<div class="sideBar">
  <!-- 유저 헤더 -->
  <header class="userInfo">
    <div class="userImg">
      <img src="images/userImg.jpg" alt="Img"/>
      </div>
    <div class="userData">
      <div class="userData__name">0andme의 Notion</div>
      <div class="userData__email">yu00mi97@gmail.com</div>
    </div>
  </header>
  <div  class="workspaceWrap">
    <!-- 워크스페이스 헤더 -->
    <div class="workspaceHeader" @mouseover.self="isHover=true" @mouseleave.self="isHover=false" >
      <span>WORKSPACE</span>
      <!-- 워크스페이스 추가 컴포넌트 -->
      <AddWorkspace :parentId='undefined' :isHover="isHover"  @changeIsHover='changeIsHover'/>
    </div>

    <!-- 워크스페이스 목록 -->
    <div class="workspaceList scroll" >
      <template  v-for="space in this.$store.state.workspace.allSpaceList" :key="space.id">
        <WorkspaceItem :parentId="undefined" :deepth="deepth" :space="space"/>
      </template>
    </div>
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

