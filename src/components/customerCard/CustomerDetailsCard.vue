<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";
import { useCustomersListStore } from "../../stores/customersStore";
import { Customer } from "../../data/fakeData.model";
import CustomerInfo from "./CustomerInfo.vue";
import ProductsInfo from "./ProductsInfo.vue";
import Close from "../shared/icons/Close.vue";

const customersStore = useCustomersListStore();

interface CustomerDetailsCardProps {
  customerDetails: Customer;
}
const props = defineProps<CustomerDetailsCardProps>();
const cardWrapperRef = ref(null);

onClickOutside(cardWrapperRef, customersStore.closeCustomerDetailsCard);
</script>

<template>
  <div class="customer-details-card">
    <div ref="cardWrapperRef" class="card-wrapper">
      <Close
        class="close-button"
        @click="customersStore.closeCustomerDetailsCard()"
      />
      <CustomerInfo :customer-data="props.customerDetails.customerInfo" />
      <ProductsInfo :products-data="props.customerDetails.productsInfo" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.customer-details-card {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #5d5d5d80;
  .card-wrapper {
    max-width: 968px;
    max-height: 812px;
    margin: 25px 20px;
    width: 100%;
    max-height: 100%;
    background-color: #ffffff;
    border-radius: 30px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    position: relative;
    .close-button {
      position: absolute;
      top: 40px;
      right: 40px;
      @media (hover: hover) {
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
