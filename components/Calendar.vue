<script setup>
   var date = ref('')
   var month = ref()
   var todayIs = ref('')
   var year = ref('')
   var day = ref('')
   var letShow = ref(false)
   var letShow2 = ref(false)

   const nextMonth = () => {
      var nextmonth = Number(month.value) + 1
      console.log(typeof(nextmonth))
   }

   const openTab= () => {
      letShow.value = !letShow.value
      var today = new Date();
      var dt = today.getDate();
      var mm = today.getMonth();
      var dd = today.getDay();
      var yyy = today.getFullYear();
      var today = mm + '/' + dd + '/' + yyy;
      todayIs.value = today
      date.value = dt
      year.value = yyyy
      day.value = dd
      month.value = mm
      console.log(todayIs.value)
      var getMonth = mm == "0" ? "January" 
      : mm == "1" ? "February" 
      : mm == "2" ? "March" 
      : mm == "3" ? "April" 
      : mm == "4" ? "May" 
      : mm == "5" ? "June" 
      : mm == "6" ? "July" 
      : mm == "7" ? "August" 
      : mm == "8" ? "September" 
      : mm == "9" ? "October" 
      : mm == "10" ? "November" 
      : mm == "1" ? "December" 
      : "invalid";
      month.value = getMonth
      var getDay = dd == "0" ? "Sunday" 
      : dd == "1" ? "Monday" 
      : dd == "2" ? "Tuesday" 
      : dd == "3" ? "Wednesday" 
      : dd == "4" ? "Thursday" 
      : dd == "5" ? "Friday" 
      : dd = "6" ? "Saturday" 
      : "Invalid";
      day.value = getDay
   }
   const openTab2= () => {
      letShow2.value = !letShow2.value
      var today = new Date();
      var dt = today.getDate();
      var mm = today.getMonth();
      var dd = today.getDay();
      var yyy = today.getFullYear();
      var today = mm + '/' + dd + '/' + yyy;
      todayIs.value = today
      date.value = dt
      year.value = yyyy
      day.value = dd
      month.value = mm
      console.log(todayIs.value)
      var getMonth = mm == "0" ? "January" 
      : mm == "1" ? "February" 
      : mm == "2" ? "March" 
      : mm == "3" ? "April" 
      : mm == "4" ? "May" 
      : mm == "5" ? "June" 
      : mm == "6" ? "July" 
      : mm == "7" ? "August" 
      : mm == "8" ? "September" 
      : mm == "9" ? "October" 
      : mm == "10" ? "November" 
      : mm == "1" ? "December" 
      : "invalid";
      month.value = getMonth
      var getDay = dd == "0" ? "Sunday" 
      : dd == "1" ? "Monday" 
      : dd == "2" ? "Tuesday" 
      : dd == "3" ? "Wednesday" 
      : dd == "4" ? "Thursday" 
      : dd == "5" ? "Friday" 
      : dd = "6" ? "Saturday" 
      : "Invalid";
      day.value = getDay
   }
</script>

<template>
 <div class="container mx-auto mt-5">
  <div date-rangepicker class="flex items-center flex-row gap-2">
  <div class="w-1/2" @click="openTab()">
 <input class="input_block" placeholder="Select date start"></div>
 <div class="datepicker datepicker-inline active" :class="[letShow === false ? 'hidden' : 'static']">
  <div class="datepicker_shadow">
  <div class="header">
<div class="datepicker-controls flex justify-between mb-2">
  <button type="button" class="side_button">
   <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
   </svg>
  </button>
   <button type="button" class="btn_month">February 2022</button>
   <button type="button" class="side_button" @click="nextMonth()">
   <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd">
   </path>
   </svg>
   </button>
   </div>
   </div>
