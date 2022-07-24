<template>
  <div id="app">
    <TodoHeader> </TodoHeader>
    <TodoInput> </TodoInput>
    <TodoList> </TodoList>
    <TodoFooter> </TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'


export default {

  components: {
   // 컴포넌트 태그명 : 컴포넌트 내용
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList' : TodoList,
    'TodoFooter': TodoFooter
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
