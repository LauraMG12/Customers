<script setup lang="ts">
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

import Arrow from "../shared/icons/Arrow.vue";

const isDropdownOpened = ref<boolean>(false);
const sortDropdownRef = ref(null);
const selectedOption = ref<string | undefined>();
const defaultSelectedOption = ref<string>("Customer name");

function toggleDropdown(): void {
  isDropdownOpened.value = !isDropdownOpened.value;
}
function closeDropdown(): void {
  isDropdownOpened.value = false;
}
function setSelected(selected: string): void {
  selectedOption.value = selected;
}
onClickOutside(sortDropdownRef, closeDropdown);
</script>

<template>
  <div ref="sortDropdownRef" class="sort-dropdown" @click="toggleDropdown()">
    <div class="sort-type">
      <label class="dropdown-label"
        >Sort by:
        <span class="selected-option">{{
          selectedOption ?? defaultSelectedOption
        }}</span></label
      >
      <Arrow />
    </div>
    <div v-if="isDropdownOpened" class="dropdown-select">
      <option class="dropdown-option" @click="setSelected('Customer name')">
        Customer name
      </option>
      <option class="dropdown-option" @click="setSelected('Customer id')">
        Customer id
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
