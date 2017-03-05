<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-lin to="/" class="navbar-brand">Продавец акций</router-lin>
            </div>

            <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <router-link to="/portfolio" activeClass="active" tag="li"><a>Портфолио</a></router-link>
                <router-link to="/stocks" activeClass="active" tag="li"><a>Акции</a></router-link>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li><a href="#">Конец Дня</a></li>
                <li class="dropdown">
                <a
                    href="#"
                    class="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false">Сохранить & Загрузить <span class="caret"></span></a>
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
    export default {

    }
</script>