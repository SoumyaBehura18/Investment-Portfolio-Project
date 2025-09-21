<template>
  <div class="list-card">
    <h2>Portfolios</h2>
    <ul>
      <li v-for="portfolio in portfolios" :key="portfolio.id" class="portfolio-item">
  <p>{{ portfolio.portfolioName }}</p>
  <p>Client: {{ getClientName(portfolio.clientId) }}</p>
  <p>Status: {{ portfolio.status }}</p>
</li>

    </ul>
  </div>
</template>

<script>
export default {
  props: ['portfolios', 'users'],
  methods: {
    getClientName(id) {
      const user = this.users.find(u => u.id === id);
      return user ? user.name : "-";
    }
  }
};
</script>

<style scoped>
.list-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}
ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}
h2 {
  color: #16a34a;
  margin-bottom: 1rem;
}
</style>
