
<script setup>
import { faPhone } from "@fortawesome/free-solid-svg-icons";
</script>

<template>     
  <div class="container-fluid contain py-5">
 <div class="container">
    <div class="row pt-5">
    <div class="col-md-4 gx-5 pt-5">
        <img src="../assets/Images/logo.png" />
   <p class="fs4" style="font-weight:300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque deleniti adipisci quam.
   </p>
    </div>
    <div class="col-md-4 gx-5 py-5">
        <h3 class="text-dark">Quic Links </h3>
        <ul class="list-unstyled">
           <li>Event</li>
           <li>About Us</li>
           <li>Contact</li>
           <li>Blog</li>
        </ul>
    </div>
    <div class="col-md-4 gx-5 pt-5">
        <h3 class="text-dark">Sign up for our NewsLetter</h3>
        <p class="fs-6">Subscribe to know our every single updates</p>
        <input placeholder="Enter Your Email" />
        <button class="btn btn-primary">Subscribe Now</button>
        <div class="py-4">
          <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png" height="40px" alt="" class="mx-1">
          <img src="https://cdn.icon-icons.com/icons2/2066/PNG/512/instagram_icon_125245.png" alt="" height="40px" class="mx-1">
             <img src="https://static.vecteezy.com/system/resources/previews/006/693/634/original/tik-tok-flat-icon-template-black-color-editable-tik-tok-flat-icon-symbol-flat-illustration-for-graphic-and-web-design-free-vector.jpg" height="70px" alt="" class="mx-auto">
       <img src="https://cdn-icons-png.flaticon.com/512/733/733635.png" height="40px" alt="" class="mx-auto">
            </div>
      </div>
  </div> 
  </div>
  </div>
</template>
  
<style scoped>

.contain{
  height: 450px;
  background: rgba(0, 74, 173, 0.03);
  border: 0.5px solid rgba(0, 0, 0, 0.12);
}

input{
box-sizing: border-box;

position: absolute;
width: 222.13px;
height: 65px;

background: #FFFFFF;
border: 1px solid #004AAD;
box-shadow: 0px 4px 4px rgba(0, 74, 173, 0.09);
border-radius: 12px;
}
button{
  width: 150px;
  height: 65px;
  left: 150px;
   border-radius: 12px;
   font-weight: bold;
}
</style>