<template>
    <div class="container">
        <div class="sorting">
            <SortingComponent
                @sortedArray="
                    (data) => {
                        sortedArray = data.sortArray
                    }
                "
                :sortName="'brand'"
                :sortArray="cars"
                :sortNameRus="'Марке'"
            />
            <SortingComponent
                @sortedArray="
                    (data) => {
                        sortedArray = data.sortArray
                    }
                "
                :sortName="'color'"
                :sortArray="cars"
                :sortNameRus="'Цвету'"
            />
        </div>
        <ul class="cars">
            <li class="car_item head">
                <span class="cars_item">Марка</span>
                <span class="cars_item">Цвет</span>
                <span class="cars_item">Гос. номер</span>
                <div class="none">
                    <span class="edit">
                        <img
                            height="20"
                            width="20"
                            src="@/assets/img/edit.png"
                            alt=""
                        />
                    </span>
                    <span class="trash">
                        <img
                            height="20"
                            width="20"
                            src="@/assets/img/trash.png"
                            alt=""
                        />
                    </span>
                </div>
            </li>
            <li
                @click="openPopup(car)"
                class="car_item"
                v-for="car in sortedArray"
                :key="car"
            >
                <span class="cars_item">{{ car.brand }}</span>
                <span class="cars_item">{{ car.color }}</span>
                <span class="cars_item numb">{{ car.state_number }}</span>
                <div>
                    <span class="edit">
                        <img
                            height="20"
                            width="20"
                            src="@/assets/img/edit.png"
                            alt=""
                        />
                    </span>
                    <span class="trash">
                        <img
                            height="20"
                            width="20"
                            src="@/assets/img/trash.png"
                            alt=""
                        />
                    </span>
                </div>
            </li>
        </ul>
        <Popup
            v-if="show"
            @closePopup="show = false"
            :data="item"
            :type="'edit'"
        />
    </div>
</template>

<script>
import Popup from "./Popup.vue"
import SortingComponent from "./SortingComponent.vue"
import { mapActions, mapGetters } from "vuex"

export default {
    components: { SortingComponent, Popup },
    name: "Cars",
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
        ...mapActions(["API_CARS"]),

        openPopup(item) {
            this.item = item
            this.show = true
        },
    },
    computed: {
        ...mapGetters(["GET_CARS"]),
    },
    async mounted() {
        await this.API_CARS()
        this.sortedArray = this.GET_CARS
        this.cars = this.GET_CARS
        // console.log(this.GET_CARS)
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
