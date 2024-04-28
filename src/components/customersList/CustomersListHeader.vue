<script setup lang="ts">
import SearchInput from ".//SearchInput.vue";
import SortDropdown from "./SortDropdown.vue";

interface CustomersListHeaderEmits {
  (event: "text-changed", value: string): void;
}
const emit = defineEmits<CustomersListHeaderEmits>();
</script>

<template>
  <header class="customers-list-header">
    <p class="title">Customers</p>
    <div class="actions">
      <SortDropdown />
      <SearchInput @text-changed="emit('text-changed', $event)" />
    </div>
  </header>
</template>

<style scoped lang="scss">
.customers-list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  .actions {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 12px;
  }
}
</style>
