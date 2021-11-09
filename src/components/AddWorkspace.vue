<template>
<!-- 모달 -->
  <TheModal  :modalName="modalName" v-model="isShow">
    <template #activator>
      <div v-if="addBtnCheck()" class="btn add">
        <button @click='changeValue' title="하위 페이지 추가하기">
          <i class="fas fa-plus"></i>
        </button>
      </div>
    </template>
    <template #default>
        <div @input="getSpaceTitle" class="spaceTitle" placeholder='제목없음' contenteditable="true"></div>
        <div @input="getSpaceContent" class="spaceContent" placeholder="엔터키를 눌러 빈 페이지를 사용하세요" contenteditable="true"></div>  
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
  data(){
    return{
      isShow:false,
      spaceTitle:'',
      spaceContent:'',
      modalName:'add'

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
      this.spaceTitle=el.target.innerText
    },
    getSpaceContent(el){
      this.spaceContent=el.target.innerHTML
    },
  }
}

</script>
