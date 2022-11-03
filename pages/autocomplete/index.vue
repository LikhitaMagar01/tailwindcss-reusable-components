<script setup>
let assignment = ref(['you belong with me', 'dress', 'permanent marker', 'lucky you', 'wildest dream'])
</script>

<template>
  <div>
    <autocomplete
      :options="assignment"
      placeholder="Type here ..."
    />
  </div>
</template>
