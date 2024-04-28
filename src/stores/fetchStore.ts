import { defineStore } from "pinia";
import { ref } from "vue";
import { useCustomersStore } from "./customersStore";

export const useFetchStore = defineStore("FetchStore", () => {
  const customersStore = useCustomersStore();
  // State
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);

  // Actions
  async function fetchCustomersFromApi(): Promise<void> {
    loading.value = true;
    try {
      fetch("https://customersapi.onrender.com/customers?_sort=givenName").then(
        (res) => res.json().then((res) => customersStore.setCustomersList(res))
      );
    } catch (err) {
      if (err instanceof Error) {
        error.value = err.toString();
      } else {
        new Error("Unknown error");
      }
    } finally {
      loading.value = false;
    }
  }

  async function fetchCustomerProductsFromApi(
    customerId: string
  ): Promise<void> {
    loading.value = true;
    try {
      return fetch(
        `https://customersapi.onrender.com/products?customerId=${customerId}`
      )
        .then((res) => res.json())
        .then((res) => customersStore.setCustomerProducts(res));
    } catch (err) {
      if (err instanceof Error) {
        error.value = err.toString();
      } else {
        new Error("Unknown error");
      }
    } finally {
      loading.value = false;
    }
  }
  // Getters

  return {
    // State

    // Actions
    fetchCustomersFromApi,
    fetchCustomerProductsFromApi,

    // Getters
  };
});
