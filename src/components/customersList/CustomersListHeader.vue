<script setup lang="ts"></script>

<template>
  <header class="customers-list-header">
    <p>Customers</p>
    <div class="actions">
      <input type="search" />
      <div class="sort-dropdown">
        <label for="sort-type">Sort by:</label>
        <select id="sort-type">
          <option>Alphabetically</option>
          <option>Customer id</option>
          <option>Products</option>
        </select>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.customers-list-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  .actions {
    display: flex;
    gap: 16px;
  }
}
</style>
