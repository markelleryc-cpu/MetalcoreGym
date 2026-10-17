<template>
  <section class="hero" id="home">
    <div class="container">
      <div class="text">
        <h1>Metal Core</h1>
        <h2>Fitness Gym</h2>
        <p class="description">
          Everything you need to train better, grow stronger, and Be Limitless, without the premium price.
        </p>

        <button>Join Now</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  height: 100vh;
  max-width: 100vw;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 6% 40px;
  background-color: #1A1A1A;
  color: whitesmoke;
}

.container {
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1A1A1A;
}

.text {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

h1 {
  font-size: 60px;
}

h2 {
  margin-bottom: 15px;
  font-size: 35px;
}

.description {
  max-width: 500px;
  margin-bottom: 20px;
  color: lightgray;
  font-size: 16px;
  line-height: 1.5;
}

button {
  padding: 12px 30px;
  background-color: crimson;
  color: white;
  border: none;
  cursor: pointer;
}

@media (max-width: 768px) {
  h1 {
    font-size: 38px;
  }

  h2 {
    font-size: 21px;
  }
}
</style>
```