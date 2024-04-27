<script setup lang="ts">
import { ProductsInfo } from "../../data/fakeData.model";
import AppPills from "../shared/AppPills.vue";

interface CustomerProductsProps {
  products: ProductsInfo[];
}
const props = defineProps<CustomerProductsProps>();
</script>

<template>
  <div class="customer-products">
    <AppPills v-for="product in props.products" :key="product._id">{{
      product.productName
    }}</AppPills>
  </div>
</template>

<style scoped lang="scss">
.customer-products {
  display: flex;
  gap: 10px;
}
</style>
