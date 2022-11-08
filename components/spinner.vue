<script setup>
import icon from "@/components/icon.vue";
defineProps({
    load: {
        type: String,
        default: ""
    },
    animation: {
        type: String,
        default: ""
    },
    iconContext: {
        type: [String, Number],
        default: null,
    },
    spinColor: {
      type: String,
      default: ""
    }
})
</script>

<template>
  <div>
    <div>
      <span>
        <icon
          v-if="icon"
          :path=load
          :size="iconContext"
          :animate="animation"
          :color="spinColor"
        />
      </span>
    </div>
  </div>
</template>
<!-- 
<style>
.red{
  @apply text-red-500
}
.blue{
  @apply text-blue-500
}
</style> -->
