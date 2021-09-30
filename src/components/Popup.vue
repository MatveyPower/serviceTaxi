<template>
    <article class="modal">
        <section class="body">
            <span @click="closePopup" class="close">
                Х
            </span>
            <div class="modal-content">
                <div :key="index" v-for="(item, index) in data">
                    <label for="" v-show="hasProperties(index)">
                        <span>Редактировать {{ options[index] }}: </span>
                        <input type="text" :value="item" :placeholder="item" />
                    </label>
                </div>
                <div class="buttons-group">
                    <div v-show="type === 'edit'">
                        <a href="" class="floating-button">Сохранить</a>
                        <a href="" class="floating-button delete">Удалить</a>
                    </div>
                    <div v-show="type === 'add'">
                        <a href="" class="floating-button">Добавить</a>
                    </div>
                </div>
            </div>
        </section>
    </article>
</template>

<script>
export default {
    data() {
        return {
            options: {
                brand: "марку",
                color: "цвет",
                state_number: "номер",
            },
        }
    },
    props: {
        data: Object,
        type: String,
    },
    methods: {
        closePopup() {
            this.$emit("closePopup")
        },

        hasProperties(index) {
            return index && this.options[index]
        },
    },
}
</script>

<style>
.modal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
}
.body {
    width: 600px;
    height: 600px;
    background-color: #fff;
    position: relative;
}
.close {
    position: absolute;
    top: 5px;
    right: 10px;
    cursor: pointer;
}
.modal-content {
    padding: 20px 20px;
}
input[type="text"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
}

.floating-button {
    text-decoration: none;
    display: inline-block;
    width: 140px;
    height: 45px;
    line-height: 45px;
    border-radius: 45px;
    margin: 10px 20px;
    font-family: "Montserrat", sans-serif;
    font-size: 11px;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 3px;
    font-weight: 600;
    color: #524f4e;
    background: white;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    transition: 0.3s;
}
.floating-button:hover {
    background: #a4cfb7;
    box-shadow: 0 15px 20px rgba(46, 229, 157, 0.4);
    color: white;
    transform: translateY(-7px);
}

.delete {
    background-color: #eb3c37;
}
.delete:hover {
    background-color: a4cfb7;
}
.buttons-group {
    text-align: center;
}
</style>
