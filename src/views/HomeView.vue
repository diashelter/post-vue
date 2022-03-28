<script setup>

</script>

<template>
  <main>
    <h1>Home</h1>

    <div class="content">
        <div class="row margin-bottom">
            <div class="col-md-12">
                <label for="search">Pesquisa</label>
                <!-- <input v-model="search_global" type="text" placeholder="Search..." class="form-control"> -->
            </div>
        </div>
        <table class="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <!-- <tr v-for="user in users.data" :key="user.id">
                <td> {{ user.name }}</td>
                <td> {{ user.email }}</td>
            </tr> -->
          </tbody>
        </table>
        <!-- <pagination :data="users" :limit="2" @pagination-change-page="page => getUsers(page, search_global)" class="mt-4">
            <template #prev-nav>
                <span>&lt; Previous</span>
            </template>
            <template #next-nav>
                <span>Next &gt;</span>
            </template>
        </pagination> -->
    </div>
  </main>
</template>
