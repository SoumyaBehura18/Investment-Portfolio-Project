<template>
  <form @submit.prevent="handleSubmit" class="form-card">
    <h2>Add Client</h2>
    <input v-model="name" type="text" placeholder="Name" required />
    <input v-model="email" type="email" placeholder="Email" required />
    <button type="submit">Add</button>
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
.form-card { background: white; padding: 1.5rem; border-radius: 8px; display: flex; flex-direction: column; gap: 0.8rem; }
button { background: #2563eb; color: white; border: none; padding: 0.6rem; border-radius: 6px; cursor: pointer; }
button:hover { background: #1d4ed8; }
</style>
