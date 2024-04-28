import { defineStore } from "pinia";
import { ref } from "vue";
import { CustomerInfo, ProductsInfo } from "../model/data.model";
import { useFetchStore } from "./fetchStore";

export const useCustomersStore = defineStore("CustomersStore", () => {
  const fetchStore = useFetchStore();

  // State
  const isCustomerDetailsCardOpened = ref<boolean>(false);
  const customerCardProducts = ref<ProductsInfo[]>([]);
  const customerCardDetails = ref<CustomerInfo | undefined>(undefined);
  const customerProductsCache = ref<ProductsInfo[]>([]);
  const customersList = ref<CustomerInfo[]>([]);

  // Actions
  async function openCustomerDetailsCard(customerId: string): Promise<void> {
    customerCardDetails.value = customersList.value.find(
      (customer) => customer.customerId === customerId
    );
    isCustomerDetailsCardOpened.value = true;
    if (
      customerProductsCache.value.length > 0 &&
      customerProductsCache.value.some(
        (product) => product.customerId === customerId
      )
    ) {
      customerCardProducts.value = customerProductsCache.value.filter(
        (product) => product.customerId === customerId
      );
    } else {
      fetchStore.fetchCustomerProductsFromApi(customerId);
    }
  }
  function closeCustomerDetailsCard(): void {
    isCustomerDetailsCardOpened.value = false;
    customerCardDetails.value = undefined;
    customerCardProducts.value = [];
  }
  function getCustomerFullName(customerInfo: CustomerInfo): string {
    return `${customerInfo.givenName} ${customerInfo.familyName1}`;
  }

  function setCustomersList(fetchedData: CustomerInfo[] | undefined): void {
    customersList.value = fetchedData ?? [];
    console.log("setCustomersList", customersList.value);
  }

  function setCustomerProducts(fetchedData: ProductsInfo[] | undefined): void {
    customerCardProducts.value = fetchedData ?? [];
  }

  return {
    // State
    isCustomerDetailsCardOpened,
    customerProducts: customerCardProducts,
    customers: customersList,
    customerDetails: customerCardDetails,

    // Actions
    openCustomerDetailsCard,
    closeCustomerDetailsCard,
    getCustomerFullName,
    setCustomersList,
    setCustomerProducts,

    // Getters
  };
});
