<template>
  <div v-if="portfolio" class="portfolio-detail">
    <h2>{{ portfolio.portfolioName }}</h2>
    <p><strong>Client:</strong> {{ clientName }}</p>
    <p><strong>Status:</strong> {{ portfolio.status }}</p>
    <p><strong>Created:</strong> {{ formattedDate }}</p>
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
  if (!props.portfolio) return "-";
  const user = props.users.find(u => u.id === props.portfolio.clientId);
  return user ? user.name : "-";
});

const formattedDate = computed(() => {
  if (!props.portfolio) return "-";
  return new Date(props.portfolio.createdAt).toLocaleDateString();
});
</script>

<style scoped>
.portfolio-detail { background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
.empty { color: #888; text-align: center; margin-top: 1rem; }
</style>
