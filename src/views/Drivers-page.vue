<template>
    <div>
        <main>
            <Drivers />
        </main>
    </div>
</template>

<script>
import Drivers from "@/components/Drivers"

export default {
    data() {
        return {
            categoriId: 1,
        }
    },

    name: "Home",
    components: {
        Drivers,
    },
    methods: {
        EditCategori(id) {
            this.categoriId = id
        },
    },
}
</script>

<style></style>
