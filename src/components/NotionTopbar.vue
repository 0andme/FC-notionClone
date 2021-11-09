<template>
  <header>
    <div v-if='this.$store.state.workspace.selectedSpace' class="nowSpaceName">{{this.$store.state.workspace.selectedSpace.title}}</div>
    <div class="nav">
      <span>공유</span>
      <span>업데이트</span>
      <span>즐겨찾기</span>
      <span>기타</span>
    </div>
  </header>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
header{
  position: absolute;
  width: calc(100% - 240px);
  top: 0px;
  right: 0;
  height: 45px;
  box-sizing: border-box;

  display: flex;
  align-items:center;
  justify-content: space-between;
  font-size: .8rem;
  .nowSpaceName{
    margin-left: 10px;
    font-size: 1rem;
  }
  .nav{
    span{
      margin-right: 5px;
    }
  }
}
</style>
