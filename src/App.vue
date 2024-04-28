<script setup lang="ts">
import CustomersList from "./components/customersList/CustomersList.vue";
import CustomerDetailsCard from "./components/customerCard/CustomerDetailsCard.vue";
import { useCustomersListStore } from "./stores/customersStore";

const customersStore = useCustomersListStore();
</script>

<template>
  <CustomersList />
  <CustomerDetailsCard
    v-if="
      customersStore.isCustomerDetailsCardOpened &&
      customersStore.customerDetailsData
    "
    :customer-details="customersStore.customerDetailsData"
  />
</template>

<style scoped lang="scss"></style>
