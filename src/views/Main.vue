<template>
  <div>
    <main>
    </main>
  </div>
</template>

<script>

import Header from '@/components/Header'

export default {
  data(){
    return {
      categoriId: 1
    }
  },


  name: 'Home',
  components: {
    Header
  },
  methods: {
    EditCategori(id){
      this.categoriId = id;
    }
  }
}
</script>

<style>

</style>
