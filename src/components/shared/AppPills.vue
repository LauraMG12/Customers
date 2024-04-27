<script setup lang="ts"></script>

<template>
  <div class="app-pills">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.app-pills {
  padding: 5px;
  background-color: #f9fbff;
  border-radius: 5px;
  width: fit-content;
  font-size: 12px;
}
</style>
