<script setup lang="ts">
import { CustomerInfo } from "../../model/data.model";
import CustomersListHeader from "./CustomersListHeader.vue";
import CustomersListTable from "./CustomersListTable.vue";

interface CustomersListProps {
  customers: CustomerInfo[];
}
const props = defineProps<CustomersListProps>();
</script>

<template>
  <div class="customers-list">
    <CustomersListHeader />
    <CustomersListTable :customers="props.customers" />
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
  padding: 50px 20px;
}
</style>
