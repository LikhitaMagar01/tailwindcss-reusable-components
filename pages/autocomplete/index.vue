<script setup>
import autocomplete from '@/components/autocomplete.vue';
</script>

<template>
    <autocomplete
      :options="['go', 'python', 'rust', 'javascript']"
      :default="'go'"
      class="select"
      @input="alert(displayToKey($event))"
    />
</template>
