<template>
  <div class="container">
    <div>
      <h1>Agendar</h1>
    </div>

    <div class="row">
      <div class="col-md-12">
        <label class="form-label">Agendar post</label>
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="postSelected"
        >
          <option value="" selected>Escolha um post</option>
          <option
            v-for="post in postToSchedule.data"
            :key="post.id"
            :value="post.id"
          >
            {{ post.title }}
          </option>
        </select>
      </div>
    </div>

    <div class="row mt-2">
      <div class="col-12">
        <button
          class="btn btn-primary"
          @click.prevent="formSchedulePost(postSelected)"
        >
          Agendar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import usePost from "../services/Post/usePost";

const { postSelected , postToSchedule, formSchedulePost, listPostSchedule } = usePost();

onMounted(() => {
  listPostSchedule();
});
</script>

<style scoped>
</style>