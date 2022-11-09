<template>
    <div>
     <div
       class="w-50 bg-gray-500 text-white block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white " 
       v-for="(option, i) of options"
       :key="i"
       @click="
       selected = option;
       open = false;
       emit('input', option)
       ">
       {{ option }}
       </div>
     </div>
 </template>
 
 <script setup>
 let emit = defineEmits(['input'])
 defineProps({
  options: {
       type: Array,
       required: true,
     },
     default: {
       type: String,
       required: false,
       default: null,
     },
     tabindex: {
       type: Number,
       required: false,
       default: 0,
     },
 })
 </script>