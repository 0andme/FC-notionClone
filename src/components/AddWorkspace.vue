<template>
<!-- 모달 -->
  <TheModal v-model="isShow">
    <template #activator>
      <button v-if="addBtnCheck()" @click='changeValue'>
        <i class="far fa-plus-square"></i>
      </button>
    </template>
    <template #default>
      <div class="editor">
        <div @input="getSpaceTitle" class="spaceTitle" placeholder='제목없음' contenteditable></div>
        <div @input="getSpaceContent" class="spaceContent" placeholder="엔터키를 눌러 빈 페이지를 사용하세요" contenteditable></div>  
      </div>
    </template>    
  </TheModal>
</template>

<script>
import TheModal from './TheModal.vue'

export default {
  components: { TheModal },
  props:{
    isHover:{
      type:Boolean,
      default:false

    },
    parentId:{
      type:String,
      default:undefined
    }
  },
  created(){
    // console.log('전달받은 부모',this.parentId)
  },
  data(){
    return{
      isShow:false,
      spaceTitle:'',
      spaceContent:''

    }
  },
  emits:['changeIsHover'],
  watch:{
    isShow(newValue,oldValue){
      //모달창이 꺼졌을때
      if(newValue===false & oldValue===true){
        //만약 내용이 있다면 워크스페이스로 등록
        if(this.spaceTitle.length>0 | this.spaceContent.length>0)
        {
          this.addSpace()
        }
       
      }

    }
 
  },
  methods:{
    addBtnCheck(){
      // 추가 버튼위에 마우스가 올라와있고 모달창이 꺼진상태일때만 버튼활성화
      // 나머지 상황에서는 전부 비활성화
      if (this.isHover===true & this.isShow===false)return true
      else return false
    },
    changeValue(){
      this.isShow=true
      this.$emit('changeIsHover',false)
    },
    addSpace(){
      if(this.spaceTitle===''){this.spaceTitle='제목 없음'}

      const data={
        parentId:this.parentId,
        title:this.spaceTitle,
        content:this.spaceContent
      }
      this.$store.dispatch('addWorkspace',data).then(()=>{
        this.spaceTitle=''
        this.spaceContent=''
      })

    },
    getSpaceTitle(el){
      this.spaceTitle=el.target.textContent
    },
    getSpaceContent(el){
      this.spaceContent=el.target.innerHTML
    },
  }
}

</script>
<style lang="scss" scoped>


.editor .spaceTitle:empty:before,
.editor .spaceContent:empty:before
{
  content: attr(placeholder);
  display: block;
  color: gray;
  
}

</style>