<script setup lang="ts">
import { computed, ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import Arrow from "../shared/icons/Arrow.vue";
import { SortType } from "../../model/data.model";
import { useCustomersStore } from "../../stores/customersStore";

const customersStore = useCustomersStore();

const isDropdownOpened = ref<boolean>(false);
const sortDropdownRef = ref(null);
const customerNameText = "Customer name";
const customerIdText = "Customer ID";
const selectedTypeText = computed<string | null>(() => {
  switch (customersStore.sortType) {
    case SortType.NAME:
      return customerNameText;
    case SortType.ID:
      return customerIdText;
    default:
      new Error("the type selected is not defined");
      return null;
  }
});

function toggleDropdown(): void {
  isDropdownOpened.value = !isDropdownOpened.value;
}
function closeDropdown(): void {
  isDropdownOpened.value = false;
}

onClickOutside(sortDropdownRef, closeDropdown);
</script>

<template>
  <div ref="sortDropdownRef" class="sort-dropdown" @click="toggleDropdown()">
    <div class="sort-type">
      <label class="dropdown-label"
        >Sort by:
        <span class="selected-option">{{ selectedTypeText }}</span></label
      >
      <Arrow />
    </div>
    <div v-if="isDropdownOpened" class="dropdown-select">
      <option
        class="dropdown-option"
        @click="customersStore.setSelectedSortType(SortType.NAME)"
      >
        {{ customerNameText }}
      </option>
      <option
        class="dropdown-option"
        @click="customersStore.setSelectedSortType(SortType.ID)"
      >
        {{ customerIdText }}
      </option>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sort-dropdown {
  border-radius: 10px;
  padding: 10px 15px;
  background-color: #f9fbff;
  position: relative;

  @media (hover: hover) {
    &:hover,
    & * {
      cursor: pointer;
    }
  }
  .sort-type {
    display: flex;
    align-items: center;
    gap: 5px;
    .dropdown-label {
      color: #7e7e7e;
      .selected-option {
        font-weight: 600;
      }
    }
  }
  .dropdown-select {
    position: absolute;
    border-radius: 10px;
    background-color: #f9fbff;
    top: calc(100% + 5px);
    left: 0;
    width: 100%;
    overflow: hidden;
    z-index: 10;
    .dropdown-option {
      width: 100%;
      padding: 5px 15px;
      transition: all 0.2s ease;

      @media (hover: hover) {
        &:hover {
          background-color: #3d3c42;
          color: #fff;
        }
      }
    }
  }
}
</style>
