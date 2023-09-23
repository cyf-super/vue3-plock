import { reactive, onUnmounted } from 'vue';

export interface PropConfigType {
  gap: [number, ...number[]];
  columns: [number, ...number[]];
  media?: [number, ...number[]];
}

export function useMediaValues(config: PropConfigType) {
  const info = reactive({
    columns: 1,
    gap: 1
  });

  const { columns, gap, media } = config;
  if (!media) {
    return setInfo(0);
  }

  const mediaQueries = media.map(media =>
    window.matchMedia(`(min-width: ${media}px)`)
  );

  const onSizeChange = () => {
    let matches = 0;

    mediaQueries.forEach(mediaQuery => {
      mediaQuery.matches && matches++;
    });

    const idx = Math.min(mediaQueries.length - 1, matches);
    setInfo(idx);
  };

  onSizeChange();

  for (let mediaQuery of mediaQueries) {
    mediaQuery.addEventListener('change', onSizeChange);
  }

  onUnmounted(() => {
    for (let mediaQuery of mediaQueries) {
      mediaQuery.removeEventListener('change', onSizeChange);
    }
  });

  function setInfo(idx: number) {
    info.columns = columns[idx];
    info.gap = gap[idx];
    return info;
  }

  return info;
}
