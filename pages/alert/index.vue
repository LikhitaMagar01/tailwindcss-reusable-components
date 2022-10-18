<script setup>
import alert from "@/components/alert.vue";
defineProps({
  modalActive: {
    type: Boolean,
    default: false,
  },
});
let show = ref(true);
// setTimeout(() => elementVisible.value = false, 5000)
</script>

<template>
  <div>
    <div class="text-center mt-10 rounded-lg bg-blue-200 text-blue-600 h-12 w-2/5">
      <div class="p-3">A simple primary alert—check it out!</div>
    </div>
    <div class="mt-10">
      <alert
      type="danger"
      fullHeight="14"
      fullWidth="2/5"
      :dismissible="false"
      :icon="true"
    >
      A simple primary alert—check it out!
    </alert>
    </div>
    <div class="mt-10">
      <alert
      type="success"
      fullHeight="14"
      fullWidth="2/5"
      :dismissible="true"
      :icon="true"
    >
      A simple primary alert—check it out!
    </alert>
    </div>
    <div class="mt-10">
      <alert
      type="link"
      fullHeight="14"
      fullWidth="2/5"
      :dismissible="false"
      :icon="false"
      :setTime = "true"
    >
      A simple primary alert—check it out!
    </alert>
    </div>
  </div>
</template>
