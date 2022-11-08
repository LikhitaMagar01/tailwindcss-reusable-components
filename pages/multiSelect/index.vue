<script setup>
import multiselect from '@/components/multiSelect.vue';
let assignment = ref(['you belong with me', 'dress', 'permanent marker', 'lucky you', 'wildest dream'])
</script>

<template>
    <multiselect
      :options="assignment"
    />
</template>
