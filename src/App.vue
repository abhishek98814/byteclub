<script setup>
import {RouterView} from "vue-router"
import  Nav from "./Components/Nav.vue"
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/footervue.vue";
// import textform from "./components/text.vue";
// import homecard from "./homecard/card1.vue";
// import homecard2 from "./homecard/card2.vue";
// import homecard3 from "./homecard/card3.vue"


</script>
<template>

<div>
    <Nav />
    <RouterView />
<!-- <textform /> -->
<!-- <homecard /> -->
<!-- <homecard2 /> -->
<!-- <homecard3 /> -->
<Footer />
  </div>
</template>

<style scoped>

</style>
