
<script setup lang="tsx">
var list = ref([]);
var active = ref(false);
var image = ref(null)
const activeToggle = ()=>{
    active.value = !active.value
}

function drop(e : DragEvent) : void
{
  const files = e.dataTransfer?.files as FileList
  image.value = URL.createObjectURL(files[0])
  list.value.push(image.value)
  console.log(list.value)
}

function onChange(e : InputEvent) : void
{
  const files = (e.target as HTMLInputElement).files as FileList
  console.log(FileList)
  image.value = URL.createObjectURL(files[0])
  list.value.push(image.value)
  console.log(list.value)
}

</script>

<template>
  <div class="mx-20 mt-5">
    <div
      class="relative border-2 border-gray-200 border-dashed rounded-lg h-64 w-2/2" :class="[active ? 'hover:bg-gray-100 opacity-0.8' : '']" @dragenter.prevent="activeToggle"
        @dragleave.prevent="activeToggle"
        @drop="drop"
    >
    <div v-if="list.length > 0" class="flex flex-row absolute">
      <ul v-for="img in list" :key="img.id">
        <li>
          <img :src="img" alt="hello" class="rounded-lg m-5 h-28 w-16 drop-shadow-md bg-white" />
        </li>
      </ul>
    </div>
      <div class="grid place-items-center">
        <label v-if="list.length <=0" class="grid place-content-center"
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
          <div class="text-gray-400 text-sm">
            <span class="font-semibold text-gray-400">Click to upload</span>
            or drag and drop
            <br/>
            SVG, PNG, GIF (MAX. 800x400px)
          </div>
          </div>
          <input
          type="file"
          multiple
          class="w-px h-px opacity-0 overflow-hidden absolute"
          @change="onChange"
          accept=".pdf,.jpg,.jpeg,.png"
        />
        </label>
        <label v-else class="grid place-content-center"
        >
          <div class="text-gray-400 text-sm grid place-content-center">
            upload more ...
          </div>
          <input
          type="file"
          multiple
          class="w-px h-px opacity-0 overflow-hidden absolute"
          @change="onChange"
          accept=".pdf,.jpg,.jpeg,.png"
        />
        </label>
      </div>
    </div>
  </div>
</template>