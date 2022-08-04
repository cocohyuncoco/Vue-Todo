import Vue from 'vue'
import Vuex from 'vuex'
import todoApp from './modules/todoApp'

//use 는 vue의 플러그인, vue를 사용할때 전역으로 모든 영역에 특정 기능을 추가하고 싶을때 사용한다.
Vue.use(Vuex);



export const store = new Vuex.Store({
    modules:{
        todoApp
    }    
});