<template>
  <div id="app">
    <TodoHeader> </TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>

    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="remobvOneItem" v-on:toggleItem="toggleOneItem"></TodoList>

    <TodoFooter v-on:cleartAll="clearAllItem"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'


export default {
  data(){
    return{
      todoItems: []
    }
  },
  methods: {
    addOneItem(todoItem){
      var obj = { completed: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    remobvOneItem(todoItem, index){
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1); //idx 데이터 하나 삭제
    },
    toggleOneItem(todoItem, index){
      this.todoItems[index].completed = !this.todoItems[index].completed;
      
      // 로컬 스토리지 데이터를 갱신
      localStorage.removeItem(todoItem.item); //아이템 지우기
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem)); //아이템 다시 세팅
    },
    clearAllItem() {
      localStorage.clear();
      this.todoItems =[];
    },
  },
  // 라이프 사이클_ 인스턴스가 생성되자마자 호출되는 라이프 사이클 훅 (로직이 돔)
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {          
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
  },
  components: {
   // 컴포넌트 태그명 : 컴포넌트 내용
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
  

 }
</script>

<style>
body{
  text-align: center;
  background-color: #f6f6f6;
  font-family: Ubuntu, sans-serif;
  font-weight: 500;
  letter-spacing: -0.8px;
}
input{
  border-style: groove;
  width: 200px;
}
button{
  border-style: groove;
}
.shadow{
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
