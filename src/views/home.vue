<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-pink-600 text-white">
      <div class="container mx-auto px-4 py-20 text-center">
        <h1 class="text-5xl font-bold">Welcome to Digi Systems</h1>
        <p class="mt-4 text-lg">
          We offer comprehensive solutions for healthcare, education, and storage.
        </p>
        <a
          href="#products"
          class="mt-6 inline-block bg-white text-pink-600 py-3 px-6 rounded-lg hover:bg-gray-200"
        >
          Explore Products
        </a>
      </div>
    </section>
    <!-- Products Section -->
    <section id="products" class="container mx-auto px-4 py-20">
      <h2 class="text-3xl font-bold text-center mb-12 text-pink-500">Our Products</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <!-- Digi-Care -->
        <div class="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 class="text-xl font-bold mb-4">Digi-Care Health System</h3>
          <p class="text-gray-600 mb-4">
            Comprehensive healthcare solutions designed to
            streamline medical services and patient care.
          </p>
          <a
            :href="careAppLink"
            target="_blank"
            class="bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-500"
          >
            Learn More
          </a>
        </div>

        <!-- Digi-Edu -->
        <div class="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 class="text-xl font-bold mb-4">Digi-Edu Courses</h3>
          <p class="text-gray-600 mb-4">
            Empowering education through online courses, learning modules,
            and certification programs.
          </p>
          <a
            :href="eduAppLink"
            target="_blank"
            class="bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-500"
          >
            Learn More
          </a>
        </div>

        <!-- Digi-Storage -->
        <div class="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 class="text-xl font-bold mb-4">Digi-Storage File Storage</h3>
          <p class="text-gray-600 mb-4">
            Secure cloud storage solutions to store, manage,
            and share files with ease and reliability.
          </p>
          <a href="#" class="bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-500">
            Learn More
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const careAppLink = ref(process.env.VUE_APP_URL_DG_CARE_APP);
const eduAppLink = ref(process.env.VUE_APP_URL_DG_EDU_APP);
</script>
