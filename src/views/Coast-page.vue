<template>
    <div>
        <main>
            <Coasts/>
        </main>
    </div>
</template>

<script>
import Coasts from "@/components/Coasts"

export default {
    data() {
        return {
            categoriId: 1,
        }
    },

    name: "Home",
    components: {
        Coasts,
    },
    methods: {
        EditCategori(id) {
            this.categoriId = id
        },
    },
}
</script>

<style></style>