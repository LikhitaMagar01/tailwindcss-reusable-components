<template>
  <div
    class="bg-gray-800 h-screen flex items-center justify-center antialiased hover:subpixel-antialiased"
  >
    <div :class="color" v-if="!dismissible">
      <div class="grid grid-cols-3 px-4">
        <div class="grid justify-items-start">
                <ExclamationCircleIcon class="h-5 w-6" />
                <component :is="props.icon" class="h-5 w-6 bg-black" />
              </div>
        <h1 class="text-lg font-semi-bold grid justify-items-start">
        {{ title }}
      </h1>
      <div class="grid justify-items-end">
        <XMarkIcon class="w-5 h-5" @click="dismissible=true" />
      </div>
      </div>
      <p class="px-4">
        {{ body }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { XMarkIcon,ExclamationCircleIcon, CheckBadgeIcon } from '@heroicons/vue/24/solid'
let dismissible = ref(null)
// let icon = ref('ExclamationCircleIcon')
const props = defineProps({
  title: {
    type: String
  }, 
  body: {
    type: String
  },
  color: {
    default: ""
  },
  icon: {
    default: ""
  },
  dismissible: {
    type: Boolean,
    default: ""
  },
  timeout: {
    default: ""
  }
})
</script>
