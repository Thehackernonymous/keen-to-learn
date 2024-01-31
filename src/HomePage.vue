<template>
  <HeaderPage />
  <div class="container">
    <div class="search-container">
      <input type="text" list="searchResults" id="searchInput" placeholder="Search Any Topic...">
      <datalist id="searchResults">
        <option value="DOCKER"></option>
        <option value="PODMAN"></option>
        <option value="HTML"></option>
        <option value="CSS"></option>
      </datalist>
      <button class="search" @click="search">Search</button>
    </div>
    <div id="searchResults"></div>
  </div>
  <section class="footer">
      <div class="footer-row">
        <div class="footer-col">
          <h4>Info</h4>
          <ul class="links">
            <li><a href="/contact-us">Contact Us</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Info.</h4>
          <p>
            Education-Portal
          </p>
          <div class="icons">
            <a href="https://www.linkedin.com/in/rahul-jaiswal-66491122a/" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRnZFHkDLxQRgwdqTSJxXrlKhxLjTHStdhwdQVZZJflQJxLHXHkkhDRhQfRLzLnFnWQWzZL" target="_blank" rel="noopener noreferrer">
            <i class="far fa-envelope"></i>
          </a>
            <a href="https://www.github.com/Thehackernonymous" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github"></i>
            </a>
          </div>
      </div>
      <div class="footer-text">
      <p>© Created by Rahul Jaiswal</p>
      </div>
    </div>
    </section>
</template>

<script>
import HeaderPage from "@/components/Header/HeaderPage.vue";
// import { ref } from 'vue'; 

export default {
  name: 'HomePage',

  components: {
    HeaderPage,
  },
  methods: {
    search() {
      const searchInput = document.getElementById('searchInput').value.toLowerCase();

      // Implement actual search and redirection logic here based on the search input
      // For simplicity, this example uses hardcoded topics
      if (searchInput === 'docker') {
        this.$router.push({ name: 'DockerPage' }); // Use the router to navigate
      } else if (searchInput === 'podman') {
        this.$router.push({ name: 'PodmanPage' });
      } else if (searchInput === 'css') {
        this.$router.push({ name: 'CssPage' });
      } else if (searchInput === 'html') {
        this.$router.push({ name: 'HtmlPage' });
      } else if (searchInput === 'JavaScript') {
        this.$router.push({ name: 'JsPage' });
      } else if (searchInput === 'MySql') {
        this.$router.push({ name: 'MySql' });
      } else if (searchInput === 'PostgreSql') {
        this.$router.push({ name: 'Postgres' });
      } else if (searchInput === 'MongoDB') {
        this.$router.push({ name: 'MongoDB' });
      } else if (searchInput === 'NodeJs') {
        this.$router.push({ name: 'NodePage' });
      } else {
        alert('No results found');
      }
    },
  },
};
</script>

<style scoped>
.container {
  height: 80vh; /* Adjust the height to your desired size */
  display: flex;
  flex-direction: column;
  max-width: 2000px;
}

.search-container {
  display: flex;
  justify-content: center;
  margin: 300px; /* Adjusted margin */
}

#searchInput {
  margin-right: 10px;
  padding: 10px 30px;
}

/* button {
  padding: 10px 20px;
  margin: 5px;
  background-color: #333;
  color: white;
  border: 2px solid white;
  cursor: pointer;
  border-radius: 5px;
} */

button:hover {
  background-color: #555;
}

.search{
  background-color: #333;
  color: white;
  width: 150px;
  justify-content: center;
  cursor: pointer;
  border-radius: 5px;
}


.footer {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: auto;
  text-align: center;
  background-color: #333;
  color: white;
  bottom: 0;
  width: auto;
  border-top: 1px solid #ccc;
}

.footer-row {
  display: flex;
  flex-wrap: wrap;
}

.footer-col {
  flex: 1;
  padding: 20px;
}

.footer-col h4 {
  margin-bottom: 15px;
  font-size: 18px;
}

.footer-text {
  display: flex;
  justify-content: center;
  margin-top: auto;
  text-align: center;
  font-size: 14px;
  padding: 5px;
  background-color: #333;
  color: white;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #ccc;
}

.links li {
  list-style: none;
  margin-bottom: 10px;
}

.links a {
  text-decoration: none;
  color: white;
  font-size: 14px;
}

.links a:hover {
  color: #007BFF;
}

.icons i {
  margin: 10px 5px;
  font-size: 24px;
  color: #ccc;
  /* border: 2px solid red; */
  /* background-color: white; */
  text-decoration: none;
  /* width: 500px; */
}

.icons i:hover {
  color: #007BFF;
}


</style>
