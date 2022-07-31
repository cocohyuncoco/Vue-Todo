<template>
    <div>
        <ul>
            <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item" class="shadow">
                <i class="checkBth fa-solid fa-check" v-bind:class="{ checkBtnCompleted: todoItem.completed }"
                    v-on:click="toggleComplete(todoItem, index)"></i>

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
    props: ['propsdata'],
    methods: {
        removeTodo(todoItem, index) {
            this.$emit('removeItem', todoItem, index);          

        },
        toggleComplete(todoItem, index) {
            this.$emit('toggleItem', todoItem, index);
        }
    },
    
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