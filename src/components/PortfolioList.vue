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
        <div class="portfolio-header">
          <div>
            <strong>{{ portfolio.portfolioName }}</strong> – {{ getClientName(portfolio.clientId) }}
            <span :class="['badge', portfolio.status.toLowerCase()]">{{ portfolio.status }}</span>
          </div>
        </div>

        <!-- Holdings -->
        <button class="toggle-btn" @click="toggleDropdown(portfolio.id, 'holdings')">
          {{ isOpen(portfolio.id, 'holdings') ? "Hide Holdings" : "View Holdings" }}
        </button>
        <div v-if="isOpen(portfolio.id, 'holdings') && portfolio.holdings?.length" class="dropdown">
          <h4>Holdings</h4>
          <table>
            <tr v-for="(holding, index) in portfolio.holdings" :key="index">
              <td>{{ holding.type }}</td>
              <td>₹{{ holding.value.toLocaleString() }}</td>
            </tr>
          </table>
        </div>

        <!-- Soldings -->
        <button class="toggle-btn" @click="toggleDropdown(portfolio.id, 'soldings')">
          {{ isOpen(portfolio.id, 'soldings') ? "Hide Soldings" : "View Soldings" }}
        </button>
        <div v-if="isOpen(portfolio.id, 'soldings') && portfolio.soldings?.length" class="dropdown">
          <h4>Sold Holdings</h4>
          <table>
            <tr v-for="(sold, index) in portfolio.soldings" :key="index">
              <td>{{ sold.type }}</td>
              <td>₹{{ sold.value.toLocaleString() }}</td>
            </tr>
          </table>
        </div>
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
const openDropdowns = ref({});

const filteredPortfolios = computed(() => {
  if (selectedStatus.value === "ALL") return props.portfolios;
  return props.portfolios.filter(p => p.status === selectedStatus.value);
});

function getClientName(id) {
  const user = props.users.find(u => u.id === id);
  return user ? user.name : "-";
}

function toggleDropdown(portfolioId, section) {
  const key = `${portfolioId}-${section}`;
  openDropdowns.value[key] = !openDropdowns.value[key];
}

function isOpen(portfolioId, section) {
  return openDropdowns.value[`${portfolioId}-${section}`] || false;
}
</script>

<style scoped>
.list-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.filters {
  margin-bottom: 1rem;
  display: flex;
  gap: 0.5rem;
}

button {
  padding: 0.4rem 0.8rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  cursor: pointer;
}

button.active {
  background: #2563eb;
  color: white;
}

.portfolio-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.toggle-btn {
  background: #f3f4f6;
  margin-top: 0.5rem;
}

.dropdown {
  margin-top: 0.6rem;
}

.dropdown table {
  width: 100%;
  border-collapse: collapse;
}

.dropdown td {
  border: 1px solid #ddd;
  padding: 0.5rem;
}
.badge.active { background: #16a34a; color: white; }
.badge.closed { background: #dc2626; color: white; }
.badge.upcoming { background: #f59e0b; color: white; }
</style>
