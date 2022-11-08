<script setup>
const props = defineProps({
    title: {
        type: String,
        default: ""
    },
    progress: {
        type: String,
        required: true
    }
})
</script>

<template>
     <div>
        <div v-if="title">{{ title }}</div>
        <div class="rounded-full w-20 h-20">
          <div
            class="flex place-content-center place-items-center bg-red-500 text-xs font-medium text-blue-100 text-center leading-none rounded-full w-20 h-20" style="linear-gradient(clac, black 50%, transparent 50%),linear-gradient(90deg, black 50%, #19d50d 50%)"
            :style="{'--value': props.progress + '%'}"
          >
          <span class="flex place-content-center place-items-center h-16 w-16 bg-white rounded-full"><p class="text-black">{{progress}}</p></span>
          </div>
        </div>
    </div>
</template>

