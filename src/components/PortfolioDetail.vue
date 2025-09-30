<template>
  <div v-if="portfolio" class="portfolio-detail">
    <h2>{{ portfolio.portfolioName }}</h2>
    <p><strong>Client:</strong> {{ clientName }}</p>
    <p><strong>Client Age:</strong> {{ clientAge }}</p>
    <p><strong>Status:</strong> {{ portfolio.status }}</p>
    <p><strong>Created:</strong> {{ formattedDate }}</p>

    <h3>Holdings</h3>
    <table v-if="portfolio.holdings?.length">
      <tr v-for="(h, i) in portfolio.holdings" :key="i">
        <td>{{ h.type }}</td>
        <td>₹{{ h.value.toLocaleString() }}</td>
      </tr>
    </table>
    <p v-else class="empty">No holdings</p>

    <h3>Sold Holdings</h3>
    <table v-if="portfolio.soldings?.length">
      <tr v-for="(s, i) in portfolio.soldings" :key="i">
        <td>{{ s.type }}</td>
        <td>₹{{ s.value.toLocaleString() }}</td>
      </tr>
    </table>
    <p v-else class="empty">No sold holdings</p>

    <p><strong>Total Returns:</strong> ₹{{ totalReturns.toLocaleString() }}</p>
  </div>
  <div v-else class="empty">Select a portfolio to view details</div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  portfolio: { type: Object, default: null },
  users: { type: Array, default: () => [] }
});

const clientName = computed(() => {
  const user = props.users.find(u => u.id === props.portfolio?.clientId);
  return user ? user.name : "-";
});

const clientAge = computed(() => {
  const user = props.users.find(u => u.id === props.portfolio?.clientId);
  return user?.startAge || "-";
});

const formattedDate = computed(() => {
  if (!props.portfolio) return "-";
  return new Date(props.portfolio.createdAt).toLocaleDateString();
});

const totalReturns = computed(() => {
  if (!props.portfolio) return 0;
  const holdingsTotal = props.portfolio.holdings?.reduce((s,h)=>s+h.value,0) || 0;
  const soldingsTotal = props.portfolio.soldings?.reduce((s,h)=>s+h.value,0) || 0;
  return holdingsTotal + soldingsTotal;
});
</script>

<style scoped>
.portfolio-detail {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

h2 { color: #16a34a; }
h3 { margin-top: 1rem; color: #1e3a8a; }

table {
  width: 100%;
  margin-top: 0.5rem;
  border-collapse: collapse;
}

td {
  border: 1px solid #ddd;
  padding: 0.6rem;
}
.empty { color: #888; margin-top: 0.5rem; }
</style>
