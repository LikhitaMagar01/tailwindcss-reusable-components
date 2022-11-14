<script setup>
var showPopup = ref(false)
var button_ref = ref(null)
const props = defineProps({
    side: {
        type: String,
        required: true,
        default: ""
    }
})

function getClass(){
    let getSide = props.side === "left" ? "absolute bg-white drop-shadow-md w-80 h-full" : props.side === "right" ? "absolute bg-white drop-shadow-md w-80 h-full right-0" : props.side === "up" ? "w-full h-1/2 top-0 right-0 absolute bg-white drop-shadow-md" :  props.side === "down" ? "w-full h-1/2 bottom-0 right-0 absolute bg-white drop-shadow-md" : ""
    return `${getSide}`
}
</script>
<!--  -->
<template>
   <div class="relative text-center">
   <button class="btn_btn" @click="showPopup = ! showPopup">Drawer</button>
   <div  ref="button_ref" @click.stop v-show="showPopup" class="absolute w-full bg-black bg-opacity-30 h-screen top-0 left-0"  >
    <div :class="getClass()">
       <slot /> 
    </div>
   </div>
   
   </div>
</template>

<style>
.btn_btn {
  @apply text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700
}
</style> 