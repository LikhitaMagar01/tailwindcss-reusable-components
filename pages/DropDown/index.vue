<script setup>
import BaseDropdown from "@/components/BaseDropdown.vue"
</script>

<template>
 <BaseDropdown :options="['go', 'java', 'python', 'rust']" :default="'go'" class="select" @input="alert(displayToKey($event))" />
</template>

