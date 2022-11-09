<!-- <template>
 <BaseAvatar name="Test User" image="/image.png"/>
 <BaseAvatar name="Test User"/>
</template> -->
<template>
 <BaseAvatar 
 class="me-3"
 :img="sophie"
 alt="kal"
 border-radius="lg"
 shadow="regular"
 />
</template>

<script setup>
import BaseAvatar from "@/components/BaseAvatar.vue"
</script>