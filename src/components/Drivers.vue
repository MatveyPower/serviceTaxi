<template>
    <div class="container">
        <div :key=index v-for="(driver, index) in drivers">
            <driver/>
        </div>
    </div>
</template>

<script>
import Popup from "./Popup.vue"
import driver from "./driver.vue"
import SortingComponent from "./SortingComponent.vue"
import { mapActions, mapGetters } from "vuex"

export default {
    components: { SortingComponent, Popup, driver },
    name: "Drivers",
    data() {
        return {
            cars: [],
            sortBy: "all",
            sortedArray: [],
            show: false,
            item: undefined,
        }
    },
    methods: {
        ...mapActions(["API_DRIVERS"]),

        openPopup(item) {
            this.item = item
            this.show = true
        },
    },
    computed: {
        ...mapGetters(["GET_DRIVERS"]),
    },
    async mounted() {
        await this.API_DRIVERS()
        this.sortedArray = this.GET_CARS
        this.cars = this.GET_CARS
    },
}
</script>

<style scoped>
.cars {
    list-style: none;
}
.car_item {
    display: flex;
    background-color: #c9f0da;
    justify-content: space-between;
    padding: 25px 40px;
    margin: 10px 0;
    border-radius: 4px;
}
.cars_item {
    display: block;
    text-align: center;
    width: 150px;
}
.head {
    background-color: #fff;
    padding: 15px 40px;
}
.none {
    visibility: hidden;
}
.edit,
.trash {
    cursor: pointer;
    margin-right: 10px;
}

.numb {
    padding: 2px;
    border-radius: 4px;

    border: 2px solid #000;

    letter-spacing: 4px;
    background-color: #fff;
}

.sorting {
    text-align: center;
}
</style>
