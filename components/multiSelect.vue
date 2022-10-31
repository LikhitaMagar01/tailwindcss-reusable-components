<script setup>
import icon from "@/components/icon.vue";
let emit = defineEmits(["input"]);
let open = ref(false);
var selected = ref(props.default ? props.default : props.options.length > 0 ? props.options[0] : null)
const props = defineProps({
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
});
const openTab = ()=>{
  open.value = !open.value
  console.log(selected)
};
</script>

<template>
  <div class="m-10">
    <div
      class="grid grid-cols-1 p-1 w-1/4 h-10 bg-black drop-shadow-md text-white text-left relative rounded-md outline-sm"
      :tabindex="tabindex"
    >
      <div
        class="flex place-items-center justify-between"
        @click="openTab()"
      >
        {{ selected }}

        <div
          :class="{
            'rotate-180': open,
            'rotate-0': !open,
          }"
        >
          <icon
            path="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            iconSize="10"
          >
          </icon>
        </div>
      </div>
      <div class="bg-black p-1 absolute w-full top-11 rounded-md" v-show="open">
        <div
          v-for="option in options"
          :key="option.id"
          @click="
            selected = option;
            ((opt)=>{selected.push(selected, option)
            emit('input', opt)});
            open = false;
          "
        >
          {{ option }}
        </div>
      </div>
    </div>
  </div>
</template>
