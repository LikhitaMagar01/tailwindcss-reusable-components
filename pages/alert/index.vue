<template>
    <div>
        <!-- <alert v-show="elementVisible" icon="ExclamationCircleIcon" color="bg-red-100 grid grid-rows-3 flex items-center success flex p-2 text-sm rounded-lg text-green-700" /> -->
        <!-- <alert type="success" fullHeight="12" fullWidth="3/5" class="ml-10 mt-10">
            <div>
                A simple primary alert—check it out!
            </div>
        </alert> -->
        <div class="mt-10 rounded-lg bg-sky-200 h-12 w-3/5">
            <div class="text-center p-3">
                A simple primary alert—check it out!
            </div>
            </div>
            <alert type="success" fullHeight="14" fullWidth="3/5" icon="XMarkIcon">
                <span>
      <XMarkIcon class="h-5 w-6" @click="$emit('getDismiss')"
      />
    </span>
                A simple primary alert—check it out!
            </alert>
            
    </div>
</template>

<script setup>

import {
    XMarkIcon
  } from "@heroicons/vue/24/solid";
import alert from '@/components/alert.vue';
defineEmits([getDismiss]);
// let elementVisible = ref(true)
// setTimeout(() => elementVisible.value = false, 5000)
</script>