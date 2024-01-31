<template>
  <HeaderPage />
  <div class="container">
    <button @click="toggleQuestionForm" class="new-question-btn">New Question</button>

    <div v-if="showQuestionForm" class="modal" id="form" @click="closeModal">
      <div class="modal-content">
        <span class="close" @click="toggleQuestionForm">&times;</span>
        <div class="input">
          Question:
          <textarea v-model="question" placeholder="Type your question..." class="form-input"></textarea>
          Answer:
          <textarea v-model="answer" placeholder="Type your answer..." class="form-input"></textarea>
          <div class="save">
            <button @click="saveQuestion" class="save-btn" id="button1">Save</button>
            <button @click="toggleQuestionForm" class="cancel-btn" id="button1">Cancel</button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="questions.length" class="blog-cards">
      <div v-for="(qa, index) in questions" :key="index" @click="openQA(index)" class="blog-card">
        <div class="blog-card-header">
          <h3>{{ index + 1 }}. {{ qa.question }}</h3>
          <div class="blog-card-buttons">
            <button @click="openQA(index)" class="edit-btn">Edit</button>
            <button @click="removeQuestion(questions['key'])" class="delete-btn">Remove</button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="qaModal.show" class="modal" id="qaModal" @click="closeQAModal">
      <div class="modal-content qa-modal-content">
        <span class="close" @click="closeQAModal">&times;</span>
        <h2>{{ questions[qaModal.index]?.question }}</h2>
        <p>{{ questions[qaModal.index]?.answer }}</p>
      </div>
    </div>

    <!-- Display Question & Answer Page -->
    <div v-if="selectedQuestion !== null" class="qa-page">
      <h2>{{ questions[selectedQuestion].question }}</h2>
      <p>{{ questions[selectedQuestion].answer }}</p>
      <button @click="selectedQuestion = null" class="back-btn">Back</button>
    </div>
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
        <p>Education-Portal</p>
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
  import { ref, onMounted } from 'vue';
  import { getDatabase, ref as dbRef, push, onValue, remove } from 'firebase/database';
  
  export default {
    components: { HeaderPage },
  
    setup() {
      const db = getDatabase();
      const questionsRef = dbRef(db, 'questions');
  
      const showQuestionForm = ref(false);
      const question = ref('');
      const answer = ref('');
      const questions = ref([]);
      const selectedQuestion = ref(null);
  
      const qaModal = ref({ show: false, index: null });
  
      const toggleQuestionForm = () => {
        showQuestionForm.value = !showQuestionForm.value;
        if (!showQuestionForm.value) {
          question.value = '';
          answer.value = '';
        }
      };
  
      const closeModal = (event) => {
        const isFormModal = event.target.closest('.modal-content');
        if (!isFormModal) {
          toggleQuestionForm();
        }
      };
  
      const saveQuestion = () => {
        if (question.value.trim() && answer.value.trim()) {
          push(questionsRef, {
            question: question.value.trim(),
            answer: answer.value.trim(),
          });
          toggleQuestionForm();
        } else {
          alert('Please fill out both question and answer fields.');
        }
      };
  
      const openQA = (index) => {
        selectedQuestion.value = index;
      };
  
      const closeQAModal = (event) => {
        event.stopPropagation();
        qaModal.value = { show: false, index: null };
      };
  
      const removeQuestion = async (key) => {
  const confirmDelete = window.confirm('Are you sure you want to delete this question?');
  if (confirmDelete) {
    try {
      const questionToDeleteRef = dbRef(questionsRef, key);
      await remove(questionToDeleteRef);
    } catch (error) {
      console.error('Error deleting question:', error);
    }
  }
};

  
      const openEditForm = (index) => {
        closeQAModal();
        question.value = questions[index]?.question || '';
        answer.value = questions[index]?.answer || '';
        selectedQuestion.value = index;
        showQuestionForm.value = true;
      };
  
      const loadFromDatabase = () => {
        onValue(questionsRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            questions.value = Object.values(data);
          }
        });
      };
  
      onMounted(() => {
        loadFromDatabase();
      });
  
      return {
        showQuestionForm,
        question,
        answer,
        questions,
        selectedQuestion,
        toggleQuestionForm,
        saveQuestion,
        openQA,
        closeModal,
        qaModal,
        closeQAModal,
        removeQuestion,
        openEditForm,
      };
    },
  };
  </script>
  

  <style scoped>
  .container {
    height: 100vh;
    /* display: flex; */
  /* flex-direction: column; */
  align-items: center;
  /* padding: 20px; */
  }
  
  /* Basic styling */
  .new-question-btn {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 20px;
}
  
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: #fefefe;
  /* margin: 10% auto; */
  padding: 20px;
  border: 1px solid #888;
  width: 400px;
  max-width: 500px; /* Adjust max-width as needed */
  
}

.form-input {
  margin: 10px;
  display: flex;
}

.input{
    margin: 10px;
}
.save-btn,
.cancel-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 14px;
  margin-right: 10px;
}

.cancel-btn {
  background-color: #dc3545;
}

#button1 {
  margin: 5px;
  justify-content: center;
  /* align-items: center; */
  right: 50px;
 
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

/* Media Queries for Responsive Design */
@media screen and (max-width: 600px) {
  .modal-content {
    width: 90%;
  }
}

  
  /* Question & Answer Page */
  .qa-page {
    margin-top: 20px;
  }
  
  .back-btn {
    background-color: #2196f3;
    color: white;
    padding: 8px 12px;
    border: none;
    cursor: pointer;
    font-size: 14px;
  }
  
  /* Footer */
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
    text-decoration: none;
  }
  
  .icons i:hover {
    color: #007BFF;
  }
  
  /* Responsive Styles */
  @media screen and (max-width: 600px) {
    .blog-card {
      width: 100%;
    }
  
    .modal-content {
      width: 80%;
    }
  }
   /* Blog Cards */
   .blog-cards {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
  }
  
  .blog-card {
  width: calc(33.33% - 20px);
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background-color: #fff;
  transition: transform 0.2s ease-in-out;
}

.blog-card:hover {
  transform: scale(1.05);
}

.blog-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.blog-card-buttons {
  display: flex;
  gap: 5px;
}

.edit-btn,
.delete-btn {
  background-color: #007BFF;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 12px;
}

.delete-btn {
  background-color: #DC3545;
}

/* Question & Answer Popup Modal */
.qa-modal-content {
  max-width: 500px;
}

.save {
  text-align: center;
}
  </style>
  