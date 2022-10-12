<template>
    <div class="m-5">
       <use-button depressed="normal" color="red" colorNum="500" outlineNum="2" fullWidth="20" fullHeight="10" shadowSize="xl" shadowColorNum="500" shadowColor="black" roundedRadius="xl">close</use-button>
    </div>
    <div class="m-5">
        <button class="bg-blue-500 w-20 h-10 hover:bg-red-500 bg-cyan-500 shadow-xl shadow-red-500/50 rounded-xl">
        hello
    </button>
    </div>
    
</template>

<script setup>
import useButton from './useButton.vue';
</script>