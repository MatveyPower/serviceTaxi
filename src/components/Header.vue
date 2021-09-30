<template>
    <header class="header">
        <div class="container">
            <nav class="nav">
                <ul class="nav-list">
                    <router-link class="link" to="/">
                        <li class="nav-list item">
                            Заказать такси
                        </li></router-link
                    >
                    <router-link class="link" to="/cars">
                        <li class="nav-list item">
                            Стать водителем
                        </li></router-link
                    >
                    <router-link class="link" to="/cars"
                        ><li class="nav-list item">Тарифы</li></router-link
                    >
                    <router-link class="link" to="/cars"
                        ><li class="nav-list item">Наш парк</li></router-link
                    >
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
}
</script>

<style scoped>
.header {
    background-color: #fff;
}
.nav {
    margin: 0 auto;
    padding: 10px 0;
}
.nav-list {
    justify-content: space-between;
    display: flex;
}

.item {
    border-radius: 4px;
    padding: 10px 30px;
    transition: 0.5s;
    color: #000;
}
.item:hover {
    background-color: #c9f0da;

    cursor: pointer;
}

@media screen and (max-width: 730px) {
}
</style>
