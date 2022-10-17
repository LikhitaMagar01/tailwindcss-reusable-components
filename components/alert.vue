<script setup>
import icon from '@/components/icon.vue';
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
  size: {
    default: ""
  }
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
  let icons = icon.props.path === false ? 'p-3 text-left' : 'text-center p-3';
  console.log("props.icon", icon.props.path)
  return `${icons} ${types} ${height} ${width}`;
};
// function getDismiss(){
//   let dismiss = props.dismissible === 'true' ? true : false;
//   return `${dismiss}`;
// }
</script>

<template>
  <div v-show="!dismissible" :class="getClass()">
    <slot />
    <span>
      <icon v-if="icon" :path="icon" :size="iconSize" />
    </span>
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
  @apply bg-green-200 text-green-600 rounded-lg;
}
</style>
