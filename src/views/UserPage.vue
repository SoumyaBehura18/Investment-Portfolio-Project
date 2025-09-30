<template>
  <div class="page">
    <h1 class="page-title">Users</h1>
    <UserForm @add-user="addUser" />
    <UserList :users="users" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import UserForm from "@/components/UserForm.vue";
import UserList from "@/components/UserList.vue";

const users = ref([]);

function addUser(user) {
  users.value.push(user);
}
</script>

<style scoped>
.page {
  background: #f9fafb;
  padding: 2rem;
  border-radius: 12px;
}

.page-title {
  color: #16a34a;
  margin-bottom: 1.2rem;
}
</style>
