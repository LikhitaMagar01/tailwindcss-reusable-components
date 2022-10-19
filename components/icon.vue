<script setup>
const props = defineProps({
  path: {
    type: String,
    required: "",
  },
  w: {
    type: String,
    default: "w-6",
  },
  h: {
    type: String,
    default: "h-6",
  },
  size: {
    type: [String, Number],
    default: null,
  },
  animate: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "",
  }
});
const spanClass = computed(() => `${props.w} ${props.h} text-${props.color}-500`);
const svgClass = computed(() => `${props.animate}`);
const iconSize = computed(() => props.size ?? 16);
function iconpath(){
  let icontype = props.path == 'roundspin' ? 'M18.364 5.636L16.95 7.05A7 7 0 1 0 19 12h2a9 9 0 1 1-2.636-6.364z': props.path = 'arrowbounce' ? 'M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 18c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8zm1-8h3l-4 4-4-4h3V8h2v4z' : `${props.path}`;
  return `${icontype}`
}
</script>

<template>
  <span :class="spanClass">
    <svg
      viewBox="0 0 24 24"
      :width="iconSize"
      :height="iconSize"
      class="inline-block"
      :class="svgClass"
    >
      <path fill="currentColor" :d="iconpath()" />
    </svg>
    <slot />
  </span>
</template>
