<template>
  <div class="page">
    <h2 class="page-title">Users</h2>
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
  users.value.push({ id: Date.now(), ...user });
}
</script>

<style scoped>
.page {
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
}
.page-title {
  color: #1e3a8a;
  margin-bottom: 1rem;
}
</style>
