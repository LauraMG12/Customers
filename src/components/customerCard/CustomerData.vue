<script setup lang="ts">
import { useCustomersStore } from "../../stores/customersStore";

import { CustomerInfo } from "../../model/data.model";

const customersStore = useCustomersStore();

interface CustomerInfoProps {
  customerData: CustomerInfo;
}
const props = defineProps<CustomerInfoProps>();
</script>

<template>
  <section class="customer-info">
    <p class="title">Client {{ props.customerData.customerId }}</p>
    <div class="info">
      <p>
        <span class="highlight"> Name:</span>
        {{ customersStore.getCustomerFullName(props.customerData) }}
      </p>
      <p>
        <span class="highlight">Phone:</span> {{ props.customerData.phone }}
      </p>
      <p>
        <span class="highlight"
          >{{ props.customerData.docType.toUpperCase() }}: </span
        >{{ props.customerData.docNum }}
      </p>
      <p>
        <span class="highlight">Email: </span>{{ props.customerData.email }}
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.customer-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
  .info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    @media (width < 750px) {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(4, auto);
    }
  }
}
</style>
