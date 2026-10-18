
<template>
  <section class="introduction" id="intro">
    <div class="container">
      <div class="image">
        <img src="@/assets/image/merchImg/gymImg.jpg" alt="Strength training at the gym"/>
      </div>

      <div class="text">
        <p class="tag">ABOUT OUR GYM</p>

        <h2>MORE THAN JUST A GYM</h2>

        <p class="description">
          Metal Core is built around strength, discipline, and
          consistency. We believe that progress comes from
          showing up, working hard, and staying committed to
          your goals.
        </p>

        <p class="description">
          Whether you are starting your fitness journey or
          improving your strength, Metal Core is a place to
          challenge yourself and keep moving forward.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.introduction {
  height: 100vh;
  max-width: 100vw;
  display: flex;
  align-items: center;
  padding: 80px 6%;
  background-color: black;
  color: white;
}

.container {
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 50px;
  background-color: #1A1A1A;
}

.image img {
  width: 100%;
  height: 420px;
  border-radius: 10px;
}

.tag {
  margin-bottom: 15px;
  color: red;
  font-size: 14px;
  font-weight: bold;
}

h2 {
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
  .introduction {
    padding: 70px 6%;
  }

  .container {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .text{
    text-align: center;
  }

  .image img {
    height: 300px;
  }

  h2 {
    font-size: 30px;
  }
}
</style>
