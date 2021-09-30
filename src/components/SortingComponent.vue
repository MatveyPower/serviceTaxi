<template>
    <div class="select">
        Сортировать по {{ sortNameRus }}
        <select v-model="sortBy">
            <option value="all">Все</option>
            <option
                :key="index"
                :value="value"
                v-for="(value, index) in sortByName"
                >{{ value }}</option
            >
        </select>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sortBy: "all",
        }
    },
    props: {
        sortName: String,
        sortArray: Array,
        sortNameRus: String,
    },
    watch: {
        sortBy() {
            const sortBy = this.sortBy
            const sortName = this.sortName
            let sortArray

            if (sortBy == "all") {
                sortArray = this.sortArray
            } else {
                sortArray = this.sortArray.filter(
                    (item) => item[this.sortName] === this.sortBy
                )
            }

            this.$emit("sortedArray", {
                sortArray,
            })
        },
    },
    computed: {
        sortByName() {
            return Array.from(
                new Set(this.sortArray.map((item) => item[this.sortName]))
            )
        },
    },
}
</script>

<style>
    .select{
        display: inline-block;
        margin-right: 10px;
        padding: 10px 0;
    }
</style>
