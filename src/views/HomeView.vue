<template>
  <main>
    <h1>Home</h1>

    <div class="content">
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Título</th>
            <th>Corpo</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody v-if="quantityPosts > 0">
          <tr v-for="post in postsList.data" :key="post.id">
            <td>{{ post.title }}</td>
            <td>{{ post.body }}</td>
            <td>
              {{
                post.scheduled_at === null
                  ? "Aguardando agendamento"
                  : "Agendado"
              }}
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="3">Nenhum post encontrado</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script setup>
import { onMounted } from "vue";
import usePost from "../services/Post/usePost";

const { postsList, getAllPosts, quantityPosts } = usePost();
onMounted(() => {
  getAllPosts();
});

</script>
