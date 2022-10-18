<script setup>
import icon from "@/components/icon.vue";
const props = defineProps({
  type: {
    default: "",
  },
  dismissible: {
    type: Boolean,
    default: "",
  },
  elementVisible: {
    default: true,
  },
  fullWidth: {
    default: false,
  },
  fullHeight: {
    default: "",
  },
  size: {
    default: "",
  },
});
function getClass() {
  let types =
    props.type === "primary"
      ? "primary"
      : props.type === "secondary"
      ? "secondary"
      : props.type === "success"
      ? "success"
      : "";
  let height = props.fullheight ? `h-${props.fullheight}` : "";
  let width = props.fullWidth ? `w-${props.fullWidth}` : "";
  return `${types} ${height} ${width}`;
}
const show = () => {
  props.dismissible = !props.dismissible
}
</script>

<template>
  <div :class="getClass()">
    <slot />
    <!-- <span>
      <icon v-if="icon" :path="icon" :size="iconSize" />
    </span> -->
  </div>
</template>

<style>
.primary {
  @apply bg-sky-200 text-sky-600 text-center p-3 rounded-lg;
}
.secondary {
  @apply text-gray-600 text-center p-3 rounded-lg;
}
.success {
  @apply bg-green-200 text-green-600 text-center p-3 rounded-lg;
}
</style>
