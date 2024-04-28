<script setup lang="ts">
import { ProductsInfo } from "../../model/data.model";
import ProductCard from "./ProductCard.vue";

interface ProductsInfoProps {
  productsData: ProductsInfo[];
}
const props = defineProps<ProductsInfoProps>();
</script>

<template>
  <div class="products-info">
    <p class="title">Products</p>
    <div class="info">
      <ProductCard
        v-for="product in props.productsData"
        :key="product._id"
        :product-data="product"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.products-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
  .info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 15px;
  }
}
</style>
