<template>
    <div class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ease-out" @click.self="closeModal">
        <div class="bg-white rounded-lg shadow-xl max-w-2xl w-full overflow-hidden transform transition-all duration-300 ease-out scale-100">
            <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Imprint, Terms & Conditions
                </h3>
                <button @click="closeModal" class="text-gray-400 hover:text-gray-600">
                    <span class="sr-only">Close</span>
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div class="px-6 py-5 text-sm text-gray-700 text-left max-h-[70vh] overflow-y-auto space-y-4">
                <section class="mb-4">
                    <h4 class="font-semibold text-gray-800 mb-2">Imprint</h4>
                    <p><strong>Responsible for this service:</strong></p>
                    <p>Brentano Services OÜ</p>
                    <p>Avala kvartal, Veskiposti 8</p>
                    <p>11313 Tallinn</p>
                    <p>Estonia</p>
                    <p class="mt-2"><strong>Contact:</strong></p>
                    <p>Email: <a href="mailto:info@tokify.studio" class="text-primary-600 hover:underline">info@tokify.studio</a></p>
                    <!-- <p>Registry Code (Registrikood): [Your Company Registry Code]</p> -->
                </section>
  
                <section>
                    <h4 class="font-semibold text-gray-800 mb-2">Terms & Conditions / Privacy Notice (Beta Sign-up)</h4>
                    <p>By signing up using the form on this page, you provide your consent and agree to the following:</p>
                    <ul class="list-disc list-inside space-y-1 mt-2">
                        <li><strong>Data Collection:</strong> We collect your name and email address that you provide in the sign-up form.</li>
                        <li><strong>Purpose of Collection:</strong> This information is collected solely for the purpose of notifying you about the Brentano App beta launch.</li>
                        <li><strong>Data Usage:</strong> Your email address will be used only once to send you an email notification when the Brentano App beta becomes available. We will not use your contact details for any other marketing communication unless you explicitly consent to it separately in the future.</li>
                        <li><strong>Data Sharing:</strong> We respect your privacy. Your name and email address will not be sold, rented, shared with, or disclosed to any third parties.</li>
                        <li><strong>Data Security & Retention:</strong> We implement reasonable measures to protect your information. Your data will be stored securely only as long as necessary to fulfill the purpose of notification, or until you request its deletion.</li>
                        <li><strong>Your Rights (GDPR):</strong> As we are based in Estonia (EU), the processing of your personal data is governed by the General Data Protection Regulation (GDPR). You have the right to access, rectify, erase ('right to be forgotten'), or restrict the processing of your personal data. You can withdraw your consent at any time. To exercise these rights or request removal from our notification list, please contact us at <a href="mailto:info@tokify.studio" class="text-primary-600 hover:underline">info@tokify.studio</a>. We will process your request promptly.</li>
                    </ul>
                    <p class="mt-3 text-xs text-gray-500">
                        Providing your information via the sign-up form constitutes your explicit consent, which serves as the legal basis for processing under GDPR Article 6(1)(a).
                    </p>
                </section>
            </div>
            <div class="px-6 py-3 bg-gray-50 text-right border-t border-gray-200">
                <button @click="closeModal" class="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                    Close
                </button>
            </div>
        </div>
    </div>
  </template>
  
  <script setup>
  // Define emits for the component
  const emit = defineEmits(['close']);
  
  // Method to emit the close event
  const closeModal = () => {
    emit('close');
  };
  </script>
  
  <style scoped>
   .max-h-\[70vh\] {
      max-height: 70vh;
  }
  /* Add any modal-specific styles here */
  </style>