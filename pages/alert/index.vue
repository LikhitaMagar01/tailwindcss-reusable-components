<script setup>
import alert from "@/components/alert.vue";
</script>

<template>
  <div>
    <div class="mt-10">
      <alert
      color="purple"
      colorNum="500"
      fullHeight="14"
      fullWidth="2/5"
      border="left"
      dismissible
      icon
    >
      A simple primary alert—check it out!
    </alert>
    </div>
    <div class="border-l-8 border-blue-200 text-center mt-10 bg-purple-500 text-blue-800 h-12 w-2/5">
      <div class="p-3">A simple primary alert—check it out!</div>
    </div>
    <div class="mt-10">
      <alert
      type="success"
      fullHeight="14"
      fullWidth="2/5"
      dismissible
      icon
      border="left"
    >
      A simple primary alert—check it out!
    </alert>
    </div>
    <div class="mt-10">
      <alert
      type="success"
      fullHeight="14"
      fullWidth="2/5"
      dismissible
      icon
    >
      A simple primary alert—check it out!
    </alert>
    </div>
    <div class="mt-10">
      <alert
      type="link"
      fullHeight="14"
      fullWidth="2/5"
      dismissible
      icon
      setTime
    >
      A simple primary alert—check it out!
    </alert>
    </div>
  </div>
</template>
<!-- bg-orange-300 -->