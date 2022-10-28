<template>
 <form>
 <div class="mb-6">  
 <BaseInput
 id="name"
 name="name"
 type="text"
 placeholder="Sample Input with help"
 label="Enter Your Sample Input"
 />
</div>

<div class="mb-6">
<BaseInput 
 placeholder="Number"
 type="number"
 label="Enter Number"/>
</div>
</form>

</template>
<script setup>
import BaseInput from "@/components/BaseInput";
</script>