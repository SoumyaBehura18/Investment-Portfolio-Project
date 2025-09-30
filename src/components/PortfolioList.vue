<template>
  <div class="list-card">
    <h2>Portfolios</h2>

    <!-- Filter buttons -->
    <div class="filters">
      <button
        v-for="status in statuses"
        :key="status"
        @click="selectedStatus = status"
        :class="{ active: selectedStatus === status }"
      >
        {{ status }}
      </button>
    </div>

    <!-- Portfolio list -->
    <ul>
      <li v-for="portfolio in filteredPortfolios" :key="portfolio.id">
        <div class="portfolio-header">
          <div>
            <strong>{{ portfolio.portfolioName }}</strong> – 
            {{ getClientName(portfolio.clientId) }}
            <span :class="['badge', portfolio.status.toLowerCase()]">
              {{ portfolio.status }}
            </span>
          </div>

          <!-- Toggle holdings dropdown -->
          <button class="toggle-btn" @click="toggleHoldings(portfolio.id)">
            {{ openPortfolioId === portfolio.id ? "Hide Holdings" : "View Holdings" }}
          </button>
        </div>

        <!-- Holdings dropdown -->
        <div
          v-if="openPortfolioId === portfolio.id && portfolio.holdings && portfolio.holdings.length"
          class="holdings-dropdown"
        >
          <table>
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
const openPortfolioId = ref(null);

const filteredPortfolios = computed(() => {
  if (selectedStatus.value === "ALL") return props.portfolios;
  return props.portfolios.filter(p => p.status === selectedStatus.value);
});

function getClientName(id) {
  const user = props.users.find(u => u.id === id);
  return user ? user.name : "-";
}

function toggleHoldings(portfolioId) {
  openPortfolioId.value = openPortfolioId.value === portfolioId ? null : portfolioId;
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
  border-radius: 4px;
  cursor: pointer;
}
button.active {
  background: #2563eb;
  color: white;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
}

.portfolio-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.toggle-btn {
  background: #f3f4f6;
  border: 1px solid #ddd;
  padding: 0.3rem 0.7rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
}
.toggle-btn:hover {
  background: #e5e7eb;
}

.holdings-dropdown {
  margin-top: 0.8rem;
}

.holdings-dropdown table {
  width: 100%;
  border-collapse: collapse;
}

.holdings-dropdown th,
.holdings-dropdown td {
  border: 1px solid #ddd;
  padding: 0.5rem;
  text-align: left;
}

.holdings-dropdown th {
  background: #f3f4f6;
  font-weight: bold;
}
</style>
