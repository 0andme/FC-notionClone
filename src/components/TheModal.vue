<template>
  <slot name="activator"></slot>
  <teleport to ="body">
    <template v-if="modelValue">
    <div class="modal" @click.self="offModal">
      <div class="modalBox" @click.stop>
        <slot></slot>
      </div> 
    </div> 
  </template>  
  </teleport>
</template>

<script>
export default {
  props:{
    modelValue:{
      type:Boolean,
      default:false
    }
  },
  emits:['update:modelValue'],
  watch:{
    modelValue(newValue){
      // 값을 지켜보다 
      // 모달 창이 켜진 상태에서
      // esc 키가 눌리면 모달 off
      if(newValue===true){
        window.addEventListener('keyup',this.escHandler)
      }
      else{
        window.removeEventListener('keyup',this.escHandler)
      }

    }
  },
  methods:{
    offModal(){
      this.$emit('update:modelValue',false)
      //만약 제목이 있다면

    },
    escHandler(event){
      if(event.key==='Escape')
          {
            this.offModal()
          }
      
    }
  }
  
}
</script>
<style lang="scss" scoped>
.modal{
  position: fixed;
  top: 0;
  bottom:0;
  left:0;
  right: 0;
  background-color: rgba(black,.4);
  display: flex;
  justify-content: center;
  align-items: center;
  
  .modalBox{
    width: 400px;
    height:400px ;
    background-color: orange;


  }
}
</style>