<script setup lang="ts">
import SearchInput from ".//SearchInput.vue";
import SortDropdown from "./SortDropdown.vue";

// import SearchIcon from "../shared/icons/Search.vue";
</script>

<template>
  <header class="customers-list-header">
    <p class="title">Customers</p>
    <div class="actions">
      <SortDropdown />
      <SearchInput />
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
  .title {
    font-size: 22px;
    font-weight: 700;
  }
  .actions {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 12px;
  }
}
</style>
