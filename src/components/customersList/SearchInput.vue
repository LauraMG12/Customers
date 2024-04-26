<script setup lang="ts">
import { ref } from "vue";
import Arrow from "../shared/icons/Search.vue";

interface AppInputEmits {
  (event: "text-changed", value: string): void;
  (event: "focus-changed", value: boolean): void;
}
const emit = defineEmits<AppInputEmits>();
const inputText = ref<string>("");
</script>

<template>
  <div class="search-input">
    <Arrow />
    <input
      :value="inputText"
      type="text"
      placeholder="Search"
      @input="emit('text-changed', ($event.target as HTMLInputElement).value)"
      @focus="emit('focus-changed', true)"
    />
  </div>
</template>

<style scoped lang="scss">
.search-input {
  position: relative;
  border-radius: 10px;
  user-select: none;
  display: flex;
  gap: 5px;
  align-items: center;
  margin: 0;
  padding: 10px 15px;
  max-width: 200px;
  background-color: #f9fbff;

  input {
    font-size: 12px;
    border: none;
    outline: 0;
    box-shadow: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    background-color: transparent;

    &::placeholder {
      color: #b5b7c0;
    }
  }
}
</style>
