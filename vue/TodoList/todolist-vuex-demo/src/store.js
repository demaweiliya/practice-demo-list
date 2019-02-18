import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists:[]
  },
  mutations: {
    addNewItem(state,newItem){
      state.lists.push({
        name:newItem,
        completed:false
      })
    },
    deleteCurItem(state,curItem){
      let lists = state.lists;
      lists.splice(lists.findIndex((item)=>{return item === curItem}),1);
    },
    markAllItem({lists},markAll){
      lists.map(item => {
        return item.completed = markAll;
      })
    },
    markCurItem({lists},curItem){
      lists.find(item=>item === curItem).completed = !curItem.completed;
    }
  },
  actions: {

  },
  getters:{
    lists:state=>state.lists
  },
  plugins:[createLogger()]
})
