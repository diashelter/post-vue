<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>
  <main class="container">
    <RouterView />
  </main>
</template>

<style>

</style>
