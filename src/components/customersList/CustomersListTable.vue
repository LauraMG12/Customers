<script setup lang="ts">
import { CustomerInfo } from "../../model/data.model";
import { useCustomersStore } from "../../stores/customersStore";
import AppButton from "../shared/AppButton.vue";

interface CustomersListTableProps {
  customers: CustomerInfo[];
}
const props = defineProps<CustomersListTableProps>();

const customersStore = useCustomersStore();
</script>

<template>
  <table class="customers-list-table">
    <thead class="table-header">
      <tr>
        <th style="width: 45%">Customer id</th>
        <th style="width: 45%">Customer Name</th>
        <th style="width: 10%">Details</th>
      </tr>
    </thead>
    <p v-if="props.customers.length === 0">No results</p>
    <tbody v-else class="table-body">
      <tr v-for="customer in props.customers" :key="customer.customerId">
        <td>{{ customer.customerId }}</td>
        <td>
          {{ customersStore.getCustomerFullName(customer) }}
        </td>
        <td>
          <AppButton
            @click="customersStore.openCustomerDetailsCard(customer.customerId)"
            >Details</AppButton
          >
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="scss">
.customers-list-table {
  width: 100%;
  border-collapse: collapse;

  .table-header {
    tr {
      border-bottom: 1px solid #eeeeee;
    }
    th {
      padding-bottom: 15px;
      text-align: start;
      font-size: 14x;
      font-weight: 500;
      color: #b5b7c0;
    }
  }
  .table-body {
    tr {
      border-bottom: 1px solid #eeeeee;
    }
    td {
      padding: 20px 0;
      font-size: 14x;
      color: #292d32;
    }
  }
}
</style>
