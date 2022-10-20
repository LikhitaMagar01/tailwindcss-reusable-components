<script setup>
import autocomplete from '@/components/autocomplete.vue';
let assignment = ref(['you belong with me', 'dress', 'permanent marker', 'lucky you', 'wildest dream'])
</script>

<template>
    <autocomplete
      :options="assignment"
      :default="'go'"
      class="select"
      @input="alert(displayToKey($event))"
    />
</template>
