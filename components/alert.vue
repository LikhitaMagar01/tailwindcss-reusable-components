<template>
  <div v-show="!dismissible" :class="getClass()">
    <slot />
  </div>
</template>

<script setup>
let dismissible = ref(false);
const props = defineProps({
  type: {
    default: "",
  },
  icon: {
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
};
function getDismiss(){
  let dismiss = props.dismissible === 'true' ? true : false;
  return `${dismiss}`;
}
</script>
text-gray-600 text-center p-3 rounded-lg
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
