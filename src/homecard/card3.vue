
<template>

    <!-- <div class="container-fluid">
        <div class="row ">
            <h1 class="px-4">Sponsor</h1>
    <div class="col-3">
        <img src="../assets/images/leapfrog.png" alt="">
    </div>
        <div class="col-3">
            <img src="../assets/images/m.png" alt="">
        </div>
    <div class="col-3 ">
        <img src="../assets/Images/mac.png" alt="">
    </div>
    <div class="col-3 ">
        <img src="../assets/Images/deer.png" alt="">
    </div>
    </div>
    </div>  -->


    <!-- <div class="container-fluid row card2"> -->
        <!-- <div class="col-3 images" v-for="(data, index) in card2" :key="index"> -->
            <!-- <div class="card "> -->
                <!-- <img :src="data.image2"  alt="..."> -->
              <!-- </div> -->
        <!-- </div>
        </div>
     -->


     <div class="container-fluid">
     <div class="row g-3">
        <div class="col-3">
            <img class="img-fluid" src="../assets/images/leapfrog.png" alt="">
        </div>
        <div class="col-3"><img class="img-fluid " src="../assets/Images/m.png" alt=""></div>
        <div class="col-3"><img class="img-fluid " src="../assets/Images/mac.png" alt=""></div>
        <div class="col-3"><img class="img-fluid " src="../assets/Images/deer.png" alt=""></div>

      </div>
      </div>
</template>


<script setup>
const card2 = [
    {
        image2:'src/assets/Images/leapfrog.png' 
    },
    {
        image2:'src/assets/Images/m.png' 
    },
    {
        image2: 'src/assets/Images/mac.png'
    },
    {
        image2: 'src/assets/Images/deer.png'
    }
]
</script>
