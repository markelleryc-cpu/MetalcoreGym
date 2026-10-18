<template>
  <section class="introduction" id="intro">
    <div class="container">

      
      <div class="image-gallery">

        
        <div class="main-image">
          <img
            src="@/assets/image/merchImg/gymImg.jpg"
            alt="Gym interior"
          />
        </div>


        <div class="small-image">
          <img
            src="@/assets/image/bench.webp"
            alt="Gym equipment"
          />
        </div>

        <div class="small-image">
          <img
            src="@/assets/image/back.webp"
            alt="Gym training area"
          />
        </div>

      </div>

  
      <div class="text">
        <h2>ABOUT OUR GYM</h2>

        <h1>MORE THAN JUST A GYM</h1>

        <p class="description">
          Metal Core is built around strength, discipline, and consistency.
          We believe that progress comes from showing up, working hard, and
          staying committed to your goals.
        </p>

        <p class="description">
          Whether you are starting your fitness journey or improving your
          strength, Metal Core is a place to challenge yourself and keep
          moving forward.
        </p>
      </div>

    </div>
  </section>
</template>

<style scoped>
.introduction {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #1A1A1A;
  color: white;
  box-sizing: border-box;
}

.container {
  width: 100%;
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  align-items: center;
  gap: 50px;
}

.image-gallery {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 12px;
  height: 400px;
  min-width: 0;
  margin-left: 20px;
}

.main-image {
  grid-row: span 2;
}

.main-image img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.small-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

h2 {
  margin-bottom: 15px;
  color: red;
  font-size: 16px;
  font-weight: bold;
}

h1 {
  margin-bottom: 25px;
  font-size: 38px;
}

.description {
  margin-bottom: 20px;
  color: lightgray;
  font-size: 16px;
  line-height: 1.5;
}


@media (max-width: 768px) {

  .container {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .image-gallery {
    height: 320px;
    gap: 8px;
    width: 90%;
    margin-left: 20px;
  }

  .text {
    text-align: center;
  }

  h2 {
    font-size: 30px;
  }
}
</style>