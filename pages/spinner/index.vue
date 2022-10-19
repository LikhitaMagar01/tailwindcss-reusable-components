<script setup>
import spinner from '@/components/spinner.vue'
</script>

<template>
    <div class="m-10">
        <button class="bg-blue-200 p-5 rounded drop-shadow-sm w-50 h-10 grid grid-cols-2">
        <spinner iconContext="20" spinColor="red" animation="animate-spin" load="roundspin" />
        hello
    </button>
    </div>
    
    <spinner iconContext="50" spinColor="red" animation="animate-spin" load="roundspin" />
    <spinner iconContext="50" spinColor="blue" animation="animate-bounce" load="arrowbounce" />
</template>
