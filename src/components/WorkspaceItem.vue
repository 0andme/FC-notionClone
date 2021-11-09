<template>
<div :class="[`space child${deepth}th `]" @mouseover.self="isHover=true" @mouseleave.self="isHover=false">
  <!-- 토글 버튼 -->
  <div class="btn toggle">
    <button  @click="isOpen=!isOpen">
    <i v-if="isOpen" class="fas fa-caret-down"></i>
    <i v-if="!isOpen" class="fas fa-caret-right"></i>
  </button>
  </div>
  <!-- 워크 스페이스 타이틀 -->
  <p @click="spaceSelect" class="title scroll">{{space.title}}</p>
  <!-- 워크스페이스 수정 삭제 컴포넌트 -->
  <ControlSpace :space="space" :parentId='parentId' :isHover="isHover"  @changeIsHover='changeIsHover'/>
  <!-- 워크스페이스 추가 컴포넌트 -->
  <template  v-if="deepth<3"> 
    <AddWorkspace  :parentId='space.id' :isHover="isHover"  @changeIsHover='changeIsHover'/>
  </template>
</div>
  <!-- 토글 버튼이 열렸을 경우 -->
  <template v-if="isOpen">
    <!-- 자식 컴포넌트 있을 경우 -->
    <div v-if="space.children" >
      <template class="hidden" v-for="child in space.children" :key="child.id">
        <WorkspaceItem  :deepth="deepth+1" :parentId="space.id" :space="child" />
      </template>
    </div>
    <!-- 자식 컴포넌트 없을 경우 -->
    <div :class="[`space  scroll child${deepth}th`]" v-else><span class="nochildMsg" >하위 페이지가 없습니다</span></div>
  </template>

  
</template>
<script>
import AddWorkspace from "~/components/AddWorkspace"
import ControlSpace from "~/components/ControlSpace"


export default {
  components:{
    AddWorkspace,
    ControlSpace,
  },
  props:{
    space:{
      type:Object,
    },
    parentId:{
      type:String,
      default:undefined
    },
    deepth:{
      type:Number,
      requried:true
    }
  },
  data(){
    return{
      isHover:false,
      isOpen:false
    }
  },
  methods:{
    changeIsHover(state){
      this.isHover=state
    },
    spaceSelect(){      
      this.$store.dispatch('getClickedSpace',this.space.id)
      
    }
  }
  
  
}
</script>
