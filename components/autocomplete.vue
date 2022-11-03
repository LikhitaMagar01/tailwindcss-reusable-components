<script setup>
let emit = defineEmits(["input"]);

var state = ref("");
var filteredStates = ref([]);
var modal = ref(false);
var optionVisible = ref(false);
var filterVisible = ref(false);
var disabled = ref(false);

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
    type: Boolean,
    required: false,
    default: false,
  },
});

function filterStates(){
  if(state.value.length > 0){
    filteredStates.value = props.options.filter(place => {
        return place.toLowerCase().startsWith(state.value.toLowerCase());
    })
    if(filteredStates.value){
      filterVisible.value = true
      optionVisible.value = false
    }
  }else{
    optionVisible.value = true
  }
};
// function setState(place){
// state.value = place
//   // modal.value = false
// }

function selectValue(obj) {
  state.value = place
  let exist = filteredStates.value.find((o) => o.key === obj.id);
  if (exist == undefined) {
    let object = {
      key: obj.id,
      value: obj,
    };
    filteredStates.value.push(object);
  }
}

function getList() {
  if (props.options.length < 1) {
    optionVisible.value = false;
  } else {
    optionVisible.value = true;
  }
  console.log(props.options.length);
}

function checkMultiple() {
  if (!props.multiple) {
    if (filteredStates.value.length >= 1) {
      disabled.value = true;
    } else {
      disabled.value = false;
    }
  }
}
checkMultiple();


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
  <div class="relative select block">
    <!-- <div>
      <span v-for="(obj, index) in filteredStates" :key="obj.id">
        {{ obj.value }}
        <span>&#10006;</span>
      </span>
    </div> -->
    <input
      class=" flex place-items-center justify-between bg-black text-white rounded-md p-1 w-1/4 h-10"
      type="text"
      :disabled="disabled"
      v-model="state"
      @click="getList"
      @input="filterStates()" @focus ="modal = false"
    />
    <div v-if="optionVisible" 
      :class="{'hidden' : modal == true ,
      'p-2 w-1/4 bg-black drop-shadow-md text-white rounded-md outline-sm option': modal == false}">
      <div
        v-for="option in options"
        :key="option.id"
        @click="selectValue(item)"
        >{{ option }}</div
      >
    </div>
      <div
        class="bg-red-200 p-1 absolute w-full top-11 rounded-md"
        v-if="filterVisible && state"
      >
      <div
        v-for="filterState in filteredStates"
        :key="filterState.id"
        @click="selectValue(option)"
        >{{ filterState }}</div
      >
      </div>
  </div>
</template>
