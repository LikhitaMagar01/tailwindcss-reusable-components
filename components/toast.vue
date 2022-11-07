<script setup>
import icon from "@/components/icon.vue";
let show = ref(true);
const props = defineProps({
  type: {
    default: "",
  },
  icon: {
    type: Boolean,
    default: true,
  },
  fullWidth: {
    default: "",
  },
  fullHeight: {
    default: "",
  },
  color: {
    type: String,
  },
  colorNum: {
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
      : props.type === "danger"
      ? "danger"
      : props.type === "warning"
      ? "warning"
      : props.type === "info"
      ? "info"
      : props.type === "light"
      ? "light"
      : props.type === "dark"
      ? "dark"
      : props.type === "link"
      ? "link"
      : `bg-${color}-${colorNum} text-${color}-${colorNum-400}`;
  let height = props.fullheight ? `h-${props.fullheight}` : "";
  let width = props.fullWidth ? `w-${props.fullWidth}` : "";
  return `${types} ${height} ${width}`;
}
</script>

<template>
    <div class="fixed bottom-2 right-2 min-w-min">
        <div class="flex gap-2 flex-row-reverse" v-show="show" :class="getClass()">
    <div class="text-center bg-white rounded-full w-5 h-5 flex place-items-center place-items-center">
      <icon
        v-if="icon"
        path="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
        iconSize="10"
        @click="show = !show"
      /></div>
      <slot />
  </div>
    </div>
  
</template>

<style>
.primary {
  @apply bg-sky-200 text-sky-600 text-center p-3 rounded-lg drop-shadow-sm;
}
.secondary {
  @apply text-gray-600 text-center p-3 rounded-lg drop-shadow-sm;
}
.success {
  @apply bg-green-200 text-green-600 text-center p-3 rounded-lg drop-shadow-sm;
}
.danger {
  @apply bg-red-200 text-red-600 text-center p-3 rounded-lg drop-shadow-sm;
}
.warning {
  @apply bg-yellow-200 text-yellow-600 text-center p-3 rounded-lg drop-shadow-sm;
}
.info {
  @apply bg-blue-200 text-blue-600 text-center p-3 rounded-lg drop-shadow-sm;
}
.light {
  @apply bg-white drop-shadow-sm;
}
.dark {
  @apply bg-black text-white drop-shadow-sm;
}
.link {
  @apply bg-white text-blue-600 underline underline-offset-1 drop-shadow-sm;
}
</style>
