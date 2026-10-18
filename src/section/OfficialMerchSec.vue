<template>
  <section class="merch" id ="merch">
    <div class="container">
      <div class="title">
        <h2>Gear Up</h2>
        <h1>Official Merchandise</h1>
        <p>
          Rep Metal Core inside and outside the gym. Available for purchase at our front desk reception.
        </p>
      </div>

      <div class="grid-container">
        <div class="merch-card">
          <div class="image">
            <img src="@/assets/image/merchImg/Runshirt.jpg" alt="Runshirt">
          </div>
          <div class="text">
            <h1>Metal Core Run Club Shirt</h1>
            <p>Designed for the Metal Core Run Club with vibrant sublimation printing.</p>
            <h2 class="price">₱499</h2> 
          </div>
        </div>

        <div class="merch-card">
          <div class="image">
            <img src="@/assets/image/merchImg/Mcshorts.jpg" alt="MC Mesh Shorts">
          </div>
          <div class="text">
            <h1>MC Mesh Shorts</h1>
            <p>Crafted from premium breathable mesh fabric with an embroidered MC Logo.</p>
            <h2 class="price">₱499</h2> 
          </div>
        </div>

        <div class="merch-card">
          <div class="image">
            <img src="@/assets/image/merchImg/Oversizetee.jpg" alt="MC Oversized Tee">
          </div>
          <div class="text">
            <h1>MC Oversized Tee</h1>
            <p>Crafted from premium CVC cotton with a relaxed oversized fit.</p>
            <h2 class="price">₱499</h2> 
          </div>
        </div>

        <div class="merch-card">
          <div class="image">
            <img src="@/assets/image/merchImg/Mcsocks.jpg" alt="MC Socks">
          </div>
          <div class="text">
            <h1>MC Socks</h1>
            <p>Premium socks designed for all-day comfort, featuring a soft, breathable fabric.</p>
            <h2 class="price">₱199</h2> 
          </div>
        </div>

        <div class="merch-card">
          <div class="image">
            <img src="@/assets/image/merchImg/cap.jpg" alt="Runshirt">
          </div>
          <div class="text">
            <h1>MC Uncrushable Cap</h1>
            <p>Built for durability, comfort, and everyday wear.</p>
            <h2 class="price">₱799</h2> 
          </div>
        </div>

        <div class="merch-card">
          <div class="image">
            <img src="@/assets/image/merchImg/hoodie.jpg" alt="MC Mesh Shorts">
          </div>
          <div class="text">
            <h1>MC Hoodie</h1>
            <p>Crafted from premium 320 GSM cotton fleece for superior comfort, warmth, and durability.</p>
            <h2 class="price">₱899</h2> 
          </div>
        </div>

        <div class="merch-card">
          <div class="image">
            <img src="@/assets/image/merchImg/croptop.jpg" alt="MC Oversized Tee">
          </div>
          <div class="text">
            <h1>MC Crop top</h1>
            <p>Crafted from lightweight 130 GSM ripstop fabric with sublimation printing, designed for comfort.</p>
            <h2 class="price">₱499</h2> 
          </div>
        </div>

        <div class="merch-card">
          <div class="image">
            <img src="@/assets/image/merchImg/sleeves.jpg" alt="muscle tee">
          </div>
          <div class="text">
            <h1>MC Muscle sleeve</h1>
            <p>Crafted from lightweight 130 GSM ripstop fabric with a sleeveless fit for comfort.</p>
            <h2 class="price">₱499</h2> 
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.merch {
  min-height: 100vh; 
  width: 100%; 
  background-color: #1A1A1A; 
}

.container {
  min-height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start; 
  flex-direction: column;
  background-color: #1A1A1A;
  padding: 120px 25px 40px; 
  box-sizing: border-box; 
}

.grid-container {
  width: 100%;
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 0.5fr 0.5fr; 
  align-items: center; 
  background-color: #1A1A1A;
  gap: 20px; 
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center; 
  margin-bottom: 40px; 
  gap: 10px; 
}

.title h2 {
  color: red;
}

.title p {
  color: grey;
}

.merch-card {
  display: flex;
  width: 100%; 
  min-height: 100%;
  background-color: #080808; 
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 12px; 
  border-radius: 12px; 
  border: 1px solid #383838; 
  box-sizing: border-box;  
}

.image {
  width: 100%; 
  height: 190px; 
  display: flex; 
  justify-content: center;
  align-items: center;
}

.merch-card img {
  max-height: 100%; 
  max-width: 100%; 
}

.text {
  width: 100%;
  text-align: center;
  padding: 12px 4px 4px; 
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  gap: 8px; 
}

.merch-card h1 {
  font-size: 15px;
  text-align: center;
}

.merch-card p {
  font-size: 11px; 
  text-align: center;
  color: grey; 
  line-height: 1.4;
}

.merch-card .price {
  font-size: 16px; 
  color: crimson; 
  margin-top: 4px; 
}

h1 {
  color: white;
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr 1fr; 
  }
}

</style>
