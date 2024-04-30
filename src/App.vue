<script setup lang="ts">
import CustomersList from "./components/customersList/CustomersList.vue";
import CustomerDetailsCard from "./components/customerCard/CustomerDetailsCard.vue";
import { useCustomersStore } from "./stores/customersStore";
import { useCustomersService } from "./service/customersService";

const customersStore = useCustomersStore();
const customersService = useCustomersService();

customersService.fetchCustomersFromApi();
</script>

<template>
  <CustomersList
    :customers="customersStore.getSortedAndFilteredCustomers()"
    @text-changed="customersStore.filterText = $event"
  />
  <CustomerDetailsCard
    v-if="
      customersStore.isCustomerDetailsCardOpened &&
      customersStore.customerProducts &&
      customersStore.customerDetails
    "
    :customer-products="customersStore.customerProducts"
    :customer-details="customersStore.customerDetails"
  />
</template>
