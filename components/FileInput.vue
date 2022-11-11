
<script setup>
var filelist = ref([]);
var active = ref(false);
var dropzoneFile = ref(null);

const activeToggle = ()=>{
    active.value = !active.value
}

const drop = (e) => {
    active.value = !active.value
    // dropzoneFile.value = e.dataTransfer.files;
    dropzoneFile.value = e.dataTransfer.items;
    console.log(dropzoneFile.value)

};


</script>

<template>
  <div class="mx-20 mt-5">
    <div
      class="grid place-content-center border-2 border-gray-200 border-dashed rounded-lg h-64 w-2/2" :class="[active ? 'hover:bg-gray-100 opacity-0.8' : '']"
    >
      <label
        @dragenter.prevent="activeToggle"
        @dragleave.prevent="activeToggle" @dragover.prevent
        @drop.prevent="drop"
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M12 12.586l4.243 4.242-1.415 1.415L13 16.415V22h-2v-5.587l-1.828 1.83-1.415-1.415L12 12.586zM12 2a7.001 7.001 0 0 1 6.954 6.194 5.5 5.5 0 0 1-.953 10.784v-2.014a3.5 3.5 0 1 0-1.112-6.91 5 5 0 1 0-9.777 0 3.5 3.5 0 0 0-1.292 6.88l.18.03v2.014a5.5 5.5 0 0 1-.954-10.784A7 7 0 0 1 12 2z"
              fill="rgba(156,155,155,1)"
            />
          </svg>
        </div>
        <div class="text-gray-400">
          <span class="font-semibold text-gray-400">Click to upload</span>
          or drag and drop
        </div>
        <div class="text-gray-400 text-sm">SVG, PNG, GIF (MAX. 800x400px)</div>
        <input
        type="file"
        multiple
        class="w-px h-px opacity-0 overflow-hidden absolute"
        ref="dropzoneFile"
        accept=".pdf,.jpg,.jpeg,.png"
      />
      </label>
      <ul class="mt-4" v-if="filelist.length" v-cloak>
        <li class="text-sm p-1" v-for="file in filelist">
          {{ file.name }}
        </li>
        <button
          class="text-red-500 ml-2"
          type="button"
          @click="remove(filelist.indexOf(file))"
        >
          remove
        </button>
      </ul>
      <span> File: {{dropzoneFile}}</span>
    </div>
    <!-- <input class="block w-full cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-transparent text-sm rounded-lg" aria-describedby="user_avatar_help" id="user_avatar" type="file"> -->
  </div>
</template>