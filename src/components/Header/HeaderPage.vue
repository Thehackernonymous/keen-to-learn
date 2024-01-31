<template>
  <div class="header">
    <div class="nav">
      <div class="app">
        <div class="app-content">
          <router-view />
        </div>
      </div>

      <div class="links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact-us">Contact</router-link>
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
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap');

* {
  margin: 10px;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
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
  position: relative;
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
</style>
