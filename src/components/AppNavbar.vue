<template>
  <nav class="navbar">
    <div class="logo">
      <img src="@/assets/image/mclogo.jpg" alt="Metal Core Logo" />
    </div>

    <div class="menu">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/merch">Merch</RouterLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.navbar {
  position: fixed;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: dimgray;
  color: white;
  border-bottom: 1px solid dimgray;
}
.logo {
  width: 60px;
  height: 60px;

}

.logo img {
  width: 50px;
  height: 50px;
  
}


.menu {
  display: flex;
  align-items: center;
  gap: 25px;
}

.menu a {
  color: white;
  text-decoration: none;
  font-size: 16px;
}

.menu a.router-link-active {
  color: red;
}



@media (max-width: 768px) {
  .navbar {
    height: 90px;
    padding: 10px 4%;
  }

  .logo {
    gap: 8px;
  }

  .logo img {
    width: 40px;
    height: 40px;
  }
  .menu {
    gap: 12px;
  }

  .menu a {
    font-size: 14px;
  }
}
</style>