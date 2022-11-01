<template>
  <div class="dropdown" v-if="this.isVisible">
    <div class="dropdown-menu show w-100 border">
      <span
        class="dropdown-item"
        v-for="item in items"
        :key="item.id"
        v-on:click="selectValue(item)"
      >
        {{ item.first_name }}
        <!-- <small v-if="item.full_name">{{ item.full_name }}</small> -->
        <span
          class="float-end fa fa-check text-primary"
          v-if="
            selected_object.find((o) => o.key === item.id) !== undefined
          "
        ></span>
      </span>
    </div>
  </div>
  <div class="input-group form-control mb-3 p-0">
    <div class="input-group-prepend pt-2 px-1">
      <span
        class="badge bg-primary me-1 text-capitalize"
        v-for="(obj, index) in selected_object"
        :key="obj.id"
      >
        {{ obj.value }}
        <span class="ps-1 cursor-pointer" @click="removeValue(index)"
          >&#10006;</span
        >
      </span>
    </div>
    <input
      type="text"
      class="form-control border-0 shadow-none pl-2"
      :disabled="disabled"
      v-model="search"
      @keyup="getList"
      @keydown.delete="removeLastValue"
    />
  </div>
</template>
<script setup>
var search = ref("");
var isVisible = ref("");
var selected_object = ref("");
var items = ref([]);
var disabled = ref(false);

const props = defineProps({
  options: {
    type: Array,
    default: "",
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  keyword: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "type anything...",
  },
});

function selectValue(obj) {
  let exist = selected_object.value.find((o) => o.key === obj.id);
  // if(obj.name){
  if (exist == undefined) {
    let object = {
      key: obj.id,
      value: obj.value,
    };
    selected_object.value.push(object);
    search.value = "";
    isVisible.value = !isVisible.value;
    checkMultiple();
  }
}

function removeValue(index) {
  selected_object.value.splice(index, 1);
  checkMultiple();
}

function removeLastValue() {
  if (search.value == "") {
    selected_object.value.pop();
    checkMultiple();
  }
}

const checkMultiple = computed(() => {
  if (!props.multiple) {
    if (selected_object.value.length >= 1) {
      disabled.value = true;
    } else {
      disabled.value = false;
    }
  }
});
function getList() {
  for (var end in props.options) {
    if (props.options.length < 1) {
      isVisible.value = false;
    } else {
      isVisible.value = true;
    }
  }
  // this.API.get(`${this.endpoint}?search=${this.search}&limit=10`).then(
  //   (response) => {
  //     this.items = response.data.results;
  //     console.log(response.data.results);
  //     if (this.items.length < 1) {
  //       this.isVisible = false;
  //     } else {
  //       this.isVisible = true;
  //     }
  //   }
  // );
}
</script>
<style scoped>
.input-group .form-control:focus {
  border-left: 0 !important;
  border-right: 0 !important;
}
.form-control:disabled {
  background-color: #fff;
}
</style>
