<template>
  <div>
    <div>
      <button
        @click="toggleModal()"
        class="block text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        type="button"
      >
        Toggle modal
      </button>
    </div>
    <modal @close-modal="toggleModal" :modalActive="modalActive">
        <div class="text-black">
          <h1 class="text-2xl mb-1">Lorem ipsum</h1>
          <p class="mb-4">
            1914 translation by H. Rackham
          </p>
          <h2 class="text-2xl">How it works:</h2>
          <ol class="list-decimal list-inside mb-4">
            <li>
              1914 translation by H. Rackham
            </li>
            <li>
              1914 translation by H. Rackham
            </li>
            <li>
              1914 translation by H. Rackham
            </li>
          </ol>

          <h2 class="text-2xl">H. Rackham</h2>
          <p>
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.
          </p>
        </div>
    </modal>
  </div>
</template>

<script setup>
import modal from "@/components/modal.vue";

const modalActive = ref(null);
const toggleModal = () => {
  modalActive.value = !modalActive.value;
};
</script>
