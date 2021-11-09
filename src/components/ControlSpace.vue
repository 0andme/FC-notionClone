<template>
<!-- 모달 -->
  <TheModal  :modalName="modalName" v-model="isShow">
    <template #activator>
      <div v-if="controlBtnCheck()" class="btn">
        <button title="제목 수정, 삭제하기"   @click='changeValue'>
          <i class="fas fa-ellipsis-h"></i>
        </button>
      </div>
    </template>
    <template #default>
      <button><i class="fas fa-pen"></i><span>제목 바꾸기</span></button>
      <button @click="delSpace"><i class="far fa-trash-alt"></i><span>삭제</span></button>
    </template>
  </TheModal>
</template>

<script>
import TheModal from '~/components/TheModal'


export default {
  components: { TheModal },
  props:{
    isHover:{
      type:Boolean,
      default:false,
      requried:true
    },
    parentId:{
      type:String,
      default:undefined
    },
    space:{
      type:Object,
      requried:true
    }
  },
  data(){
    return{
      isShow:false,
      spaceTitle:'',
      spaceContent:'',
      modalName:'control'

    }
  },
  emits:['changeIsHover'],
  watch:{
    isShow(newValue,oldValue){
      //모달창이 꺼졌을때
      if(newValue===false & oldValue===true){
        //만약 내용이 있다면
        if(this.spaceTitle.length>0 | this.spaceContent.length>0)
        {
          this.addWorkspace()
        }     
      }
    }
  },
  methods:{
    controlBtnCheck(){
      // 추가 버튼위에 마우스가 올라와있고 모달창이 꺼진상태일때만 버튼활성화
      // 나머지 상황에서는 전부 비활성화
      if (this.isHover===true & this.isShow===false)return true
      else return false
    },
    changeValue(){
      this.isShow=true
      this.$emit('changeIsHover',false)
    },
     delSpace(){
      const data={
         spaceId:this.space.id,
         parentId: this.parentId
      }
      this.$store.dispatch('delWorkspace',data) 
    }  
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