<div class="datepicker-main p-1">
<div class="datepicker-view flex">
<div class="days">
 <div class="days-of-week grid grid-cols-7 mb-1">
  <span class="week">Su</span>
  <span class="week">Mo</span>
  <span class="week">Tu</span>
  <span class="week">We</span>
  <span class="week">Thu</span>
  <span class="week">Fr</span>
  <span class="week">Sa</span>
 </div>
 <div class="datepicker-grid w-64 grid grid-cols-7">
  <span class="day" data-date="1643652900000">1</span>
  <span class="day" data-date="1643739300000">2</span>
  <span class="day" data-date="1643825700000">3</span>
  <span class=" day" data-date="1643912100000">4</span>
  <span class="day" data-date="1643998500000">5</span>
  <span class="day" data-date="1644084900000">6</span>
  <span class="day" data-date="1644171300000">7</span>
  <span class="day" data-date="1644257700000">8</span>
  <span class="day" data-date="1644344100000">9</span>
  <span class="day" data-date="1644430500000">10</span>
  <span class="day" data-date="1644516900000">11</span>
  <span class="day" data-date="1644603300000">12</span>
  <span class="day" data-date="1644689700000">13</span>
  <span class="day" data-date="1644776100000">14</span>
  <span class="day" data-date="1644862500000">15</span>
  <span class="day" data-date="1644948900000">16</span>
  <span class="day" data-date="1645035300000">17</span>
  <span class="day" data-date="1645121700000">18</span>
  <span class="day" data-date="1645208100000">19</span>
  <span class="day" data-date="1645294500000">20</span>
  <span class="day" data-date="1645380900000">21</span>
  <span class="day" data-date="1645467300000">22</span>
  <span class="day" data-date="1645553700000">23</span>
  <span class="day" data-date="1645640100000">24</span>
  <span class="marker" data-date="1645726500000">25</span>
  <span class="day" data-date="1645812900000">26</span>
  <span class="day" data-date="1645899300000">27</span>
  <span class=" day" data-date="1645985700000">28</span>
  <span class="day" data-date="1646072100000">29</span>
  <span class="day" data-date="1646158500000">30</span>
 </div></div></div></div></div></div>
 <div class="w-1/2" @click="openTab2()">
 <input class="input_block" placeholder="Select date end">
 <div class="datepicker datepicker-inline active block" :class="[letShow2 === false ? 'hidden' : 'static']">
  <div class="datepicker_shadow">
  <div class="datepicker-header">
<div class="datepicker-controls flex justify-between mb-2">
  <button type="button" class="side_button">
   <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
   </svg>
  </button>
   <button type="button" class="btn_month">February 2022</button>
   <button type="button" class="side_button">
   <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd">
   </path>
   </svg>
   </button>
   </div>
   </div>
<div class="datepicker-main p-1">
<div class="datepicker-view flex">
<div class="days">
 <div class="days-of-week grid grid-cols-7 mb-1">
  <span class="week">Su</span>
  <span class="week">Mo</span>
  <span class="week">Tu</span>
  <span class="week">We</span>
  <span class="week">Thu</span>
  <span class="week">Fr</span>
  <span class="week">Sa</span>
 </div>
 <div class="datepicker-grid w-64 grid grid-cols-7">
  <span class="day" data-date="1643652900000">1</span>
  <span class="day" data-date="1643739300000">2</span>
  <span class="day" data-date="1643825700000">3</span>
  <span class=" day" data-date="1643912100000">4</span>
  <span class="day" data-date="1643998500000">5</span>
  <span class="day" data-date="1644084900000">6</span>
  <span class="day" data-date="1644171300000">7</span>
  <span class="day" data-date="1644257700000">8</span>
  <span class="day" data-date="1644344100000">9</span>
  <span class="day" data-date="1644430500000">10</span>
  <span class="day" data-date="1644516900000">11</span>
  <span class="day" data-date="1644603300000">12</span>
  <span class="day" data-date="1644689700000">13</span>
  <span class="day" data-date="1644776100000">14</span>
  <span class="day" data-date="1644862500000">15</span>
  <span class="day" data-date="1644948900000">16</span>
  <span class="day" data-date="1645035300000">17</span>
  <span class="day" data-date="1645121700000">18</span>
  <span class="day" data-date="1645208100000">19</span>
  <span class="day" data-date="1645294500000">20</span>
  <span class="day" data-date="1645380900000">21</span>
  <span class="day" data-date="1645467300000">22</span>
  <span class="day" data-date="1645553700000">23</span>
  <span class="day" data-date="1645640100000">24</span>
  <span class="marker" data-date="1645726500000">25</span>
  <span class="day" data-date="1645812900000">26</span>
  <span class="day" data-date="1645899300000">27</span>
  <span class=" day" data-date="1645985700000">28</span>
  <span class="day" data-date="1646072100000">29</span>
  <span class="day" data-date="1646158500000">30</span>
 </div></div></div></div></div></div>
 </div>
 </div>
 </div>
</template>

<style>
.input_block {
 @apply bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500;
}
.week {
 @apply text-center h-6 leading-6 text-sm font-medium text-gray-500 dark:text-gray-400;
}
.day {
 @apply hover:bg-gray-100 dark:hover:bg-gray-600 flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm text-gray-500;
}
.marker {
   @apply flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center font-semibold text-sm bg-blue-700 text-white dark:bg-blue-600;
}
.header {
   @apply bg-white dark:bg-gray-700 rounded-lg text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200;
}
.btn_month {
   @apply text-sm rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 font-semibold py-2.5 px-5 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200;
}
.side_button {
   @apply bg-white dark:bg-gray-700 rounded-lg text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200;
}
.datepicker_shadow {
   @apply rounded-lg bg-white dark:bg-gray-700 shadow-lg p-4;
}
</style>









