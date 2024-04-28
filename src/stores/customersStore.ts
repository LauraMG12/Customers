import { defineStore } from "pinia";
import { ref } from "vue";
import { Customer, CustomerInfo } from "../data/fakeData.model";

export const useCustomersListStore = defineStore("CustomersStore", () => {
  // State
  const isCustomerDetailsCardOpened = ref<boolean>(false);
  const customerDetailsData = ref<Customer | undefined>(undefined);

  // Actions
  function openCustomerDetailsCard(customer: Customer): void {
    isCustomerDetailsCardOpened.value = true;
    customerDetailsData.value = customer;
  }
  function closeCustomerDetailsCard(): void {
    isCustomerDetailsCardOpened.value = false;
    customerDetailsData.value = undefined;
  }
  function getCustomerFullName(customerInfo: CustomerInfo): string {
    return `${customerInfo.givenName} ${customerInfo.familyName1}`;
  }

  return {
    // State
    isCustomerDetailsCardOpened,
    customerDetailsData,

    // Actions
    openCustomerDetailsCard,
    closeCustomerDetailsCard,
    getCustomerFullName,

    // Getters
  };
});
