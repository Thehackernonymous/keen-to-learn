<template>
    <HeaderPage />
    <div class="page-header">
      <h1>HTML</h1>
      <div class="section-navigation">
        <button @click="showSection('videos')">Videos</button>
        <button @click="showSection('links')">Links</button>
      </div>
    </div>
  
    <div class="section" id="videos" v-show="showVideos">
      <h2>Videos</h2>
      <div class="video-container">
        <iframe
          v-for="(video, index) in videos"
          :key="index"
          :src="video.src"
          width="560"
          height="315"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  
    <div class="section1" id="links" v-show="showLinks">
      <h2>Links</h2>
      <ol>
          <li><a href="https://en.wikipedia.org/wiki/HTML" target="_blank">Wikipedia</a></li>
          <li><a href="https://www.w3schools.com/html/" target="_blank">W3Schools</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">Mozilla</a></li>
          <li><a href="https://html.com/" target="_blank">HTML</a></li>
          <li><a href="https://www.geeksforgeeks.org/html-tutorial/" target="_blank">geeksforgeeks</a></li>
          <li><a href="https://www.tutorialspoint.com/html/index.htm" target="_blank">Tutorial Point</a></li>
        </ol>
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
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://www.gmail.com/">
              <i class="far fa-envelope"></i>
            </a>
              <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">
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
import HeaderPage from '@/components/Header/HeaderPage.vue';
import { ref } from 'vue';

export default{
  name: 'HtmlPage',

    components: {
        HeaderPage,
    },
    data() {
      return {
        videos: [
          { src: "https://www.youtube.com/embed/HcOc7P5BMi4?si=csF39_sPcfa9o6FZ" },
          { src: "https://www.youtube.com/embed/qz0aGYrrlhU?si=lEoiF_cKmelxMA1V" },
          { src: "https://www.youtube.com/embed/BsDoLVMnmZs?si=f9DvS9M2tyz9EOaG" },
          { src: "https://www.youtube.com/embed/iG2jotQo9NI?si=RPJ_EzqHCIkgAtbx" },
          { src: "https://www.youtube.com/embed/k7ELO356Npo?si=0PTTiLmXhDtWOEdG" },
          { src: "https://www.youtube.com/embed/5ccq_nLHneE?si=Bu0jYwTd6FuqB4iG" },
          { src: "https://www.youtube.com/embed/rklidcZ-aLU?si=227w1b_G1XGegH7g" },
          { src: "https://www.youtube.com/embed/byTOONVJn-k?si=4RMCRkUbDcsnJAz8" },
        ],
        showVideos: ref(true),
      showLinks: ref(false),
      };
    },
    methods: {
      showSection(sectionId) {
        this.showVideos = sectionId === 'videos';
      this.showLinks = sectionId === 'links';
        // this.$el.querySelectorAll(".section").forEach((section) => {
        //   section.style.display = section.id === sectionId ? "block" : "none";
        // });
      },
    },
  };
  </script>
  
  <style scoped>
   .section1{
    height: 80vh;
  }

ol li a {
    text-decoration: none;
    color: black;
}

.header {
    position: sticky;
}
  
  .page-header {
    text-align: center;
  }
  
  .section-navigation {
    display: flex;
    justify-content: center;
    padding: 5px;
    margin: 15px;
  }
  
  button {
    box-sizing: border-box;
    height: 45px;
    width: 100px;
    font-size: 20px;
    margin: 5px;
    border-radius: 8px;
  }
  
  .section {
    margin: 15px;
  }
  
  .section h2 {
    border-bottom: 2px solid #333;
    /* text-decoration: dotted; */
    /* padding-bottom: 5px; */
    /* margin-bottom: 10px; */
    text-align: center;
  }
  
  
  @media only screen and (min-width: 600px) {
    #videos,
    #links {
      flex-direction: row;
    }
    .video-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    align-self: start;;
    }
    iframe {
      width: 560;
      margin-bottom: 10px;
    }
  }
  
  #videos {
    border: 2px solid black;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    overflow-x: auto;
  }
  
  #links {
    border: 2px solid black;
    border-radius: 5px;
    width: auto;
    /* display: flex; */
    /* flex-wrap: wrap; */
    /* justify-content: space-around; */
    overflow-x: auto;
    
  }

  .section1 h2 {
  /* border-bottom: 2px solid #333; */
  text-decoration: underline;
  /* text-underline-position: calc(100%-90%); */
  /* padding-bottom: 5px; */
  /* margin-bottom: 10px; */
  
  /* margin: 2px; */
  text-align: center;
  /* border-bottom-width: 50px; */

}
  
  .size {
    height: 100vh;
  }

  .footer {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin-top: auto ;
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
    margin: 10px 5px ;
    font-size: 24px;
    color: #ccc;
    text-decoration: none;
  }
  
  .icons i:hover {
    color: #007BFF;
  }
  
  </style>
  