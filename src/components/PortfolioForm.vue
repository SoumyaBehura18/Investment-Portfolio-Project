<template>
  <form @submit.prevent="handleSubmit" class="form-card">
    <h2>Create Portfolio</h2>
    <input v-model="portfolioName" type="text" placeholder="Portfolio Name" required />
    <select v-model="clientId" required>
      <option value="">Select Client</option>
      <option v-for="user in users" :key="user.id" :value="user.id">
        {{ user.name }}
      </option>
    </select>
    <button type="submit">Add Portfolio</button>
  </form>
</template>

<script>
export default {
  props: ['users'],
  data() {
    return { portfolioName: '', clientId: '' };
  },
  methods: {
    handleSubmit() {
      this.$emit('add-portfolio', { portfolioName: this.portfolioName, clientId: this.clientId });
      this.portfolioName = '';
      this.clientId = '';
    }
  }
};
</script>

<style scoped>
.form-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
select, input {
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ddd;
  font-size: 1rem;
}
button {
  background: #16a34a;
  color: white;
  padding: 0.6rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.2s;
}
button:hover {
  background: #22c55e;
}
h2 {
  color: #16a34a;
  margin-bottom: 0.5rem;
}
</style>
