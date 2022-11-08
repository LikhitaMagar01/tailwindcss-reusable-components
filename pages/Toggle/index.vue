<template>
 <div :class="toggleState ? 'bg-gray-700': 'bg-white'" class="flex h-screen justify-center items-center pt-12">
 <BaseToggle  v-model="toggleState">
 </BaseToggle>
 </div>
</template>

<script setup>
const toggleState = ref(true)

</script>