<script setup lang="ts">
import { customers } from "../../data/FakeData";
import { CustomerInfo } from "../../data/fakeData.model";

function getCustomerFullName(customerInfo: CustomerInfo): string {
  return `${customerInfo.givenName} ${customerInfo.familyName1}`;
}
</script>

<template>
  <table class="customers-list-table">
    <thead class="table-header">
      <tr>
        <th>Customer id</th>
        <th>Customer Name</th>
        <th>Products</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody class="table-body">
      <tr v-for="customer in customers" :key="customer.customerInfo.customerId">
        <td>{{ customer.customerInfo.customerId }}</td>
        <td>
          {{ getCustomerFullName(customer.customerInfo) }}
        </td>
        <td><CustomerProducts :products="customer.productsInfo" /></td>
        <td>
          <Button>Details</Button>
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
    }
  }
  .table-body {
    tr {
      border-bottom: 1px solid #eeeeee;
    }
    td {
      padding: 20px 0;
    }
  }
}
</style>
