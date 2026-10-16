<template>
  <section class="navbar">
    <div class="logo">
      <a @click="scrollToSection('home')">
        <img src="@/assets/image/mclogo.png" alt="Metal Core Logo" /></a>
    </div>

    <div class="menu">
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/merch">Merch</RouterLink>
      <RouterLink to="/equipment">Equipment</RouterLink>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const scrollToSection = async (id) => {
  if (router.currentRoute.value.path !== '/') {
    await router.push('/')
  }

  setTimeout(() => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    })
  })
}
</script>

<style scoped>
.navbar {
  position: fixed;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(105, 105, 105, 0.8);
  color: white;
  border-bottom: 1px solid dimgray;
  gap: 30px;
}
.logo {
  img {
  width: 100px;
  height: 100px;
  }
}


.menu {
  display: flex;
  align-items: center;
  gap: 25px;
}

.menu a {
  color: white;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
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