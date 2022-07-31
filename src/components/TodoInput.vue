<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoTtem" v-on:keyup.enter="addTodo">
        <span class="addContainer" v-on:click="addTodo">
            <i class="fa-solid fa-plus" style="color:#fff;"></i>
        </span>
    </div>
</template>

<script>
export default {

    // data는 함수. 하나의 객체만을 반환
    data: function(){
        return {
            newTodoTtem:""           
        }
    },
    methods: {
        addTodo(){
            if (this.newTodoTtem !== '') { //값이 있을때
               this.$emit('addTodoItem', this.newTodoTtem);              
               this.cleaerInput();          
            }
        },
        cleaerInput(){
            this.newTodoTtem='';
        },
    }
};
</script>

<style lang="scss" scoped>

input:focus{
    outline: none;
}
.inputBox{
    background: #fff;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input{
    border-style: none;
    font-size: 0.9rem;
}
.addContainer{
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn{
    color: #fff;
    vertical-align: middle;
}
</style>