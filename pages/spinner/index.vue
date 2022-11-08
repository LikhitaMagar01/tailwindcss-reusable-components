<script setup>
import spinner from "@/components/spinner.vue";
</script>

<template>
  <div class="m-10 p-5">
    <button
      class="grid grid-cols-3 bg-blue-400 hover:bg-blue-500 p-2 rounded drop-shadow-lg w-64 h-10"
    >
      <spinner
        class="cols-span-1"
        iconContext="20"
        spinColor="yellow"
        animation="animate-spin"
        load="roundspin"
      />
      
      <div class="">hello</div>
    </button>
  </div>
  <span class="flex h-3 w-3">
  <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-75"></span>
  <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
</span>
  <div class="m-10 p-5">
    <button
      class="bg-blue-400 hover:bg-blue-500 p-2 rounded drop-shadow-lg w-64 h-10 gap-2 flex place-items-center place-content-center relative"
    >
    <spinner
        class="cols-span-1 absolute"
        style="top: -12px; right: -8px"
        iconContext="20"
        spinColor="yellow"
        animation="animate-ping"
        load="ping"
      >
    </spinner>
      <!-- <div
        style="
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background-color: black;
          top: -6px;
          right: -4px;
        "
        class="absolute animate-ping"
      ></div>
      <span class="absolute inline-flex rounded-full h-3 w-3 bg-black" style="
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background-color: black;
          top: -6px;
          right: -4px;
        "></span> -->
      <div class="">hello</div>
    </button>
  </div>
  <spinner
    iconContext="50"
    spinColor="red"
    animation="animate-spin"
    load="roundspin"
  />
  <spinner
    iconContext="50"
    spinColor="blue"
    animation="animate-bounce"
    load="arrowbounce"
  />
</template>
