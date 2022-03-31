<template>
  <main class="container">
    <div class="bg-light p-5 rounded mt-3">
      <h1>Error Page not found</h1>
      <p class="lead">
        This page nor found example is click in butto to home back 
      </p>
      <button
        class="btn btn-lg btn-primary"
        @click="redirectMe"
        role="button"
        >Go back</button>
    </div>
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
function redirectMe() {
  router.push({ name: "home" });
}
</script>
