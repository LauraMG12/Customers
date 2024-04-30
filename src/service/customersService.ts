import { defineStore } from "pinia";
import { ref } from "vue";
import { useCustomersStore } from "../stores/customersStore";
import { ServiceState } from "../model/data.model";

export const useCustomersService = defineStore("CustomersService", () => {
  const customersStore = useCustomersStore();
  // State

  const serviceState = ref<ServiceState>({
    fetchCustomers: { loading: false, error: null },
    fetchProducts: { loading: false, error: null },
  });

  async function fetchCustomersFromApi(): Promise<void> {
    serviceState.value.fetchCustomers.loading = true;
    try {
      fetch("http://localhost:3000/customers?_sort=givenName").then((res) =>
        res.json().then((res) => customersStore.setCustomersList(res))
      );
    } catch (err) {
      if (err instanceof Error) {
        serviceState.value.fetchCustomers.error = err.toString();
      } else {
        new Error("Unknown error");
      }
    } finally {
      serviceState.value.fetchCustomers.loading = false;
    }
  }

  async function fetchCustomerProductsFromApi(
    customerId: string
  ): Promise<void> {
    serviceState.value.fetchProducts.loading = true;
    try {
      return fetch(`http://localhost:3000/products?customerId=${customerId}`)
        .then((res) => res.json())
        .then((res) => customersStore.setCustomerProducts(res));
    } catch (err) {
      if (err instanceof Error) {
        serviceState.value.fetchProducts.error = err.toString();
      } else {
        new Error("Unknown error");
      }
    } finally {
      serviceState.value.fetchProducts.loading = false;
    }
  }

  return {
    serviceState,
    fetchCustomersFromApi,
    fetchCustomerProductsFromApi,
  };
});
