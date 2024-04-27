<script setup lang="ts"></script>

<template>
  <button class="app-button"><slot /></button>
</template>

<style scoped lang="scss">
.app-button {
  background-color: #f5f5f5;
  border: 1px solid #404b52;
  border-radius: 5px;
  padding: 5px 15px;
  transition: all 0.2s ease;
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      background-color: #404b52;
      color: #f5f5f5;
    }
  }
}
</style>
