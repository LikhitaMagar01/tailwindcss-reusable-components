<template>
 <div id="app" class="p-4">
   <app-accordion isOpen="true" class="mb-4">
     <template v-slot:title>
       <span class="font-semibold text-xl">Accordion 1</span>
     </template>
     <template v-slot:content>
       <p>
         <b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit. Quia,
         porro. Non a excepturi, voluptatibus ipsam magnam, eligendi,
         accusantium ipsa quae quis praesentium voluptate saepe ullam sint ea
         itaque consectetur impedit?
       </p>
     </template>
   </app-accordion>

   <app-accordion class="mb-8">
     <template v-slot:title>
       <span class="font-semibold text-xl">Accordion 2</span>
     </template>
     <template v-slot:content>
       <p>
         <b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit. Quia,
         porro. Non a excepturi, voluptatibus ipsam magnam, eligendi,
         accusantium ipsa quae quis praesentium voluptate saepe ullam sint ea
         itaque consectetur impedit?
       </p>
     </template>
   </app-accordion>
 </div>
</template>

<script>
import AppAccordion from "@/components/AppAccordion";

export default {
 name: "App",
 components: {
   AppAccordion,
 },
};
</script>