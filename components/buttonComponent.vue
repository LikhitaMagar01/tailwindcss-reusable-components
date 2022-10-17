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
    let type = props.type === 'primary' ? 'bg-sky-500 hover:bg-sky-600 drop-shadow-sm' : props.type === 'secondary' ? 'bg-gray-500 hover:bg-gray-600 drop-shadow-sm' : props.type === 'success' ? 'bg-green-500 hover:bg-green-600 drop-shadow-sm' : props.type === 'danger' ? 'bg-red-500 hover:bg-red-600 drop-shadow-sm' : props.type === 'warning' ? 'bg-yellow-500 hover:bg-yellow-600 drop-shadow-sm' : props.type === 'info' ? 'bg-blue-400 hover:bg-blue-500 drop-shadow-sm' : props.type === 'light' ? 'bg-white' : props.type === 'dark' ? 'bg-black text-white' : props.type === 'link' ? 'bg-white text-blue-600 underline underline-offset-1' : `bg-${props.color}-${props.colorNum}`;
    return `${round} ${type} ${height} ${Width}`; 
  };
</script>

<!-- <script setup>
import { h } from 'vue'
render(()=>{
  return()=>h('div', {}, "Hi 123");
})
</script> -->
<!-- https://github.com/primefaces/primevue/blob/master/src/components/button/Button.vue -->

<!-- https://github.com/justboil/admin-one-vue-tailwind/blob/master/src/components/BaseButtons.vue -->