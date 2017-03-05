<template>
    <div class="stocks">
        <app-stock v-for="(stock, index) in stocks" :stock="stock" :key="index"></app-stock>
    </div>
</template>

<script>
    import AppStock from './Stock'

    export default {
        data() {
            return {
                stocks: [
                    { id: 1, name: 'BMW', price: 50 },
                    { id: 2, name: 'Google', price: 150 },
                    { id: 3, name: 'Apple', price: 250 },
                    { id: 4, name: 'Twitter', price: 350 }
                ]
            }
        },
        components: {
            AppStock
        }
    }
</script>