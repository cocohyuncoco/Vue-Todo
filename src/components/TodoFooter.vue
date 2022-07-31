<template>
    <div class="clearALlContainer">
        <span class="clearAllBtn" v-on:click="clearTodo">Clear All</span>
    </div>
</template>

<script>
export default {
   methods: {
      clearTodo() {
        this.$emit('cleartAll');   
     }
  }
};
</script>

<style lang="scss" scoped>
.clearALlContainer{
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    border-radius: 5px;
    margin: 0 auto;
}
.clearAllBtn{
    color: #e20303;
    display: block;
}
</style>