<script setup>
import icon from "@/components/icon.vue";
let show = ref(true);
const props = defineProps({
  border: {
    type: String,
  },
  type: {
    default: "",
  },
  elementVisible: {
    default: true,
  },
  fullWidth: {
    type: String,
    required: false

  },
  fullHeight: {
    required: false
  },
  color: {
    type: String,
  },
  colorNum: {
    default: ""
  },
  icon: {
    type: Boolean,
    default: false,
  },
  dismissible: {
    type: Boolean,
    default: false,
  },
  setTime: {
    type: Boolean,
    default: false,
  },
});
const getClass = ()=>{
  let getborder = props.border === "left" ? `border-l-8 border-red-200` : "";
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
      : `bg-purple-300 text-purple-600`;
    // var getType = props.color === 'orange-500' ? 'orange-500' : '';
  let height = props.fullheight ? `h-${props.fullheight}` : "h-14";
  let width = props.fullWidth === "1/5" ? `w-1/5` : props.fullWidth === "2/5" ? `w-2/5` : props.fullWidth === "3/5" ? `w-3/5` : props.fullWidth === "4/5" ? `w-4/5` : props.fullWidth === "5/5" ? `w-5/5` : props.fullWidth === "5/5" ? `w-5/5` : props.fullWidth ? `w-${props.fullWidth}` : "w-full";
  let textStyle =
    props.dismissible || props.icon ? "grid grid-cols-6" : "";
  let setTimer =
    props.setTime === true ? setTimeout(() => (show.value = false), 5000) : "";
  return `${getborder} ${setTimer} ${textStyle} ${types} ${height} ${width}`;
}
</script>

<template>
  <div v-show="show" :class="getClass()">
    <div
      :class="{
        'col-start-1 col-end-5': props.icon || props.dismissible,
        'text-center': props.icon || props.dismissible,
      }"
    >
      <span v-if="props.icon ? show : !show">
        <icon
          v-if="icon"
          path="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
          iconSize="10"
        />
      </span>
      <slot />
    </div>

    <span
      v-if="props.dismissible ? show : !show"
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
.success{
  @apply bg-red-300
}
</style>
