<template>
  <div v-if="portfolio" class="portfolio-detail">
    <h2>{{ portfolio.portfolioName }}</h2>
    <p><strong>Client:</strong> {{ clientName }}</p>
    <p><strong>Client Age:</strong> {{ clientAge }}</p>
    <p><strong>Status:</strong> {{ portfolio.status }}</p>
    <p><strong>Created:</strong> {{ formattedDate }}</p>

    <h3>Holdings</h3>
    <table v-if="portfolio.holdings && portfolio.holdings.length" class="holdings-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Value (₹)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(holding, index) in portfolio.holdings" :key="index">
          <td>{{ holding.type }}</td>
          <td>{{ holding.value.toLocaleString() }}</td>
        </tr>
      </tbody>
    </table>
    <p v-else class="empty">No holdings added</p>
  </div>

  <div v-else class="empty">Select a portfolio to view details</div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  portfolio: { type: Object, default: null },
  users: { type: Array, default: () => [] }
});

// Find client name
const clientName = computed(() => {
  if (!props.portfolio) return "-";
  const user = props.users.find(u => u.id === props.portfolio.clientId);
  return user ? user.name : "-";
});

// Find client start age
const clientAge = computed(() => {
  if (!props.portfolio) return "-";
  const user = props.users.find(u => u.id === props.portfolio.clientId);
  return user && user.startAge ? user.startAge : "-";
});

// Format portfolio created date
const formattedDate = computed(() => {
  if (!props.portfolio) return "-";
  return new Date(props.portfolio.createdAt).toLocaleDateString();
});
</script>

<style scoped>
.portfolio-detail {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.empty {
  color: #888;
  text-align: center;
  margin-top: 1rem;
}
.holdings-table {
  width: 100%;
  margin-top: 1rem;
  border-collapse: collapse;
}
.holdings-table th,
.holdings-table td {
  border: 1px solid #ddd;
  padding: 0.6rem;
  text-align: left;
}
.holdings-table th {
  background: #f3f4f6;
  font-weight: bold;
}
</style>
