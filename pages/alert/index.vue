<template>
    <div>
        <useAlert v-show="elementVisible" icon="ExclamationCircleIcon" color="bg-red-100 grid grid-rows-3 flex items-center success flex p-2 text-sm rounded-lg text-green-700" title="Alert Info!!" body="More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content." />
    </div>
</template>

<script setup>
import useAlert from './useAlert.vue';
let elementVisible = ref(true)
setTimeout(() => elementVisible.value = false, 5000)
</script>