<template>
    <div id="app" class="app">
        <Header />
        <router-view />
    </div>
</template>

<script>
import Header from "@/components/Header"

export default {
    // name: 'App',
    // computed: {
    //     isWorker(){
    //         return localStorage.getItem('user-permission') === 'true'
    //     }
    // }
    components: {
        Header,
    },
}
</script>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.link {
    text-decoration: none;
}
.link:active {
    color: #000;
}

@font-face {
    font-family: VictorMono-Medium;
    src: url(static/VictorMono/VictorMono-Medium.ttf);
    font-style: normal;
    font-weight: normal;
}
@font-face {
    font-family: VictorMono-Bold;
    src: url(static/VictorMono/VictorMono-Bold.ttf);
    font-style: normal;
    font-weight: normal;
}
@font-face {
    font-family: VictorMono-Regular;
    src: url(static/VictorMono/VictorMono-Regular.ttf);
    font-style: normal;
    font-weight: normal;
}
@font-face {
    font-family: Gilroy-Regular;
    src: url(static/Gilroy/Gilroy-Regular.ttf);
    font-style: normal;
    font-weight: normal;
}
@font-face {
    font-family: Gilroy-Bold;
    src: url(static/Gilroy/Gilroy-Bold.ttf);
    font-style: normal;
    font-weight: normal;
}
@font-face {
    font-family: Minecraft;
    src: url(static/Minecraft_RUS/minecraft.ttf);
    font-style: normal;
    font-weight: normal;
}
* {
    margin: 0;
    padding: 0;
}

#app {
    min-height: 100vh;
}
.app {
    background-color: #2edd7a36;
}

.bg-red {
    background-image: url("assets/img/BG1.png");
}

.container {
    max-width: 1100px;
    margin: 0 auto;
}
</style>
