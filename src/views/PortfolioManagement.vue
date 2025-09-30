<template>
  <div class="page">
    <h1 class="page-title">Portfolios</h1>

    <!-- Portfolio Form -->
    <PortfolioForm :users="users" @add-portfolio="addPortfolio" />
    <!-- Portfolio List -->
    <PortfolioList :portfolios="portfolios" :users="users" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import usersData from "@/data/users.json"; // for the dummy users
import PortfolioForm from "@/components/PortfolioForm.vue";
import PortfolioList from "@/components/PortfolioList.vue";

// State
const users = ref(usersData);
const portfolios = ref([]);

// Add portfolio handler
function addPortfolio(newPortfolio) {
  portfolios.value.push(newPortfolio);
}
</script>

<style scoped>
.page {
  background: #f9fafb;
  padding: 2rem;
  border-radius: 12px;
}
.page-title {
  color: #16a34a;
  margin-bottom: 1rem;
}
</style>
