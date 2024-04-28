import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { CustomerInfo, ProductsInfo, SortType } from "../model/data.model";
import { useFetchStore } from "./fetchStore";

export const useCustomersStore = defineStore("CustomersStore", () => {
  const fetchStore = useFetchStore();

  // State
  const isCustomerDetailsCardOpened = ref<boolean>(false);
  const customerCardProducts = ref<ProductsInfo[]>([]);
  const customerCardDetails = ref<CustomerInfo | undefined>(undefined);
  const customerProductsCache = ref<ProductsInfo[]>([]);
  const customersList = ref<CustomerInfo[]>([]);
  const filterText = ref<string>("");
  const sortType = ref<SortType>(SortType.ID);

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
  }

  function setCustomerProducts(fetchedData: ProductsInfo[] | undefined): void {
    customerCardProducts.value = fetchedData ?? [];
  }

  function getSortedAndFilteredCustomers(): CustomerInfo[] {
    if (sortType.value === SortType.NAME) {
      return filteredUsers.value;
    } else {
      return filteredUsers.value.toSorted((a, b) => {
        return a.customerId.localeCompare(b.customerId);
      });
    }
  }

  function setSelectedSortType(selectedType: SortType): void {
    sortType.value = selectedType;
  }

  // Getters
  const filteredUsers = computed<CustomerInfo[]>(() =>
    filterText.value !== "" && filterText.value.length > 0
      ? customersList.value.filter(
          (customer) =>
            customer.givenName
              .toLocaleLowerCase()
              .includes(filterText.value.toLocaleLowerCase()) ||
            customer.familyName1
              .toLocaleLowerCase()
              .includes(filterText.value.toLocaleLowerCase()) ||
            customer.customerId
              .toLocaleLowerCase()
              .includes(filterText.value.toLocaleLowerCase())
        )
      : customersList.value
  );

  return {
    // State
    filterText,
    sortType,
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
    getSortedAndFilteredCustomers,
    setSelectedSortType,

    // Getters
  };
});
