<script setup lang="ts">
  import { reactive } from 'vue';

  interface Props {
    primary?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    primary: false,
  });

  const { primary } = reactive(props);
</script>

<template>
  <button class="btn" :class="{ primary }">
    My Button
    <slot />
  </button>
</template>

<style scoped>
button {
  padding: .6rem 1.25rem;
  background-color: #747bff;
  border: 0;
}
button:hover {
  background-color: #535bf2;
}
</style>
