<script setup>
var avatar_name = ref('golden retriever')
</script>
<template>
    <div>
    <div class="m-10">
        <avatar username="Taylor" size="10" :name="avatar_name"></avatar>
    </div>
    <div class="m-10">
        <avatar username="Taylor" avatar="/images/gr.jpg" size="10"/>
    </div>
    </div>
</template>