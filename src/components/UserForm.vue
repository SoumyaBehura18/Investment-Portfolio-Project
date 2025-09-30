<template>
  <form @submit.prevent="handleSubmit" class="form-card">
    <h2>Add User</h2>
    <input v-model="name" type="text" placeholder="Name" required />
    <input v-model="email" type="email" placeholder="Email" required />
    <button type="submit">Add User</button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["add-user"]);
const name = ref("");
const email = ref("");

function handleSubmit() {
  emit("add-user", { id: Date.now(), name: name.value, email: email.value });
  name.value = "";
  email.value = "";
}
</script>

<style scoped>
.form-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

h2 {
  color: #1e3a8a;
}

input {
  padding: 0.6rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.9rem;
}

button {
  background: #2563eb;
  color: white;
  border: none;
  padding: 0.6rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.2s;
}

button:hover {
  background: #1d4ed8;
}
</style>
