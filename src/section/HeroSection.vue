<template>
    <section class = "hero">
        <div class = "container">
            <div class = "image">
                <img src = "@/assets/image/mclogo.jpg" alt = "Gym Logo">
            </div>
            <div class = "text">
                <h1>Metal Core</h1>
                <h2>Fitness Gym</h2>
            </div>
        </div>
    </section>
</template>

<style scoped>
.hero {
  width: 100%;
  min-height: 100vh;
  scroll-margin-top: 100px;
}

.container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
}

.image img {
  width: 100px;
  height: auto;
}
 
</style>