<template>
  <div class="list-card">
    <h2>Users</h2>
    <ul>
      <li v-for="user in users" :key="user.id" class="user-item">
        <div class="avatar">{{ user.name.charAt(0).toUpperCase() }}</div>
        <div class="info">
          <span class="name">{{ user.name }}</span>
          <span class="email">{{ user.email }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  users: { type: Array, required: true }
});
</script>

<style scoped>
.list-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

h2 {
  color: #1e3a8a;
  margin-bottom: 1rem;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.user-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem;
  border-bottom: 1px solid #eee;
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #2563eb;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.info {
  display: flex;
  flex-direction: column;
}

.name {
  font-weight: 600;
  color: #111827;
}

.email {
  font-size: 0.85rem;
  color: #6b7280;
}
</style>
