
<template>
  <section class="navbar">
    <div class="logo">
      <a @click="scrollToSection('home')">
        <img src="@/assets/image/merchImg/mclogo.png" alt="Metal Core Logo" />
      </a>
    </div>

    <div class="menu">

      <RouterLink to="/coach">Coaches</RouterLink>
      <RouterLink to="/equipment">Equipment</RouterLink>

      <div class="dropdown">
        <RouterLink to="/merch">Merch ▿</RouterLink>

        <div class="submenu-merch">
          <a @click="scrollToMerchSection('merch')">
            Official Merchandise
          </a>
          <a @click="scrollToMerchSection('bundle')">
            Bundles & Packages
          </a>
        </div>
      </div>

      <RouterLink to="/membership">Membership</RouterLink>
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

const scrollToMerchSection = async (id) => {
  if (router.currentRoute.value.path !== '/merch') {
    await router.push('/merch')
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
  z-index: 1000;
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

.dropdown {
  position: relative;
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

.submenu-merch {
  display: none;
  position: absolute;
  min-width: 200px;
  flex-direction: column;
  background-color: #292929;
  border: 1px solid #505050;
  border-radius: 5px;
  padding: 6px 0;
}

.dropdown:hover .submenu-merch {
  display: flex;
}

.submenu-merch a {
  display: block;
  padding: 12px 16px;
  font-size: 14px;
  text-transform: none;
  white-space: nowrap;
  cursor: pointer;
}

.submenu-merch a:hover {
  background-color: #3b3b3b;
  color: red;
}


@media (max-width: 768px) {
    .navbar {
        height: 100px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5px;
        padding: 10px;
    }

    .logo img {
        width: 80px;
        height: 80px;
    }

    .menu {
        width: 100%;
        justify-content: center;
        gap: 12px;
        flex-wrap: wrap  
    }

    .menu a {
        font-size: 14px;
    }
}

</style>
