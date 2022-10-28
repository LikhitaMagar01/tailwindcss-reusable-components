<template>
 <div class="container">
   <div class="p-10 mx-4 text-center card-header d-flex justify-content-center">
     </div>
   </div>
   <div class="card">
      <h6 class="mb-0 text-center">{{ title }}</h6>
     <span class="text-xs">{{ description }}</span>
    <slot/>
   </div>
</template>

<script setup>
const props = defineProps ({
 title: {
     type: String,
     default: "",
   },
   description: {
     type: String,
     default: "",
   },
   value: {
     type: [String, Number],
     default: "",
   },
})
</script>
<style>
.card{
@apply 
p-6 max-w-sm bg-white rounded-lg 
border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700;
}

</style>