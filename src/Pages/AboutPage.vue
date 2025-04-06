<template>
    <HeaderPage />
    <div class="page-content">
        <h1>About Us</h1>
        <p>Welcome to our website! We are dedicated to providing valuable content on various topics. In this portal you can learn about various topics.</p>
        <p>Learning is the key to success.</p>
    </div>
    <section class="footer">
        <div class="footer-row">
          <div class="footer-col">
            <h4>Info</h4>
            <ul class="links">
                <li><a href="/contact-us">Contact Us</a></li>
              <li><a href="/about">About Us</a></li>
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
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRnZFHkDLxQRgwdqTSJxXrlKhxLjTHStdhwdQVZZJflQJxLHXHkkhDRhQfRLzLnFnWQWzZL">
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
import HeaderPage from '@/components/Header/HeaderPage.vue';

export default {
  name: 'AboutPage',

  components: {
    HeaderPage,
  },
}

</script>

<style scoped>
.page-content {
    max-width: 800px;
    margin: 20px auto;
    padding: 200px;
    border: 1px solid #ddd;
    border-radius: 5px;
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
