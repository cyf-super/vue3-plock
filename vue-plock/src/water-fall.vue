<script setup lang="ts">
import type { PropType } from 'vue';
import { PropConfigType, useMediaValues } from './hooks/useMedia';
import {
  createSafeArray,
  createChunks,
  createDataColumns
} from './utils/index';
import fallRow from './components/fall-row.vue';

const props = defineProps({
  data: {
    type: Array as PropType<string[]>,
    default: () => []
  },
  config: {
    type: Object as PropType<PropConfigType>,
    default: () => ({})
  }
});

const info = useMediaValues(props.config);

const chunks = createChunks(props.data, info.columns);

const dataColumns = createDataColumns(chunks, info.columns);
</script>

<template>
  <div
    :style="{
      display: 'grid',
      alignItems: 'start',
      gridColumnGap: info.gap,
      gridTemplateColumns: `repeat(${info.columns}, minmax(0, 1fr))`
    }"
  >
    <fallRow
      v-for="(columns, index) in dataColumns"
      :key="index"
      :gap="info.gap"
    >
      <slot
        v-for="(column, index) in columns"
        :key="index"
        :item="column"
      ></slot>
    </fallRow>
  </div>
</template>

<style lang="scss" scoped></style>
