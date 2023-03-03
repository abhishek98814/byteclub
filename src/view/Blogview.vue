<script setup>
import search from "../input/inputbox.vue"
import blog from "../blogcard/card1.vue"
</script>

<template>
    <div class="container-fluid mt-auto home">
        <div class="ciontainer text-center ">
        <button class="btn text-dark  btn1"><h3>Blog</h3></button> 
        </div>
          </div>
<search />
<blog />
</template>

<style setup>
.home{
background: url(../assets/Images/blog.png) center no-repeat ;
background-size:cover;
height: 100vh;
width: 100%;
}

.btn1{
position: absolute;
width: 218px;
height: 65px;
top: 240px;
background: rgba(250, 250, 250, 0.5);
border-radius: 12px;
border: none;
left: 500px;
}
</style>