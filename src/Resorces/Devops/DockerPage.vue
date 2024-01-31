<template>
    <div class="header">
    <HeaderPage />
</div>
    <div class="page-header">
      <h1>Docker</h1>
      <div class="section-navigation">
      <button class="b1" @click="showSection('videos')">Videos</button>
      <button class="b1" @click="showSection('links')">Links</button>
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
        <li><a href="https://en.wikipedia.org/wiki/Docker_(software)" target="_blank">Wikipedia</a></li>
        <li><a href="https://www.docker.com/" target="_blank">Docker</a></li>
        <li><a href="https://opensource.com/resources/what-docker" target="_blank">OpenSource</a></li>
        <li><a href="https://aws.amazon.com/docker/" target="_blank">AWS</a></li>
        <li><a href="https://www.ibm.com/topics/docker" target="_blank">IBM</a></li>
        <li><a href="https://www.techtarget.com/searchitoperations/definition/Docker" target="_blank">Tech Target</a></li>
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
    name: 'DockerPage',
  
      components: {
          HeaderPage,
      },
    data() {
      return {
      
        videos: [
          { src: "https://www.youtube.com/embed/31k6AtW-b3Y?si=wurSJhdlmYgmG-bn" },
          { src: "https://www.youtube.com/embed/WNUCAPKa44Y?si=JLbe8j_v0GFCLs2A" },
          { src: "https://www.youtube.com/embed/pTFZFxd4hOI?si=wBI44mbmZ5LWM7gL" },
          { src: "https://www.youtube.com/embed/pg19Z8LL06w?si=3nVPPO1-wm_ffs0L" },
          { src: "https://www.youtube.com/embed/OhnTMWmfTBE?si=vqPRITIDeqIgWDld" },
          { src: "https://www.youtube.com/embed/3c-iBn73dDE?si=WTIzzcKDg9iVuCeq" },
          { src: "https://www.youtube.com/embed/RqTEHSBrYFw?si=QkydBzGPt9MNb0u5" },
          { src: "https://www.youtube.com/embed/zJ6WbK9zFpI?si=NN2PY7pzTqtOzz1n" },
          { src: "https://www.youtube.com/embed/fqMOX6JJhGo?si=mfNbIfsdfSK_KbYv" },
          { src: "https://www.youtube.com/embed/X3Wtjwu0vBI?si=-0fIelFCQON8cSpi" },
          { src: "https://www.youtube.com/embed/0SS6bJczlgs?si=UsLn00CcOgyJ7HJ2" },
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

  /* body {
    margin: 0;
    font-family: 'Arial', sans-serif;
  } */
  
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
  