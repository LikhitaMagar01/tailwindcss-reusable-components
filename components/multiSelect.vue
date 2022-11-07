<script setup>
import icon from "@/components/icon.vue";
let emit = defineEmits(["input"]);
let showOption = ref(false);
var places = ref("")
var thisPlaces = ref("")
var states = ref([])
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
function openTab(){
  showOption.value = true
}

function setState(place){
  places.value = place
  console.log(places.value)
  thisPlaces.value = places.value.substring(0,5)
  states.value.push(thisPlaces.value)
}

function removeState(index){
  states.value.splice(index, 1)
}
</script>

<template>
   <div class="m-10">
    <div
      class="grid grid-row-2 p-1 w-1/4 bg-black drop-shadow-md text-white text-left relative rounded-md outline-sm  overflow-x-auto"
      :tabindex="tabindex"
    >
    <div class="">
    <div class="flex w-full fle bg-black text-white ">
      <span v-for="(st, index) in states" :key="st.id" class="text-white bg-black flex min-w-min ">
            {{ st }}
            <icon size="20" path="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" @click="removeState(index)"></icon>
      </span>
      </div>
      <input
        type="text"
        class="flex w-full place-items-center justify-between bg-black"
        @click="openTab()"
      />
    </div>
      <div>
        <ul v-if="showOption" class="bg-black p-1  w-full top-11 rounded-md">
          <li v-for="option in options" @click="setState(option)">
            {{ option }}
          </li>
        </ul>
        <!-- <div
          v-for="option in options"
          :key="option.id"
          @click="emit('input', option)"
        ></div> -->
      </div>
    </div>
  </div>
</template>
