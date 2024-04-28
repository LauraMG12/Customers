<script setup lang="ts">
import { customers } from "../../data/FakeData";
import AppButton from "../shared/AppButton.vue";
import { useCustomersListStore } from "../../stores/customersStore";

const customersStore = useCustomersListStore();
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
    <tbody class="table-body">
      <tr v-for="customer in customers" :key="customer.customerInfo.customerId">
        <td>{{ customer.customerInfo.customerId }}</td>
        <td>
          {{ customersStore.getCustomerFullName(customer.customerInfo) }}
        </td>
        <td>
          <AppButton @click="customersStore.openCustomerDetailsCard(customer)"
            >Details</AppButton
          >
        </td>
      </tr>
    </tbody>
    <tfoot>
      <TablePagination />
    </tfoot>
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
