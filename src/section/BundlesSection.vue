<template>
  <section class="bundle" id ="bundle">
    <div class="container">
      <div class="title">
        <h2>Gear Up</h2>
        <h1>Bundles & Packages</h1>
      </div>
      <div class="grid-container">
        <div class="bundle-card">
          <div class="image">
            <img src="@/assets/image/merchImg/Elitebundle.jpg" alt="Runshirt">
          </div>
          <div class="text">
            <h1>Elite Bundle</h1>
            <p>Hoodie+ Uncrushable Cap + Free Stickers</p>
            <h2 class="price">₱1,499</h2> 
          </div>
        </div>

        <div class="bundle-card">
          <div class="image">
            <img src="@/assets/image/merchImg/Premiumbundle.jpg" alt="MC Mesh Shorts">
          </div>
          <div class="text">
            <h1>Premium Bundle</h1>
            <p>Muscle sleeves or Crop top + Socks + Uncrushable Cap+ Free Stickers</p>
            <h2 class="price">₱1,199</h2> 
          </div>
        </div>

        <div class="bundle-card">
          <div class="image">
            <img src="@/assets/image/merchImg/Trainingbundle.jpg" alt="MC Oversized Tee">
          </div>
          <div class="text">
            <h1>Training Bundle</h1>
            <p>Muscle sleeves+ Mesh Shorts+ Socks + Free Stickers</p>
            <h2 class="price">₱999</h2> 
          </div>
        </div>

        <div class="bundle-card">
          <div class="image">
            <img src="@/assets/image/merchImg/Essentialbundle.jpg" alt="MC Socks">
          </div>
          <div class="text">
            <h1>Essential Bundle</h1>
            <p>Oversized Shirt + Mesh Shorts + Free Stickers</p>
            <h2 class="price">₱899</h2> 
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bundle {
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

.bundle-card {
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

.bundle-card img {
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

.bundle-card h1 {
  font-size: 15px;
  text-align: center;
}

.bundle-card p {
  font-size: 11px;
  text-align: center;
  color: grey;
  line-height: 1.4;
}

.bundle-card .price {
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
