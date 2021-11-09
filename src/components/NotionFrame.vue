<template>
  <main class="scroll" @click.self="updateSpace" >
    <div v-if="!isSelect() | !this.$store.getters.listSize>0">
      <GuideNotion/>
      </div>
    <div v-else >
    <div @input="getSpaceTitle" class="spaceTitle" placeholder='제목없음' contenteditable="true">{{selectedPage.title}}</div>
    <div @input="getSpaceContent" class="spaceContent" placeholder="엔터키를 눌러 빈 페이지를 사용하세요" contenteditable="true" v-html="selectedPage.content" ></div>  
    </div>
  </main> 
</template>
<script>
import GuideNotion from "../components/GuideNotion"
export default {
  components:{
    GuideNotion
  },
  computed:{
    selectedPage(){
 
      return this.$store.state.workspace.selectedSpace
    },
    oldTitle(){
      return this.$store.state.workspace.selectedSpace.title
    },
    oldContent(){
      return this.$store.state.workspace.selectedSpace.content
    }
  
  },
  methods:{
    isSelect(){
      if (Object.keys(this.selectedPage).length===0)return false
      else return true
    },
    updateSpace(){
      let title
      let content
      // 타이틀 확인
      if(this.inputTitle!==undefined){ //입력있음
        title=this.inputTitle===''?'제목없음':this.inputTitle
      }
      else{//입력 아예 없음
        title=this.oldTitle
      }
      // 내용 확인
      if(this.inputContent!==undefined){
        content=this.inputContent
      }
      else{
        content=this.oldContent
      }

      const data={
        spaceId:this.selectedPage.id,
        title,
        content
      }
      this.$store.dispatch('editWorkspace',data).then(()=>{
        this.inputTitle=this.selectedPage.title
        this.inputContent=this.selectedPage.content
      })
    },
    getSpaceTitle(el){
      this.inputTitle=el.target.innerText
    },
    getSpaceContent(el){
      this.inputContent=el.target.innerHTML
    },
  }
  
}
</script>
<style lang="scss" scoped>
main{
  position: absolute;
  width: calc(100% - 240px);
  top: 45px;
  right: 0;
  bottom: 0;
  padding: 96px;
  box-sizing: border-box;
  overflow-y: scroll;
}

</style>