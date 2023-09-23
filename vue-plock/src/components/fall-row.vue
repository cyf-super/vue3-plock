<script setup lang="ts">
const prop = defineProps({
  gap: {
    type: String,
    require: true
  }
});
</script>

<template>
  <div
    :style="{
      display: 'grid',
      rowGap: prop.gap,
      gridTemplateColumns: `minmax(0, 1fr)`
    }"
  >
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped></style>
