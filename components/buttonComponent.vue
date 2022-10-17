<template>
  <button
    :class="getClass()"
  >
    <slot />
  </button>
</template>
<script setup>
  const props = defineProps ({
    color: {
      type: String,
      default: "",
    },
    fromColor: {
      type: String,
      default: ""
    },
    toColor: {
      type: String,
      detaule: ""
    },
    fullWidth: {
      default: false,
    },
    fullHeight: {
      default: ''
    },
    colorNum: {
    },
    outlineNum: {
      default: ''
    },
    type: {
      default: ''
    },
    shadowSize: {
      default: ''
    },
    shadowColor: {
      default: ''
    },
    shadowColorNum: {
      default:''
    },
    roundedRadius: {
    },
  });
  function getClass(){
    let round = props.roundedRadius === 'sm' ? 'rounded-sm' : props.roundedRadius === 'md' ? 'rounded-md' : props.roundedRadius === 'lg' ? 'rounded-lg' : props.roundedRadius === 'xl' ? 'rounded-xl' : '' ;
    // let buttonColor = `bg-${props.color}-${props.colorNum}`
    let height = props.fullHeight ? `h-${props.fullHeight}` : '';
    let Width = props.fullWidth ? `w-${props.fullWidth}` : '';
    let type = props.type === 'primary' ? 'primary' : props.type === 'secondary' ? 'secondary' : props.type === 'success' ? 'success' : props.type === 'danger' ? 'danger' : props.type === 'warning' ? 'warning' : props.type === 'info' ? 'info' : props.type === 'light' ? 'light' : props.type === 'dark' ? 'dark' : props.type === 'link' ? 'link' : `bg-${props.color}-${props.colorNum}`;
    return `${round} ${type} ${height} ${Width}`; 
  };
</script>
<style>
.primary{
  @apply bg-sky-500 hover:bg-sky-600 drop-shadow-sm
}
.secondary{
  @apply bg-gray-500 hover:bg-gray-600 drop-shadow-sm
}
.success{
  @apply bg-green-500 hover:bg-green-600 drop-shadow-sm
}
.danger{
  @apply bg-red-500 hover:bg-red-600 drop-shadow-sm
}
.warning{
  @apply bg-yellow-500 hover:bg-yellow-600 drop-shadow-sm
}
.info{
  @apply bg-blue-400 hover:bg-blue-500 drop-shadow-sm
}
.light{
  @apply bg-white
}
.dark{
  @apply bg-black text-white
}
.link{
  @apply bg-white text-blue-600 underline underline-offset-1
}
</style>
<!-- <script setup>
import { h } from 'vue'
render(()=>{
  return()=>h('div', {}, "Hi 123");
})
</script> -->
<!-- https://github.com/primefaces/primevue/blob/master/src/components/button/Button.vue -->

<!-- https://github.com/justboil/admin-one-vue-tailwind/blob/master/src/components/BaseButtons.vue -->