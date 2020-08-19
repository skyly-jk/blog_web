import Vue from "vue";
import Vuex from 'vuex'
Vue.use(Vuex)

const state={
    categorys:['java','javascript'],
    tags:['java','spring','web']
}
const getters={

}
const mutations={
    addCategory(state,item){
        state.categorys.push(item)
    },
    addTag(state,item){
        state.tags.push(item)
    }
}
const store =new Vuex.Store({
    state,
    getters,
    mutations
})

export default store