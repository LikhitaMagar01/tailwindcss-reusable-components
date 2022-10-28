<script setup>
import BaseListGroup from "@/components/BaseListGroup.vue"
</script>

<template>
 <BaseListGroup :options="['go', 'java', 'python', 'rust']" :default="'go'" class="select" @input="alert(displayToKey($event))" />
</template>