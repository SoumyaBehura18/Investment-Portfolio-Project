<template>
  <div class="list-card">
    <h2>Portfolios</h2>
    <div class="filters">
      <button v-for="status in statuses" :key="status"
        @click="selectedStatus = status"
        :class="{ active: selectedStatus === status }">
        {{ status }}
      </button>
    </div>
    <ul>
      <li v-for="portfolio in filteredPortfolios" :key="portfolio.id">
        <strong>{{ portfolio.portfolioName }}</strong> – {{ getClientName(portfolio.clientId) }}
        <span :class="['badge', portfolio.status.toLowerCase()]">{{ portfolio.status }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  portfolios: { type: Array, default: () => [] },
  users: { type: Array, default: () => [] }
});

const statuses = ["ALL", "UPCOMING", "ACTIVE", "CLOSED"];
const selectedStatus = ref("ALL");

const filteredPortfolios = computed(() => {
  if (selectedStatus.value === "ALL") return props.portfolios;
  return props.portfolios.filter(p => p.status === selectedStatus.value);
});

function getClientName(id) {
  const user = props.users.find(u => u.id === id);
  return user ? user.name : "-";
}
</script>

<style scoped>
.filters { margin-bottom: 1rem; display: flex; gap: 0.5rem; }
button { padding: 0.4rem 0.8rem; border: 1px solid #ddd; border-radius: 4px; cursor: pointer; }
button.active { background: #2563eb; color: white; }
.badge { margin-left: 0.5rem; padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.8rem; }
.badge.active { background: #16a34a; color: white; }
.badge.closed { background: #dc2626; color: white; }
.badge.upcoming { background: #f59e0b; color: white; }
</style>
