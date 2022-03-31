<template>
  <div class="container">
    <h1>Post</h1>
    <form class="row g-3" @submit.prevent>
      <div class="col-12">
        <label for="inputAddress" class="form-label">Título</label>
        <input type="text" class="form-control" v-model="formPost.title" />
      </div>
      <div class="col-md-12">
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label"
            >Corpo</label
          >
          <textarea
            class="form-control"
            v-model="formPost.body"
            rows="3"
          ></textarea>
        </div>
      </div>
      <div class="col-12">
        <button class="btn btn-primary" @click.prevent="submitForm(formPost)">
          Salvar
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import usePost from "../services/Post/usePost";

const { formPost, submitForm } = usePost();

</script>
