<template>
    <div class="min-h-screen bg-blue-50 flex flex-col items-center justify-center py-12 px-4 text-center">
      <div class="w-full max-w-6xl mx-auto flex flex-col items-center">
        <!-- App Logo -->
        <img class="mx-auto h-16 w-auto" src="/src/logo_image.png" alt="Brentano App Logo">
        
        <h1 class="mt-6 text-center text-5xl font-extrabold text-gray-900">
          Brentano App.
        </h1>
        <p class="mt-3 text-center text-xl text-primary-600 font-semibold">
          Understand what is important.
        </p>
        <p class="mt-4 text-center text-lg text-gray-600 max-w-3xl mx-auto">
          Tired of searching through endless emails for that one piece of information? Brentano transforms your inbox into an intelligent, searchable knowledge base.
        </p>
  
        <!-- Video section moved up as requested -->
        <div class="mt-8 w-full">
          <h3 class="text-center text-xl font-semibold text-gray-800 mb-4">See Brentano in Action:</h3>
          <div class="aspect-video bg-gray-300 rounded-lg flex items-center justify-center max-w-4xl mx-auto">
            <span class="text-gray-500 font-medium text-lg">(Explanation Video Coming Soon)</span>
            <!-- You can replace this with an actual iframe embed later -->
          </div>
        </div>
  
        <!-- 4 Feature Tiles in 2x2 Grid -->
        <div class="mt-16 w-full">
          <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">How Brentano Works:</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            <!-- Tile 1 -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
              <img class="h-40 w-auto" src="/src/happy_user.png" alt="Intelligent Extraction">
            </div>
            <h3 class="text-lg font-bold text-gray-800 mb-2">Intelligent Extraction</h3>
            <p class="text-gray-700">
              Our AI automatically extracts key text and relevant dates from your emails and attachments (including text within images!).
            </p>
          </div>
          
          <!-- Tile 2 -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
              <img class="h-40 w-auto" src="/src/vectordb.png" alt="Vectorized Knowledge">
            </div>
            <h3 class="text-lg font-bold text-gray-800 mb-2">Vectorized Knowledge</h3>
            <p class="text-gray-700">
              We securely store this extracted information in a specialized vector database, optimized for understanding context and meaning.
            </p>
          </div>
          
          <!-- Tile 3 -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
              <img class="h-40 w-auto" src="/src/aiagent.png" alt="AI Agent Driven Reminders">
            </div>
            <h3 class="text-lg font-bold text-gray-800 mb-2">AI Agent Driven Reminders</h3>
            <p class="text-gray-700">
              Never miss a deadline or important event again. Brentano identifies dates and can remind you daily, weekly, or monthly.
            </p>
          </div>
          
          <!-- Tile 4 -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
              <img class="h-40 w-auto" src="/src/natural_language.png" alt="Conversational Search">
            </div>
            <h3 class="text-lg font-bold text-gray-800 mb-2">Conversational Search</h3>
            <p class="text-gray-700">
              Ask questions in natural language! Brentano uses Retrieval-Augmented Generation (RAG) to search your data and provide accurate, context-aware answers based *only* on your information.
            </p>
          </div>
        </div>
          
          <p class="mt-8 text-lg text-gray-700 text-center max-w-3xl mx-auto">
            Simply forward your important emails – confirmations, notes, articles, attachments – to your dedicated Brentano address.
          </p>
          
          <p class="mt-4 text-lg text-gray-700 text-center max-w-3xl mx-auto">
            Stop losing valuable information. Let Brentano be your personal email intelligence assistant.
          </p>
        </div>
  
        <!-- Beta Sign-up Form -->
        <div class="mt-16 w-full">
          <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 max-w-md mx-auto">
            <h2 class="text-center text-2xl font-bold text-gray-900">
              Be the First to Know!
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600">
              Sign up to get notified when the Brentano App beta launches.
            </p>
  
            <!-- Success Message -->
            <div v-if="signupSuccess" class="rounded-md bg-green-50 p-4 mt-6">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-green-800">Thanks for signing up! We'll notify you soon.</p>
                </div>
              </div>
            </div>
  
            <!-- Error Message -->
            <div v-if="signupError" class="rounded-md bg-red-50 p-4 mt-6">
              <div class="flex">
                <div class="ml-3">
                  <h3 class="text-sm font-medium text-red-800">{{ signupError }}</h3>
                </div>
              </div>
            </div>
  
            <form
                    class="space-y-6"
                    method="POST"  
                    action="https://formspree.io/f/mwplrbok" 
                    @submit="checkForSuccess" 
                >
                    <div>
                        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                        <div class="mt-1">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autocomplete="name"
                                required
                                v-model="formData.name"
                                @blur="validateName"
                                :class="[
                                    'appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm',
                                    errors.name ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'
                                ]"
                                />
                        </div>
                        <!-- Error message -->
                    </div>
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
                        <div class="mt-1">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autocomplete="email"
                                required
                                v-model="formData.email"
                                @blur="validateEmail"
                                :class="[
                                    'appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm',
                                    errors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'
                                ]"
                                />
                        </div>
                        <!-- Error message -->
                    </div>
                    <div>
                        <button
                            type="submit"
                            :disabled="loading || !isFormPotentiallyValid"
                            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                            <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Notify Me!
                            </button>
                        
                    </div>
                </form>
          </div>
        </div>
      </div>
  
      <!-- Footer -->
      <footer class="mt-12 text-center text-sm text-gray-500">
        © {{ new Date().getFullYear() }} Brentano App. All rights reserved.
      </footer>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, computed } from 'vue';
  
  const formData = reactive({
    name: '',
    email: '',
  });
  
  const errors = reactive({
    name: null,
    email: null,
  });
  
  const loading = ref(false);
  const signupSuccess = ref(false);
  const signupError = ref(null);
  
  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  const validateName = () => {
    if (!formData.name.trim()) {
      errors.name = 'Name is required.';
      return false;
    }
    errors.name = null;
    return true;
  };
  
  const validateEmail = () => {
    if (!formData.email.trim()) {
      errors.email = 'Email is required.';
      return false;
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
      return false;
    }
    errors.email = null;
    return true;
  };
  
  const validateForm = () => {
    // Trigger individual validations to show messages if fields are empty on submit
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    return isNameValid && isEmailValid;
  }
  
  // Computed property to enable button only if fields are not empty (basic check)
  // More robust validation happens on submit
  const isFormPotentiallyValid = computed(() => {
    return formData.name.trim() !== '' && formData.email.trim() !== '';
  });
  
  const handleSignup = async (event) => {
     event.preventDefault(); // Prevent default POST
     if (!validateForm()) return;
     loading.value = true;
     signupSuccess.value = false;
     signupError.value = null;

     const form = event.target;
     const data = new FormData(form);

     try {
         const response = await fetch(form.action, {
             method: form.method,
             body: data,
             headers: {
                 'Accept': 'application/json' // Important for Formspree AJAX
             }
         });
         if (response.ok) {
             signupSuccess.value = true;
             formData.name = '';
             formData.email = '';
             errors.name = null;
             errors.email = null;
         } else {
             // Try to get error from Formspree response
             const responseData = await response.json();
             if (responseData.errors) {
                 signupError.value = responseData.errors.map(err => err.message).join(', ');
             } else {
                 throw new Error('Form submission failed.');
             }
         }
     } catch (error) {
         console.error('Signup error:', error);
         signupError.value = error.message || 'An unexpected error occurred.';
     } finally {
         loading.value = false;
     }
 };

  </script>
  
  <style scoped>
  /* Add any component-specific styles here if needed */
  </style>