<template>
    <div
      class="bg-gray-800 h-screen flex items-center justify-center antialiased hover:subpixel-antialiased"
    >
      <div :class="color"  v-if="!dismissible">
        <div class="grid grid-cols-2 px-4">
          <div class="flex flex-row py-2">
            <component :is="props.icon" class="h-5 w-6"
              ><ExclamationCircleIcon class="h-5 w-6"
            /></component>
            <h1 class="text-lg font-semi-bold">
              {{ title }}
            </h1>
          </div>
          <div class="grid justify-items-end">
            <component :is="props.icon" class="h-5 w-6"
              ><XMarkIcon class="h-5 w-6" @click="dismissible = true"
            /></component>
            <!-- <XMarkIcon class="w-5 h-5" @click="dismissible = true" /> -->
          </div>
        </div>
        <p class="px-4">
          {{ body }}
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import {
    XMarkIcon,
    ExclamationCircleIcon
  } from "@heroicons/vue/24/solid";
  let dismissible = ref(null);
  let elementVisible = ref(true)
  const props = defineProps({
    title: {
      type: String,
    },
    body: {
      type: String,
    },
    color: {
      default: "",
    },
    icon: {
      default: "",
    },
    dismissible: {
      type: Boolean,
      default: "",
    },
    elementVisible: {
      default: true,
    },
  });
  // setTimeout(() => elementVisible.value = false, 5000)
  
  </script>
  