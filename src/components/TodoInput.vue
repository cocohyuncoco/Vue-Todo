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

    data : function(){
        return {
            newTodoTtem:""           
        }
    },

    methods: {
        addTodo: function(){
            //console.log(this.newTodoTtem);
            // 저장하는 로직
            // setItem 키, 벨류 형태로 셋아이템 호출

            if (this.newTodoTtem !== '') { //값이 있을때
                // 자바스크립트 객체를 스프링으로 변환해주는 API
                var obj = { completed: false, item: this.newTodoTtem };
                localStorage.setItem(this.newTodoTtem, JSON.stringify(obj));
                //localStorage.setItem(this.newTodoTtem, obj);      
                
                this.cleaerInput();          
            }


            
        },
        cleaerInput: function(){
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