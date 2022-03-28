<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <RouterLink class="nav-link" to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class="nav-link" to="/novo">Criar Post</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class="nav-link" to="/agendar">Agendar Post</RouterLink>
            </li>
        </ul>
    </div>
  </div>
</nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>