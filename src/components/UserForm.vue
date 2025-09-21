<template>
  <form @submit.prevent="handleSubmit" class="form-card">
    <h2>Add User</h2>
    <input v-model="name" type="text" placeholder="Name" required ref="nameInput" />
    <input v-model="email" type="email" placeholder="Email" required ref="emailInput" />
    <button type="submit">Add User</button>
  </form>
</template>

<script>
export default {
  data() {
    return { name: '', email: '' };
  },
  methods: {
    handleSubmit() {
      this.$emit('add-user', { name: this.name, email: this.email });
      this.name = '';
      this.email = '';
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
input {
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ddd;
  font-size: 1rem;
}
button {
  background: #1e3a8a;
  color: white;
  padding: 0.6rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.2s;
}
button:hover {
  background: #3b82f6;
}
h2 {
  color: #1e3a8a;
  margin-bottom: 0.5rem;
}
</style>
