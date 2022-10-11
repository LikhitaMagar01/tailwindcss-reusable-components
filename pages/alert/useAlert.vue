<template>
  <div
    class="bg-gray-800 h-screen flex items-center justify-center antialiased hover:subpixel-antialiased"
  >
    <div :class="color">
      <h1>
        {{ title }}
      </h1>
      <p>
        {{ body }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps(["color", "title", "body", "size", "icon"]);
</script>
// import { BeakerIcon , AcademicCapIcon} from '@heroicons/vue/24/solid'
