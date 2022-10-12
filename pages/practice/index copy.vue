<template>
    <div v-show="uncompletedAssignment.length">
        <h1>uncompleted list</h1>
       <li v-for="assignment in uncompletedAssignment" :key="assignment.id">
      {{ assignment.name }}
      <input type="checkbox" v-model="assignment.complete">
    </li> 
    </div>

    <div v-show="completedAssignment.length">
        <h1>completed list</h1>
        <li v-for="assignment in completedAssignment" :key="assignment.id">
      {{ assignment.name }}
      <input type="checkbox" v-model="assignment.complete">
    </li>
    </div>
    
  </template>
  
  <script setup>
  let assignments = ref([{
    id: 1,
    name: 'wake up',
    complete: false
  },
  {
    id: 2,
    name: 'brush teeth',
    complete: false
  },
  {
    id: 3,
    name: 'wash face',
    complete: false
  },
  {
    id: 4,
    name: 'make tea',
    complete: false
  },
  {
    id: 5,
    name: 'drink tea',
    complete: false
  }
])
const completedAssignment = computed(()=>{
    return assignments.value.filter(assignment => assignment.complete)
})
const uncompletedAssignment = computed(()=>{
    return assignments.value.filter(assignment => !assignment.complete)
})
  </script>
  