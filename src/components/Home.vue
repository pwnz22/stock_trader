<template>
    <div class="home">
        <h1>Торгуй или Смотри своё Портфоли</h1>
        <h6>Можешь сохранить и Загрузить свои данные</h6>
        <h6>Нажатием на "Конец Дня" можно начать "Hовый День"</h6>
        <hr>
        <p>Твои сбережения: {{ funds }}</p>
    </div>
</template>

<script>
    export default {
        computed: {
            funds() {
                return this.$store.getters.funds
            }
        }
    }
</script>