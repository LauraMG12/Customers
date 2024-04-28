<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";
import { useCustomersStore } from "../../stores/customersStore";
import { CustomerInfo, ProductsInfo } from "../../model/data.model";
import CustomerData from "./CustomerData.vue";
import ProductsData from "./ProductsData.vue";
import Close from "../shared/icons/Close.vue";

const customersStore = useCustomersStore();

interface CustomerDetailsCardProps {
  customerDetails: CustomerInfo;
  customerProducts: ProductsInfo[];
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
      <CustomerData :customer-data="props.customerDetails" />
      <ProductsData :products-data="props.customerProducts" />
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
    margin: 25px 20px;
    max-width: 968px;
    width: 100%;
    max-height: calc(100% - 80px);
    background-color: #ffffff;
    border-radius: 30px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    position: relative;
    overflow-y: hidden;
    @media (width < 750px) {
      padding: 30px 20px;
    }
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
