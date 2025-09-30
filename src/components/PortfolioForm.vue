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
    <div class="holdings-section">
      <h3>Holdings</h3>
      <div
        v-for="(holding, index) in holdings"
        :key="index"
        class="holding-row"
      >
        <input
          v-model="holding.type"
          type="text"
          placeholder="Type (e.g. Stocks, Mutual Funds)"
          required
        />
        <input
          v-model.number="holding.value"
          type="number"
          placeholder="Value (₹)"
          required
        />
        <button
          type="button"
          class="remove-btn"
          @click="removeHolding(index)"
          v-if="holdings.length > 1"
        >
          ❌
        </button>
      </div>
      <button type="button" class="add-btn" @click="addHolding">
        + Add Holding
      </button>
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

function addHolding() {
  holdings.value.push({ type: "", value: 0 });
}

function removeHolding(index) {
  holdings.value.splice(index, 1);
}

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
    holdings: holdings.value,
  });

  // reset form
  portfolioName.value = "";
  clientId.value = "";
  status.value = "UPCOMING";
  holdings.value = [{ type: "", value: 0 }];
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

select,
input {
  padding: 0.6rem;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.holdings-section {
  margin-top: 1rem;
  background: #f9fafb;
  padding: 1rem;
  border-radius: 6px;
}

.holding-row {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  align-items: center;
}

.add-btn {
  background: #2563eb;
  color: white;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
}

.add-btn:hover {
  background: #1d4ed8;
}

.remove-btn {
  background: #dc2626;
  color: white;
  border: none;
  padding: 0.4rem 0.6rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
}

.remove-btn:hover {
  background: #b91c1c;
}

button[type="submit"] {
  background: #16a34a;
  color: white;
  border: none;
  padding: 0.6rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

button[type="submit"]:hover {
  background: #15803d;
}
</style>
