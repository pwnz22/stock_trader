<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand">Продавец акций</router-link>
            </div>

            <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <router-link to="/portfolio" activeClass="active" tag="li"><a>Портфолио</a></router-link>
                <router-link to="/stocks" activeClass="active" tag="li"><a>Акции</a></router-link>
            </ul>
            <strong class="navbar-text navbar-right">Сбережения: {{ funds | currency }}</strong>
            <ul class="nav navbar-nav navbar-right">
                <li><a href="#" @click.prevent="endDay">Конец Дня</a></li>
                <li
                    class="dropdown"
                    :class="{ open: isDropdownOpen }"
                    @click="isDropdownOpen = !isDropdownOpen"
                >
                    <a
                        href="#"
                        class="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >Сохранить & Загрузить <span class="caret"></span></a>
                <ul class="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a href="#">Separated link</a></li>
                </ul>
                </li>
            </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        data() {
            return {
                isDropdownOpen: false
            }
        },
        computed: {
            funds() {
                return this.$store.getters.funds
            }
        },
        methods: {
            ...mapActions([
                'randomizeStocks'
            ]),
            endDay() {
                this.randomizeStocks()
            }
        }
    }
</script>