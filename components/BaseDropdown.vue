<template>
 <div>
   <button
     @click="open = !open"
     class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
     :aria-expanded="isOpen"
     :aria-controls="`collapse${_uid}`"
   >
   {{ selected }}
     <slot name="title" class="flex items-center"/>
     <svg
       class="w-5 h-6 rotate-180 shrink-0"
       :class="{
         'rotate-180': isOpen,
         'rotate-0': !isOpen,
       }"
       fill="currentColor"
       stroke="currentColor"
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 26 20"
       aria-hidden="true"
     >
       <path
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill-rule="evenodd"
       />
     </svg>
   </button>
   <div v-show="open">
    <div
      class="bg-gray-500 text-white block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white " 
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
 </div>
</template>

<script setup>
let emit = defineEmits(['input'])
let isOpen = ref(false)
let selected = ref('click for option')
let open = ref(false)
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