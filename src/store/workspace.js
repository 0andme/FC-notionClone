import {getAllWorkspace,getOneWorkspace,postWorkspace,putWorkspace,deleteWorkspace}from '~/utils'

export default{
  namespace:true,
  state:()=>({
    allSpaceList:[],
    selectedSpace:{},
  }),
  getters:{
    listSize(state){
      return state.allSpaceList.length
    }
  },
  mutations:{
    updateData(state,data){
      state.allSpaceList=[...data]
    },
    updateSelectSpace(state,data){
      state.selectedSpace={...data}
    }
  },
  actions:{
    //- get
    async getAlldata({commit}){
      getAllWorkspace()
        .then(data=>{
          commit('updateData',data)          
        })
    },
    // - add
    async addWorkspace({dispatch},payload){
      // payload= {parentId, title, content}
      postWorkspace(payload).then((data)=>{
        this.dispatch('getAlldata')
      })

    },
    //- del
    async delWorkspace({dispatch},payload){
      const {spaceId}=payload
      deleteWorkspace(spaceId).then(()=>{
        this.dispatch('getAlldata')
      })
    },
    // - edit
    async editWorkspace({dispatch},payload){
      // payload= spaceId,title,content
      putWorkspace(payload).then(()=>{
        this.dispatch('getAlldata')
      })

    },
    async getClickedSpace({commit},payload){
      //payload= spaceId
      if(payload==='gotoGuide')
      {
        this.commit('updateSelectSpace',{})
      }
      else{
        getOneWorkspace(payload).then((data)=>{
          this.commit('updateSelectSpace',data)
        })
      }
      

    }

  }
}