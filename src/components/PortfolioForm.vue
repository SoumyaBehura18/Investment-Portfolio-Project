<template>
  <form @submit.prevent="handleSubmit" class="form-card">
    <h2>Create Portfolio</h2>

    <input v-model="portfolioName" type="text" placeholder="Portfolio Name" required />

    <!-- Client dropdown -->
    <select v-model="clientId" required>
      <option value="" disabled>Select Client</option>
      <option v-for="user in props.users" :key="user.id" :value="user.id">
        {{ user.name }}
      </option>
    </select>

    <!-- Status dropdown -->
    <select v-model="status" required>
      <option value="UPCOMING">Upcoming</option>
      <option value="ACTIVE">Active</option>
      <option value="CLOSED">Closed</option>
    </select>

    <button type="submit">Add</button>
  </form>
</template>

<script setup>
import { ref } from "vue";

// it Keep props intact for reactivity
const props = defineProps({
  users: { type: Array, default: () => [] },
});

const emit = defineEmits(["add-portfolio"]);

const portfolioName = ref("");
const clientId = ref("");
const status = ref("UPCOMING");

function handleSubmit() {
  if (!clientId.value) {
    alert("Please select a client");
    return;
  }

  emit("add-portfolio", {
    id: Date.now(),
    portfolioName: portfolioName.value,
    clientId: clientId.value,
    status: status.value,
    createdAt: new Date().toISOString(),
  });

  // the reset form
  portfolioName.value = "";
  clientId.value = "";
  status.value = "UPCOMING";
}
</script>

<style scoped>
.form-card { 
  background: white; 
  padding: 1.5rem; 
  border-radius: 8px; 
  display: flex; 
  flex-direction: column; 
  gap: 0.8rem; 
}
select, input {
  padding: 0.6rem;
  border: 1px solid #ddd;
  border-radius: 6px;
}
button { 
  background: #16a34a; 
  color: white; 
  border: none; 
  padding: 0.6rem; 
  border-radius: 6px; 
  cursor: pointer; 
  font-weight: bold;
}
button:hover { 
  background: #15803d; 
}
</style>
