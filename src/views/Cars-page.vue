<template>
    <div>
        <main>
            <Cars />
        </main>
    </div>
</template>

<script>
import Cars from "@/components/Cars"

export default {
    data() {
        return {
            categoriId: 1,
        }
    },

    name: "Home",
    components: {
        Cars,
    },
    methods: {
        EditCategori(id) {
            this.categoriId = id
        },
    },
}
</script>

<style></style>
