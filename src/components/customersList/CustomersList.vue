<script setup lang="ts">
import { CustomerInfo } from "../../model/data.model";
import CustomersListHeader from "./CustomersListHeader.vue";
import CustomersListTable from "./CustomersListTable.vue";

interface CustomersListProps {
  customers: CustomerInfo[];
}
const props = defineProps<CustomersListProps>();

interface CustomersListEmits {
  (event: "text-changed", value: string): void;
}
const emit = defineEmits<CustomersListEmits>();
</script>

<template>
  <div class="customers-list">
    <CustomersListHeader @text-changed="emit('text-changed', $event)" />
    <CustomersListTable :customers="props.customers" />
  </div>
</template>

<style scoped lang="scss">
.customers-list {
  display: grid;
  grid-template-rows: min-content 1fr;
  grid-template-columns: 1fr;
  align-items: start;
  justify-content: center;

  gap: 50px;
  height: 100vh;
  max-height: 100vh;
  max-width: 1065px;

  margin: 0 auto;
  padding: 50px 20px;
}
</style>
