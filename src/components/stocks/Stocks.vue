<template>
    <div class="stocks">
        <app-stock v-for="(stock, index) in stocks" :stock="stock" :key="index"></app-stock>
    </div>
</template>

<script>
    import AppStock from './Stock'

    export default {
        components: { AppStock },
        computed: {
            stocks() {
                return this.$store.getters.stocks
            }
        }
    }
</script>