<template>
  <div class="header">
    <div class="nav">
      <div class="slide">
      <div class="app">
        <div class="slide-menu" :class="{ open: isMenuOpen }">
      <div class="slide-menu-header">
        <router-link to="/" class="logo" style="font-size: 25px;">Keen-Education</router-link>
        <span class="close-btn" @click="toggleMenu">×</span>
      </div>
      <ul class="slide-menu-items">
        <li>
          <router-link to="/" :class="{ active: isActive('/') }">Home</router-link>
        </li>
        <li>
          <router-link to="/about" :class="{ active: isActive('/about') }">About</router-link>
        </li>
        <li>
          <router-link to="/all-emp" :class="{ active: isActive('/all-emp') }">AllEmp</router-link>
        </li>
        <li>
          <router-link to="/resources" :class="{ active: isActive('/resources') }">Resources</router-link>
        </li>
      </ul>
    </div>
        <div class="app-content">
          <router-view />
        </div>
        <button class="toggle" @click="toggleMenu">☰</button>
  </div>
      </div>
      <img :src="require('@/assets/1.png')" alt="keen-education" class="hover-image">
      <div class="links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact-us">Contact</router-link>
        <router-link to="/all-emp">AllEmp</router-link>
      </div>
        <div class="dropdown">
          <router-link to="/resources">Resources</router-link>
          <div class="dropdown-content">
            <router-link to="/DOCKER">Docker</router-link>
            <router-link to="/PODMAN">Podman</router-link>
            <router-link to="/HTML">HTML</router-link>
            <router-link to="/CSS">CSS</router-link>
          </div>
      
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderPage',
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
     toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      isActive(route) {
      return this.$route.path === route;
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap');

.nav .logo {
  margin: 0 3px;
  font-size: 35px;
  font-weight: 500;
  color: black;
  transition: background-color 0.3s;
}

.nav a {
  transition: background-color 0.3s;
}

.nav a:after {
  transition: 0.5s;
}

.nav {
  display: flex;
  overflow-x: auto;
  background: black;
  border-radius: 9px;
  padding: 7px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4);
  align-items: center;
  justify-content: center;
}

.nav .a {
  color: #fff;
  text-decoration: none;
}

.nav .logo {
  margin: 0 3px;
  font-size: 35px;
  font-weight: 500;
  transition: background-color 0.3s;
}

.nav a {
  display: inline-block;
  list-style: none;
  font-size: 2rem;
  margin: 0 15px;
  cursor: pointer;
  position: relative;
  color: black;
  padding: 5px 16px;
  text-align: center;
  font-size: 17px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.nav a:after {
  content: '';
  width: 0;
  height: 3px;
  background: #2192ff;
  position: absolute;
  left: 0;
  bottom: -10px;
  transition: 0.5s;
  border-radius: 50px;
}

.nav a:hover::after {
  width: 100%;
}

.nav a:hover {
  background-color: aliceblue;
  color: black;
  border-radius: 50px;
}

.nav .logo:hover {
  background-color: aliceblue;
  transform: translateY(-5px);
}

.nav a.active {
  background-color: aliceblue;
  color: black;
  border-radius: 50px;
}

.slide-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 100vh;
    background-color: #fff;
    z-index: 1000;
    transition: transform 0.3s ease-in-out;
    transform: translateX(-250px);
  }
  
  .slide-menu.open {
    transform: translateX(0);
  }
  
  .slide-menu-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #eee;
  }
  
  .logo {
    font-size: 24px;
    font-weight: bold;
    color: black;
  }
  

  .close-btn {
    cursor: pointer;
    font-size: 20px;
  }
  
  .slide-menu-items {
    list-style: none;
    margin: 0;
    padding: 0;
    /* color: #000; */
  }
  
  .slide-menu-item {
    padding: 10px 20px;
    cursor: pointer;
  }
  
  .slide-menu-item a {
    text-decoration: none;
    color: #000;
  }
  
  .slide-menu-item a:hover {
    color: #333;
  }

* {
  margin: 10px;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.hover-image {
  width: 80px;
  height: 70px;
}

.nav {
  display: flex;
  /* overflow-x: auto; */
  background: black;
  border-radius: 9px;
  padding: 4px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4);
  align-items: center;
  justify-content: center;
}

.nav .a {
  color: #fff;
  text-decoration: none;
}

.nav .logo {
  margin: 0 3px;
  font-size: 35px;
  font-weight: 500;
  transition: background-color 0.3s;
}

.nav a{
  display: inline-block;
  list-style: none;
  font-size: 2rem;
  margin: 0 15px;
  cursor: pointer;
  position: relative;
  color: white;
  padding: 5px 16px;
  text-align: center;
  font-size: 17px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.nav a:after {
  content: '';
  width: 0;
  height: 3px;
  background: #2192ff;
  position: absolute;
  left: 0;
  bottom: -10px;
  transition: 0.5s;
  border-radius: 50px;
}

.nav a:hover::after {
  width: 100%;
}

.nav a:hover {
  background-color: aliceblue;
  color: black;
  border-radius: 50px;
}

.nav .logo:hover {
  background-color: aliceblue;
  transform: translateY(-5px);
}

.nav a.active {
  background-color: aliceblue;
  color: black;
  border-radius: 50px;
}
/* .header {
  background-color: #333;
  color: white;
  padding: 10px;
} */

.nav {
  display: flex;
  justify-content:center;
}


.links {
  /* display: flex; */
  position: relative;
  display: inline-block;
}

.router-link {
  /* color: white; */
  text-decoration: none;
  
}



/* Dropdown styles */
.dropdown {
  position: static;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #333;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* .dropdown-content a:hover {
  background-color: #555;
} */

.dropdown:hover .dropdown-content {
  display: block;
}

.slide a {
 color: #000;
 box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4);
 border-radius: 50px;
 margin-top: 5px;
}

.slide a:hover {
  transform: translateY(-5px);
}

.toggle {
  position: absolute;
  left: 5%; /* Adjust the left position based on your design */
  top: 3%;  /* Adjust the top position based on your design */
  width: 40px; /* Adjust the width based on your design */
  height: 40px; /* Adjust the height based on your design */
}

/* Example media query for responsiveness */
@media (max-width: 500px) {
  .toggle {
    /* Adjust styles for smaller screens */
    left: 2%;
    top: 1%;
    width: 4vw;
    height: 10vh;
  }
}


</style>
