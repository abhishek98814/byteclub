
<template>
 <div>
  <div class="container-fluid bg-primary py-3 ">
    <h4 class="text-light text-center justify-content-center">
      Become a member |
      <span class="text-decoration-underline">click here to register</span>
    </h4>
  </div>


  
 <!-- <div class="container-md"> -->
    <div class="d-flex flex-row">
      <img src="../assets/Images/logo.png " alt="" class="px-5"  style="height"  />
      <ul class="d-flex list-unstyled align-items-center ms-auto" >
      <RouterLink class="text-dark" style="text-decoration:none" to="/"><li>Home</li></RouterLink>
      <RouterLink class="text-dark" style="text-decoration:none" to="/event"><li>Event</li></RouterLink>
      <RouterLink class="text-dark" style="text-decoration:none" to="/presence"><li>Our presence</li></RouterLink>
      <RouterLink class="text-dark" style="text-decoration:none" to="/team"><li>Our Team</li></RouterLink>
      <RouterLink class="text-dark" style="text-decoration:none" to="/Blog"><li>Blog</li></RouterLink>
      <RouterLink class="text-dark" style="text-decoration:none" to="/contact"><li>Contact</li></RouterLink>


      </ul>
      <form class="ms-auto pt-4 mx-5">
        <button class="btn btn-primary btn-lg">Search</button>
      </form>
    </div>
    
 </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
ul li{
padding: 0.8rem;
}
button {
  background: #5ce1e6;
  font-size: 24px;
  font-weight: 600;
  font: bold;
  color: black;
  border-radius: 12px;
  border:none;
}
RouterLink{
 text-decoration: none;
}
</style>