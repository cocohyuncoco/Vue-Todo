<template>
    <div id="root">
        <p>{{ originalPrice }}}</p>
        <p>{{ doublePrice }}}</p>
        <p>{{ triplePrice }}}</p>
        <p>{{ forPrice }}}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
   computed:{
        ...mapGetters(['originalPrice', 'doublePrice', 'triplePrice', 'forPrice'])
        // originalPrice(){
        //    return this.$store.getters.originalPrice
        // },
        // doublePrice() { 
        //     return this.$store.getters.doublePrice
        // },
        // triplePrice() { 
        //     return this.$store.getters.triplePrice
        // },
        // forPrice() { 
        //     return this.$store.getters.forPrice
        // },

   }
};

</script>

<style lang="scss" scoped>

</style>