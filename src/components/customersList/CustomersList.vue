<script setup lang="ts">
import CustomersListHeader from "./CustomersListHeader.vue";
import CustomersListTable from "./CustomersListTable.vue";
</script>

<template>
  <div class="customers-list">
    <CustomersListHeader />
    <CustomersListTable />
  </div>
</template>

<style scoped lang="scss">
.customers-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 50px;
  height: 100vh;
  max-height: 100vh;
  max-width: 1065px;

  margin: 0 auto;
  padding: 50px 0;
}
</style>
