import {getAllWorkspace,getOneWorkspace,postWorkspace,putWorkspace,deleteWorkspace}from '~/utils'

export default{
  namespace:true,
  state:()=>({
    allSpaceList:[]
  }),
  getters:{},
  mutations:{
    updateData(state,data){
      state.allSpaceList=[...data]

    },
  },
  actions:{
    async getAlldata({state,commit}){
      getAllWorkspace()
        .then(data=>{
            commit('updateData',data)
          
        })
    },

  }
}