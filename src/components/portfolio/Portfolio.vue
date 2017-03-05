<template>
    <div class="portofolio">
        <app-stock v-for="(stock, index) in stocks" :stock="stock" :key="index"></app-stock>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Stock from './Stock'

    export default {
        computed: {
            ...mapGetters({
                stocks: 'stockPortfolio'
            })
        },
        components: {
            appStock: Stock
        }
    }
</script>