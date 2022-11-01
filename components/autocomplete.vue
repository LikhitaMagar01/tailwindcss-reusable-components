<script setup>
let emit = defineEmits(["input"]);
// var searchTerm = ref("");
// let selectedCountry = ref("");
var state = ref("");
var filteredStates = ref([]);
var modal = ref(false)

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  placeholder: {
    type: String,
    required: false,
    default: "type here...",
  },
  tabindex: {
    type: Number,
    required: false,
    default: 0,
  },
});

// const searchCountries = computed(() => {
//   if (searchTerm.value === "") {
//     return [];
//   }
//   return props.options.filter((option) => {
//     if (option.toLowerCase().includes(searchTerm.value.toLowerCase())) {
//       return option;
//     }
//   });
// });

// const selectCountry = (country) => {
//   selectedCountry.value = country;
//   searchTerm.value = "";
// };

function filterStates(){
    filteredStates.value = props.options.filter(place => {
        return place.toLowerCase().startsWith(state.value.toLowerCase());
    })
};
function setState(place){
  state.value = place
  modal.value = false
};
// watch(filteredStates,()=>{
//   console.log(filteredStates.value), {immediate: true};
// })
</script>

<template>
  <div class="m-10">
    <div
      class="grid grid-cols-1 p-1 w-1/4 h-10 bg-black drop-shadow-md text-white text-left relative rounded-md outline-sm"
      :tabindex="tabindex"
    >
      <input
        type="text"
        :placeholder="placeholder"
        class="flex place-items-center justify-between bg-black"
        v-model="state"
        @input="filterStates()" @focus="modal = true"
      />
      <div
        v-if="filteredStates && modal"
        class="bg-black p-1 absolute w-full top-11 rounded-md"
      >
      <ul>
        <li v-for="filteredState in filteredStates" @click="setState(filteredState)">{{ filteredState }}</li>
      </ul>
        <div
          v-for="option in options"
          :key="option.id"
          @click="emit('input', option)"
        >
        </div>
      </div>
    </div>
  </div>
</template>
