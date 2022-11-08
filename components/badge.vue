<script setup>
const props = defineProps({
  size: {
    type: [String, Number],
    default: "",
  },
  color: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: ""
  },
  pill: {
    type: String,
    default: ""
  }
});
function badgeClass() {
  let badgeSize =
    `${props.size}` === "5"
      ? " text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-md"
      : `${props.size}` === "10"
      ? " text-md font-semibold px-2.5 py-0.5 rounded-md"
      : `${props.size}` === "15"
      ? "text-lg font-semibold px-2.5 py-0.5 rounded-md"
      : `${props.size}` === "20"
      ? "text-xl font-semibold px-5 py-1.5 rounded-md"
      : `${props.size}` === "20"
      ? "text-2xl text-md"
      : "";
    let badgeColor = `${props.color}` === `${props.color}` ? `bg-${props.color}-100 text-${props.color}-800` : '';
    let pills = `${props.pill}` === "true" ? 'rounded-3xl' : 'rounded-md';
  return `${badgeSize} ${pills} ${badgeColor}`;
}
</script>

<template>
  <div>
    <button  class="bg-red-100 px-2.5 py-0.5 rounded-md" v-if="`${props.type}`==='button'">
      <span :class="badgeClass()"><slot /></span>
    </button>
    <span v-else :class="badgeClass()"><slot /></span>
  </div>
</template>

<style>
.default {
  @apply mr-2 px-2.5 py-0.5 rounded;
}
.yellow {
    @apply bg-yellow-100 text-yellow-800 mr-2 px-2.5 py-0.5 rounded-sm;
}
.red{
  @apply bg-red-100 text-red-800 text-sm text-center font-semibold mr-2 p-10 rounded-md
}
</style>
