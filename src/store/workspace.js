import {getAllWorkspace,getOneWorkspace,postWorkspace,putWorkspace,deleteWorkspace}from '~/utils'

export default{
  namespace:true,
  state:()=>({
    allSpaceList:[]
  }),
  mutations:{
    updateData(state,data){
      state.allSpaceList=[...data]
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
    async addWorkspace({commit,dispatch},payload){
      // payload= {parentId, title, content}
      postWorkspace(payload).then((data)=>{
        this.dispatch('getAlldata')
      })

    },
    //- del
    async delWorkspace({commit,dispatch},payload){
      const {spaceId}=payload
      deleteWorkspace(spaceId).then(()=>{
        this.dispatch('getAlldata')
      })
    }

  }
}