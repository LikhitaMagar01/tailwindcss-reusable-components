<template>
 <label
    :label = "label"
    class="label">
        <slot>{{ label }}</slot>
 </label>
 <input
 v-bind="$attrs"
 :placeholder="placeholder"
 class="input"
 :value="modelValue"
 @input="updateInput"
 :isRequired="isRequired"
 >
 <!-- <span 
 v-show="!isValid"
 class="inValid-feedback"
 >{{ errorMessage}}</span> -->
</template>

<!-- <script>
export default {
 name: 'BaseInput',

//  computed: {
//   isValid() {
//    return !this.errorMessage;
//   },
//  },
};
</script> -->

<script setup>
 const props = defineProps ({
    label: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: ''
    },
    isRequired: {
     type: Boolean,
     default: '',
    },
    // errorMessage: {
    //  type: String,
    //  default: '',
    // },
       
  modelValue: {
   type: [String, Number],
   default: ''
  }
 })

 const emit = defineEmits(['update:modelValue'])

 const updateInput = ($event) => {
  emit('update:modelValue', $event.target.value)
 }
</script>

<style>
.input {
   @apply bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500;
}
.label {
    @apply block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-gray-400;
}
</style>