<template>
  <div class="app">
    <header>
      <h1>Investment Portfolio Management</h1>
    </header>

    <section class="forms">
      <UserForm @add-user="addUser" />
      <PortfolioForm :users="users" @add-portfolio="addPortfolio" />
    </section>

    <section class="lists">
      <UserList :users="users" />
      <PortfolioList :portfolios="portfolios" :users="users" />
    </section>
  </div>
</template>

<script>
import UserForm from './components/UserForm.vue';
import UserList from './components/UserList.vue';
import PortfolioForm from './components/PortfolioForm.vue';
import PortfolioList from './components/PortfolioList.vue';

export default {
  components: { UserForm, UserList, PortfolioForm, PortfolioList },
  data() {
    return {
      users: [],
      portfolios: []
    };
  },
  methods: {
    addUser(user) {
      user.id = Date.now();
      this.users.push(user);
    },
    addPortfolio(portfolio) {
      portfolio.id = Date.now();
      this.portfolios.push(portfolio);
    }
  }
};
</script>

<style scoped>
.app {
  font-family: 'Poppins', sans-serif;
  background: #f0f4f8;
  min-height: 100vh;
  padding: 2rem;
}
header {
  text-align: center;
  margin-bottom: 2rem;
  color: #1e3a8a;
}
.forms {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}
.lists {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}
section {
  flex: 1;
}
</style>
