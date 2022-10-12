<template>
    <button :class="{'bg-gray-200 hover:bg-gray-400 px-5 disabled:cursor-not-allowed':false,
'bg-red-200 hover:bg-red-400 animate-spin': type==='primary',
'bg-orange-200 hover:bg-orange-400 animate-bounce': type==='secondary',}" :disabled="processing">
        <slot />
    </button>
</template>

<script setup>
defineProps({
    type: {
        type: String,
        default: 'primary'
    },
    processing: {
        type: Boolean,
        default: false
    }
})
</script>