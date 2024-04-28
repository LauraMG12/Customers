<script setup lang="ts">
import { ProductsInfo } from "../../model/data.model";

interface ProductCardProps {
  productData: ProductsInfo;
}
const props = defineProps<ProductCardProps>();
</script>

<template>
  <div class="product-card">
    <p class="product-name">{{ props.productData.productName }}</p>
    <div class="product-details">
      <p>
        <span class="highlight">Product type: </span
        >{{ props.productData.productTypeName }}
      </p>
      <p v-if="props.productData.mbSpeed">
        <span class="highlight">Speed (mb): </span
        >{{ props.productData.mbSpeed }}
      </p>
      <p v-if="props.productData.gbData">
        <span class="highlight">Data (gb): </span>{{ props.productData.gbData }}
      </p>
      <p>
        <span class="highlight">Terminal num.: </span
        >{{ props.productData.numeracioTerminal }}
      </p>
      <p>
        <span class="highlight">Sold at: </span>{{ props.productData.soldAt }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-card {
  border-radius: 20px;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  border: 1px solid #f0edfc;
  gap: 20px;
  transition: all 0.25s ease;
  @media (hover: hover) {
    &:hover {
      border: 1px solid #404b52;
    }
  }

  .product-name {
    font-size: 20px;
    font-weight: 600;
    text-align: center;
  }
  .product-details {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
}
</style>
