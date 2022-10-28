<template>
 <div class="form-check">
   <input
     :id="id"
     class="form-check-input"
     type="checkbox"
     :name="name"
     :checked="checked"
   />
   <label :for="id" class="custom-control-label" :class="$attrs.class">
    <slot />
   </label>
 </div>
</template>

<script setup>
const props = defineProps({
 name: {
     type: String,
     default: "",
   },
   id: {
     type: String,
     default: "",
   },
   checked: {
     type: Boolean,
     default: false,
   },
   label: {
    type: String,
    default: "",
   },
   value: {
    type: String,
    default: "",
   },
   disabled: {
    type: Boolean,
    default: false,
   }
})

const emit = defineEmits({
  onChange: {
    type: "change",
    default: () => {},
  }
})
</script>