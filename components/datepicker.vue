<script setup>
const props = defineProps({
  value: {
    type: String,
    required: false,
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
    <field
      as="input"
      :value="value"
      class="border-2 border-black w-20 h-10"
      :type="type"
      :id="id"
      :name="name"
      :placeholder="placeholder"
    />
  </div>
</template>
