<template>
  <form @submit.prevent="handleSubmit" class="form-card">
    <h2>Add Client</h2>
    <input v-model="name" type="text" placeholder="Name" required />
    <input v-model="email" type="email" placeholder="Email" required />
    <input v-model.number="startAge" type="number" placeholder="Start Age" required />
    <button type="submit">Add</button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["add-user"]);
const name = ref("");
const email = ref("");
const startAge = ref("");

function handleSubmit() {
  emit("add-user", { 
    id: Date.now(), 
    name: name.value, 
    email: email.value,
    startAge: startAge.value
  });

  name.value = "";
  email.value = "";
  startAge.value = "";
}
</script>
