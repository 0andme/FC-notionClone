<template>
<!-- 모달 -->
  <TheModal v-model="isShow">
    <template #activator>
      <button v-if="controlBtnCheck()" @click='changeValue'>
        <i class="fas fa-ellipsis-h"></i>
      </button>
    </template>
    <template #default>
      <div class="controler">
        <div class="editBtn"><button>수정</button></div>
        <div class="delBtn"><button @click="delSpace">삭제</button></div>
      </div>
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
      spaceContent:''

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
      console.log('data?',data)
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