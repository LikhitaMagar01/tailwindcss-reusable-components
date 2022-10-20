<script setup>
let emit = defineEmits(['input']);
defineProps({
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
})
let open = ref(false)
let selected = ref('select an option')
//   function selectedfun(){
//     let selectedoption = props.default ? props.default : props.option.length > 0 ? props.option[0] : null;
//     return `${selectedoption}`;
//   };

</script>

<template>
    <div class="m-10">
  <div class="relative w-2/4 h-10 bg-black drop-shadow-md text-white text-left outline rounded sm outline-sm" :tabindex="tabindex">
    <div class="bg-black rounded-sm p-1" @click="open = !open">
      {{ selected }}
    </div>
    <div class="bg-black" v-show="open">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="
          selected = option;
          open = false;
          emit('input', option)
        "
      >
        {{ option }}
      </div>
    </div>
  </div>
    </div>
</template>