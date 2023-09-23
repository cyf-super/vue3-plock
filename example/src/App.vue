<script setup lang="ts">
import { waterFall } from 'vue3-plock';
import { datasource } from './assets/datasource';
</script>

<template>
  <waterFall
    :data="datasource"
    :config="{
      columns: [1, 2, 3],
      gap: [24, 12, 6],
      media: [640, 1024, 1280]
    }"
    v-slot="slotProps"
  >
    <img
      :src="slotProps.src"
      alt=""
      :style="{ width: '100%', height: 'auto' }"
    />
  </waterFall>
</template>

<style scoped></style>
