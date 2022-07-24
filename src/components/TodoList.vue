<template>
    <div>
        <ul>
            <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item" class="shadow">
                <i class="checkBth fa-solid fa-check" v-bind:class="{ checkBtnCompleted: todoItem.completed }" v-on:click="toggleComplete(todoItem, index)"></i>

                <!-- 객체.속성값으로 접근 -->
                <span v-bind:class="{ textCompleted: todoItem.completed }"> {{ todoItem.item }}</span>

                <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
                    <i class="fa-solid fa-trash-can"></i>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            todoItems: []
        }
    },
    methods: {
        removeTodo: function (todoItem, index) {
            console.log(todoItem, index);
            localStorage.removeItem(todoItem);
            this.todoItems.splice(index, 1);
        },
        toggleComplete: function (todoItem) {
            //console.log(todoItem, index);
            todoItem.completed = !todoItem.completed;
            
            // 로컬 스토리지의 데이터 갱신
            localStorage.removeItem(todoItem.item); //아이템 지우기
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem)); //아이템 다시 세팅

    
        }
    },
    // 라이프 사이클_ 인스턴스가 생성되자마자 호출되는 라이프 사이클 훅 (로직이 돔)
    created: function () {
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    //console.log(typeof localStorage.getItem(localStorage.key(i)));
                    //console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
                    this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                    
                    //this.todoItems.push(localStorage.key(i));    
                }
            }
        }
    }
};
</script>

<style lang="scss" scoped>

ul{
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
}
li{
    display: flex;
    margin: 10px 0;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    padding: 0 0.9rem;
    background: #fff;
    border-radius: 5px;
}
.checkBth{
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
}
.checkBtnCompleted{
    color: #b3adad;
}
.textCompleted{
    text-decoration: line-through;
    color: #b3adad;
}
.removeBtn{
    margin-left: auto;
    color: #de4343;
}
</style>