
<script setup>
</script>

<template>
  <div class="container-fluid mt-5">
    <div class="container-md my-5 containerss">
      <img src="../assets/Images/contact2.png" alt="" />

      <div class="container-md text-center">
        <h2 class="text-secondary right">Have a Question about Bye club?</h2>
        <h2 class="text-secondary">Connect With Us.</h2>

        <div class="container">
          <div class="row py-3">
            <div class="col-6 py-3">
              <input type="text" placeholder="First Name*" />
            </div>
            <div class="col-6 py-3">
              <input type="text" placeholder="Last Name*" />
            </div>

            <div class="col-6">
              <input type="email" placeholder="Email*" />
            </div>

            <div class="col-6">
              <input type="text" placeholder="Phone Number*" />
            </div>
            
            <div class="container">
                <textarea class="mt-5" name="" id="" cols="30" rows="10" placeholder="Write Message"></textarea>
        </div>
          </div>
        </div>
        <div class="d-grid gap-0 d-md-flex justify-content-md-end py-2">
            <button class="btn btn-primary btn-lg" type="button">Button</button>
          </div>
      </div>
      <div class="d-grid gap-0 d-md-flex justify-content-md-end py-2">
      <img src="../assets/Images/contact3.png" alt="" />
      </div>
    </div>
    </div>

    <div class="container">
        <h1 class="text-primary py-4">Contact Information</h1>
        <div class="row gx-5">
            <div class="col-4">
                <h4 class="text-dark">Phone</h4>
                <p class="text-secondary fs-4">+977-988076598</p>
                <P class="text-secondary fs-4">01-525023</P>
            </div>
            <div class="col-4">
                <h4 class="text-dark">Email</h4>
                <P class="text-secondary fs-4">cb@gmail.com</P>
            <p class="text-secondary fs-4">ab@gmail.com</p>
            </div>
            <div class="col-4">
                <h4 class="text-dark">Adress</h4>
                <p class="text-secondary fs-4">Kamdevsthan, kUpondole</p>
            </div>
        </div>
    </div>

    <div class="container-fluid my-5 map">
    </div>

</template>

<style scoped>
.containerss {
    background: rgba(0, 74, 173, 0.01);
    box-shadow: 0px 2px 12px 2px rgba(0, 74, 173, 0.12);
    border-radius: 12px;
}

input {
  height: 60px;
  width: 500px;
  border: none;
  background: rgba(0, 74, 173, 0.01);
box-shadow: 0px 2px 12px 2px rgba(0, 74, 173, 0.12);
border-radius: 12px;
}
textarea{
    width: 1050px;
    border: none;
    background: rgba(0, 74, 173, 0.01);
box-shadow: 0px 2px 12px 2px rgba(0, 74, 173, 0.12);
border-radius: 12px;
}
button{
    right: 120px;
}

.map{
    
        background: url(../assets/Images/map.png) center no-repeat ;
        background-size:cover;
        height: 100vh;
        width: 100%;
        }

</style>>
