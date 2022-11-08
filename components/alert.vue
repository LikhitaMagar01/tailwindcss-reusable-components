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
  dismissible: {
    type: Boolean,
    default: "",
  },
  elementVisible: {
    default: true,
  },
  fullWidth: {
    default: "",
  },
  fullHeight: {
    default: "",
  },
  setTime: {
    type: Boolean,
    default: false,
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
  let textStyle =
    props.dismissible || props.icon === true ? "grid grid-cols-6" : "";
  let setTimer =
    props.setTime === true ? setTimeout(() => (show.value = false), 5000) : "";
  return `${setTimer} ${textStyle} ${types} ${height} ${width}`;
}
</script>

<template>
  <div v-show="show" :class="getClass()">
    <div
      :class="{
        'col-start-1 col-end-5': props.icon || props.dismissible == true,
        'text-center': props.icon || props.dismissible == false,
      }"
    >
      <span v-if="props.icon == true ? show : !show">
        <icon
          v-if="icon"
          path="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
          iconSize="10"
        />
      </span>
      <slot />
    </div>

    <span
      v-if="props.dismissible == true ? show : !show"
      class="col-start-6 place-items-end"
    >
      <icon
        v-if="icon"
        path="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
        iconSize="10"
        @click="show = !show"
      />
    </span>
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
