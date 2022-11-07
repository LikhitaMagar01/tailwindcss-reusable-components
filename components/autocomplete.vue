<script setup>
let emit = defineEmits(["input"]);

var state = ref("");
var places = ref("")
var thisPlaces = ref("")
var filteredStates = ref([]);
var filterState = ref(false)
var states = ref([]);
var noFilteredState = ref(false);

const props = defineProps({
  options: {
    type: Array,
    required: true,
    default: [],
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
  multiple: {
    type: Boolean
  },
});

function filterStates() {
  noFilteredState.value = false
  filterState.value = true
    filteredStates.value = props.options.filter((place) => {
    return place.toLowerCase().startsWith(state.value.toLowerCase());
  })
}

function setState(place) {
  if(props.multiple){
    places.value = place;
    thisPlaces.value = places.value.substring(0,5)
    states.value.push(thisPlaces.value)
    filterState.value = false
    }else{
      state.value = place;
    }
}

function getList(){
  noFilteredState.value = true
}

function removeState(index){
  states.value.splice(index, 1)
}
</script>

<!-- <style>
.option{display: none;}
.select:hover .option,
.select:focus .option,
.select:active .option{
  display: block !important;
}
.select{
  width:50rem;
  margin: 2rem;
}
</style> -->


<template>
  <div class="m-10">
    <div
      class="grid grid-row-2 p-1 w-80 bg-black drop-shadow-md text-white text-left relative rounded-md outline-sm  overflow-hidden"
      :tabindex="tabindex"
    >
    <div class="flex flex-col flex-col-reverse w-80">
    <div class="flex w-full flex flex-row-reverse bg-black text-white overflow-x-auto">
      <span v-for="(st, index) in states" :key="st.id" class="text-white bg-black flex first:mr-auto min-w-max">
            {{ st }}
            <icon size="20" path="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" @click="removeState(index)"></icon>
      </span>
      </div>
      <input
        type="text"
        :placeholder="placeholder"
        class="flex w-full place-items-center justify-between bg-black text-white"
        v-model="state"
        @click="getList()"
        @input="filterStates()"
      />
    </div>
      <div>
        <ul v-if="noFilteredState" class="bg-black p-1  w-full top-11 rounded-md">
          <li v-for="option in options" @click="setState(option)">
            {{ option }}
          </li>
        </ul>
        <ul v-if="filterState" class="bg-black p-1  w-full top-11 rounded-md">
          <li v-for="filteredState in filteredStates" @click="setState(filteredState)">
            {{ filteredState }}
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
