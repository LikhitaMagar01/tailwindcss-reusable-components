<script setup>
import badge from '@/components/badge.vue';
import icon from '@/components/icon.vue';
</script>

<template>
    <div class="m-10">
        <span class="bg-red-100 text-red-800 text-sm text-center font-semibold mr-2 px-0.5 py-0.5 rounded">badge</span>
        <div class="m-10">
            <badge pill="true" size="5" color="red">badge</badge>
        </div>
        <div class="m-10">
            <badge type="button" size="5" color="red">
                Notification
                <icon path="M20 18.667l.4.533a.5.5 0 0 1-.4.8H4a.5.5 0 0 1-.4-.8l.4-.533V10a8 8 0 1 1 16 0v8.667zM9.5 21h5a2.5 2.5 0 1 1-5 0z" />
            </badge>
        </div>
        
    </div>
</template>