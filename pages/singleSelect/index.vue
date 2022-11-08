<script setup>
import singleSelect from '@/components/singleSelect.vue';
let assignment = ref(['you belong with me', 'dress', 'permanent marker', 'lucky you', 'wildest dream'])
</script>

<template>
    <singleSelect
      :options="assignment"
      :default="'dress'"
    />
</template>
