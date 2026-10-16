<template>
  <section class="merch">
    <div class="container">
      <div class ="title">
        <h2>Gear Up</h2>
        <h1>Official Merchandise  </h1>
        <p>Rep Metal Core inside and outside the gym. Available for purchase at our front desk reception.</p>
      </div>
      
      
      <div class = "grid-container">
        <div class = merch-card>
          <div class = image>
            <img src = "@/assets/image/Runshirt.jpg" alt ="Runshirt">
          </div>
          <div class = "text">
            <h1>Metal Core Run Club Shirt</h1>
            <p>Designed for the Metal Core Run Club with vibrant sublimation printing.</p>
          </div>
        </div>
        <div class = merch-card>
          <div class = image>
            <img src = "@/assets/image/Mcshorts.jpg" alt ="Runshirt">
          </div>
          <div  class = "text">
            <h1>MC Mesh Shorts</h1>
            <p>Crafted from premium breathable mesh fabric with an embroidered MC Logo.</p>
          </div>
        </div>
        <div class = merch-card>
          <div class = image>
            <img src = "@/assets/image/Oversizetee.jpg" alt ="Runshirt">
          </div>
          <div class = "text">
            <h1>MC Oversized Tee</h1>
            <p>Crafted from premium CVC cotton with a relaxed oversized fit.</p>
          </div>
        </div>
        <div class = merch-card>
          <div class = image>
            <img src = "@/assets/image/Mcsocks.jpg" alt ="Runshirt">
          </div>
          <div class = "text">
            <h1>MC Socks</h1>
            <p>Premium socks designed for all-day comfort, featuring a soft, breathable fabric.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.merch {
  height: 100vh;
  max-width: 100vw;
}
.container{
  min-height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #1A1A1A;
  padding-top: 80px;
}

.grid-container{
  min-height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 0.5fr 0.5fr;
  align-items: center;
  background-color: #1A1A1A;
  gap: 20px
}
.title{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 60px;
}

.title h2{
  color: red;
}
.title p{
  color: grey;
}


.merch-card{
  display: flex;
  width: 80%;
  min-height:100% ;
  background-color:black;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 10%;
}

.merch-card img{
  height: 225px;
  width: auto;
  object-fit:contain;
  margin-bottom: 10px;
}

.merch-card h1{
  font-size: 20px;
  text-align: center;
}
.merch-card p{
  font-size: 10px;
  text-align: center;
}

h1{color: white;}

</style>
