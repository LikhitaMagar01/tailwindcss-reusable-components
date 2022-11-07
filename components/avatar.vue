<script setup>
import { computed } from "vue";
var open = ref(true)
const props = defineProps({
  username: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: null,
  },
  api: {
    type: String,
    default: "avataaars",
  },
  size: {
    type: [String, Number],
    default: null,
  },
  shape: {
    type: [String, Number],
    default: ""
  }
});
function getSize(){
    var iconWidth = `w-${props.size}`
    var iconHeight = `h-${props.size}`
    var border = props.shape == "" ? `rounded-full` :  `rounded-${props.shape}`
    return `${iconWidth} ${iconHeight} ${border}`
}
const openTab = ()=>{
  open.value = !open.value
};
const avatar = computed(
  () =>
    props.avatar ??
    `https://avatars.dicebear.com/api/${props.api}/${props.username.replace(
      /[^a-z0-9]+/i,
      "-"
    )}.svg`
);
const username = computed(() => props.username);
</script>

<template>
  <div class="card">
    <div @click="openTab()">
      <img
      :src="avatar"
      :alt="username"
      class="block bg-gray-100 dark:bg-slate-800 relative"
      :class="getSize()"
    />
    </div>
    
    <span title="name" class="name bg-gray-400 rounded p-1 -z-10 m-2 absolute top-0 opacity-100">{{username}}</span>
    <div v-show="open">
      <ul class="py-1 text-base text-gray-700 dark:text-gray-200">
      <li class="block">
        Dashboard
      </li>
      <li class="block">
        Settings
      </li>
      <li class="block">
        Earnings
      </li>
    </ul>
  </div>
    <slot />
  </div>
</template>

<style>
.name{
    visibility: hidden;
}
.card:hover .name{
    visibility: visible !important;
}
.block {
  @apply py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white
}
</style>