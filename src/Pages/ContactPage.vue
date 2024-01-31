<template>
    <HeaderPage />
  <div class="page-content">
        <h1 style="text-align: center;">Contact Us</h1>
        <!-- <p style="text-align: center;">Feel free to reach out to:</p> -->

        <!-- <form action="sendEmail.php" method="post"> -->
          <form @submit.prevent="submit" method="post">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
        
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
        
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
        
            <button type="submit">Submit</button>
        </form>
        
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
// import axios from 'axios';

export default {
  name: 'ContactPage',

  components: {
    HeaderPage,
  },
  methods: {
    async submit() {
  try {
    const response = await this.$axios.post('https://localhost:8000/sendEmail.php', {
      name: this.name,
      email: this.email,
      message: this.message,
    });

    if (response.data && response.data.success) {
          // Clear form fields or show success message
          this.name = '';
          this.email = '';
          this.message = '';
          console.log('Email sent successfully');
        } else {
          console.error('Error sending email:', response.data.message || 'Unknown error');
          // Handle error, show error message, etc.
        }
      } catch (error) {
        console.error('Error sending email:', error);
        // Handle error, show error message, etc.
      }
},
  },
};
</script>


<style scoped>
.page-content {
    max-width: 500px;
    margin: 20px auto;
    padding: 200px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

form {
    display: flex;
    flex-direction: column;
}

label {
    margin-bottom: 5px;
}

input,
textarea {
    margin-bottom: 10px;
    padding: 8px;
}

button {
    padding: 10px;
    background-color: #333;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

button:hover {
    background-color: #555;
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
  .input-field {
    padding: 2px 5px;
    border: 1px solid ;
    border-radius: 5px;
    width: 150px;
    color: white; 
  }
  
  .input-field::placeholder {
    color: white;  
   } 
  
  
  
  .submit-button {
    background-color: #333;
    color: white;
    margin: 5px;
    padding: 2px 5px;
    font-size: 1em;
    border: 1px solid ;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .submit-button:hover {
    background-color: #007BFF;
    border: #007BFF;
  }
  
  
  .email-response {
    margin-top: 10px;
    color: green; 
  }
  

</style>