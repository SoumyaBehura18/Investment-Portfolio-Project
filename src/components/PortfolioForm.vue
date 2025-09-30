<template>
  <form @submit.prevent="handleSubmit" class="form-card">
    <h2>Create Portfolio</h2>

    <!-- Portfolio Name -->
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

    <!-- Holdings Section -->
    <div class="section">
      <h3>Holdings</h3>
      <div v-for="(holding, index) in holdings" :key="index" class="row">
        <input v-model="holding.type" type="text" placeholder="Type (e.g. Stocks)" required />
        <input v-model.number="holding.value" type="number" placeholder="Value (₹)" required />
        <button type="button" @click="removeHolding(index)">❌</button>
      </div>
      <button type="button" class="add-btn" @click="addHolding">+ Add Holding</button>
    </div>

    <!-- Soldings Section -->
    <div class="section">
      <h3>Sold Holdings</h3>
      <div v-for="(sold, index) in soldings" :key="index" class="row">
        <input v-model="sold.type" type="text" placeholder="Type (e.g. Bonds)" required />
        <input v-model.number="sold.value" type="number" placeholder="Value (₹)" required />
        <button type="button" @click="removeSolding(index)">❌</button>
      </div>
      <button type="button" class="add-btn" @click="addSolding">+ Add Solding</button>
    </div>

    <button type="submit">Add Portfolio</button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  users: { type: Array, default: () => [] },
});

const emit = defineEmits(["add-portfolio"]);

const portfolioName = ref("");
const clientId = ref("");
const status = ref("UPCOMING");
const holdings = ref([{ type: "", value: 0 }]);
const soldings = ref([{ type: "", value: 0 }]);

function addHolding() {
  holdings.value.push({ type: "", value: 0 });
}
function removeHolding(index) {
  holdings.value.splice(index, 1);
}
function addSolding() {
  soldings.value.push({ type: "", value: 0 });
}
function removeSolding(index) {
  soldings.value.splice(index, 1);
}

function handleSubmit() {
  emit("add-portfolio", {
    id: Date.now(),
    portfolioName: portfolioName.value,
    clientId: clientId.value,
    status: status.value,
    createdAt: new Date().toISOString(),
    holdings: holdings.value,
    soldings: soldings.value,
  });

  portfolioName.value = "";
  clientId.value = "";
  status.value = "UPCOMING";
  holdings.value = [{ type: "", value: 0 }];
  soldings.value = [{ type: "", value: 0 }];
}
</script>

<style scoped>
.form-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

h2 {
  color: #16a34a;
}

.section {
  background: #f9fafb;
  padding: 1rem;
  border-radius: 8px;
}

.section h3 {
  margin-bottom: 0.8rem;
  color: #1e3a8a;
  font-size: 1rem;
  font-weight: 600;
}

.row {
  display: flex;
  gap: 0.6rem;
  margin-bottom: 0.6rem;
  align-items: center;
}

input, select {
  flex: 1;
  padding: 0.6rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.9rem;
}

button {
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s;
}

.add-btn {
  background: #2563eb;
  color: white;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
}

.add-btn:hover {
  background: #1d4ed8;
}

.row button {
  background: #dc2626;
  color: white;
  border: none;
  padding: 0.4rem 0.6rem;
  border-radius: 6px;
}

.row button:hover {
  background: #b91c1c;
}

button[type="submit"] {
  background: #16a34a;
  color: white;
  border: none;
  padding: 0.7rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}

button[type="submit"]:hover {
  background: #15803d;
}
</style>
