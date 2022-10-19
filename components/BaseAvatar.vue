<script setup>
import { computed } from "vue";

const props = defineProps ({
 username: {
  type: String,
  required: true,
 },
 avatar: {
  type: String,
  default: null,
 },
 api: {
  type: String,
  default: "avataaars",
 }
});
const avatar = computed(
  () =>
    props.avatar ??
    `https://avatars.dicebear.com/api/${props.api}/${props.username.replace(
      /[^a-z0-9]+/i,
      "-"
    )}.svg`
);

const usename = computed(() => props)
</script>