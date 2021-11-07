// sideBar
// ㄴ workspaceWrap
//   ㄴ workspaceHeader
//   ㄴ workspaceList 
<template>
<div class="sideBar">
  <!-- <div class="userInfo"></div> -->
  <div  class="workspaceWrap">
    <!-- 워크스페이스 헤더 -->
    <div @mouseover="addReady=true" @mouseleave="addReady=false" class="workspaceHeader">
      <span>WORKSPACE</span>
      <button v-if="addReady">
        <i class="far fa-plus-square"></i>
      </button>
    </div>

    <!-- 워크스페이스 목록 -->
    <ul class="workspaceList">
    </ul>
  </div>
</div>
  
</template>
<script>
export default {
  data(){
    return{
      addReady:false
    }
  }
  
}
</script>