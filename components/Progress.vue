<script setup>
const props = defineProps({
    title: {
        type: String,
        default: ""
    },
    progress: {
        type: String,
        required: true
    },
    size: {
        type: String,
    }
})

function getShape(){
    var shape = props.size === "md" ? `p-1` : props.size === "lg" ?  `p-1.5` : `0.5`
    return `${shape}`
}

//todo
//progress lai tooltip
//color change in change with progress number
</script>

<template>
    <div>
        <div v-if="title">{{ title }}</div>
        <div class="bg-gray-200 rounded-full">
          <div
            class="bg-red-500 text-xs font-medium text-blue-100 text-center leading-none rounded-full" :class="getShape()"
            :style="{'width': props.progress + '%'}"
          >
          <span>{{progress}}</span>
          </div>
        </div>
    </div>
    
</template>

