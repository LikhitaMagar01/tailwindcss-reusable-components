<script setup>
const props = defineProps({
  value: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  id: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div>
    <input
      :value="value"
      class="border-2 border-black"
      :type="type"
      :id="id"
      :name="name"
      :placeholder="placeholder"
    />
  </div>
</template>
