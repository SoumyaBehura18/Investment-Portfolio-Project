<template>
  <div id="app">
    <header class="app-header">
      <h1>Investment Portfolio Management</h1>
      <nav>
        <router-link to="/users">Users</router-link> |
        <router-link to="/portfolios">Portfolios</router-link>
      </nav>
    </header>

    <main class="app-main">
      <router-view />
    </main>
  </div>
</template>

<script setup>
// nothing needed here
</script>

<style scoped>
.app-header {
  background: #1e3a8a;
  padding: 1rem;
  color: white;
}
nav a {
  margin: 0 0.5rem;
  text-decoration: none;
  color: #facc15;
}
nav a.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}
.app-main {
  padding: 1rem;
}
</style>
