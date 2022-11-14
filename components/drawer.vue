<script setup>
var showPopup = ref(false)
const props = defineProps({
    side: {
        type: String,
        required: true,
        default: ""
    },
    dismiss: {
        type: Boolean,
        required: false,
    }
})

const openTab = ()=>{
    showPopup.value = !showPopup.value
}

function getClass(){
    let getSide = props.side === "left" ? "modal absolute bg-white drop-shadow-md w-1/3 h-full transition duration-150" : props.side === "right" ? "absolute bg-white drop-shadow-md w-auto h-full right-0" : props.side === "up" ? "w-full h-auto top-0 right-0 absolute bg-white drop-shadow-md transition duration-300" :  props.side === "down" ? "w-full h-auto overflow-auto bottom-0 right-0 absolute bg-white drop-shadow-md" : ""
    let transit = showPopup.value === true ? "modal-active" : "";
    return `${getSide} ${transit}`
}
</script>

<template>
   <div class="relative text-center">
   <button class="btn_btn" @click="openTab">Drawer</button>
   <div  ref="button_ref" :class="[showPopup === false ? 'invisible' : 'visible']" class="absolute w-full bg-black bg-opacity-30 h-screen top-0 left-0" @click="showPopup=false">
    <div :class="getClass()">
        <span v-if="dismiss" class="flex justify-end">
           <icon @click="showPopup = false" path="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
       </span>
       <slot /> 
    </div>
   </div>
   
   </div>
</template>

<style>
.btn_btn {
  @apply text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700
}
.modal{
    left: -50%;
    transition: 0.3s;
}
.modal-active{
    left:0;
}
</style> 