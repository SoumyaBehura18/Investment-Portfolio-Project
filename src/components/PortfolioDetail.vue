<template>
  <div v-if="portfolio" class="portfolio-detail card">
    <h2>{{ portfolio.name }}</h2>
    <p>Client: {{ clientName }}</p>
    <p>Status: <span :class="['status', portfolio.status.toLowerCase()]">{{ portfolio.status }}</span></p>
    <p>Created on: {{ formattedDate }}</p>
  </div>
  <div v-else class="empty-card">
    <p>No portfolio selected</p>
  </div>
</template>

<script>
export default {
  name: "PortfolioDetail",
  props: {
    portfolio: {
      type: Object,
      default: null,
    },
    users: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    clientName() {
      if (!this.portfolio) return "-";
      const user = this.users.find(u => u.id === this.portfolio.clientId);
      return user ? user.name : "-";
    },
    formattedDate() {
      if (!this.portfolio) return "-";
      return new Date(this.portfolio.createdAt).toLocaleDateString();
    },
  },
};
</script>

<style scoped>
.portfolio-detail {
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.1);
  max-width: 500px;
  margin: 2rem auto;
}

.status {
  font-weight: bold;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  color: white;
}

.status.active {
  background: #4caf50;
}

.status.inactive {
  background: #f44336;
}

.empty-card {
  text-align: center;
  color: #888;
  padding: 2rem;
  font-size: 1.1rem;
}
</style>
