<script setup>
const props = defineProps({
    selectedDate: {
        type: Object,
        required: true
    }
})

const selectedMonth = computed(()=>{
    return props.selectedDate.format("MMMM YYYY")
})
</script>

<template>
    <div class="font-md font-medium text-black">
        {{ selectedMonth }}
    </div>
</template>