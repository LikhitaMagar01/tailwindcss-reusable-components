<script setup>
// const props = defineProps({
//   value: {
//     type: String,
//     required: false,
//     default: "",
//   },
//   placeholder: {
//     type: String,
//     default: "",
//   },
//   type: {
//     type: String,
//     default: "text",
//   },
//   id: {
//     type: String,
//     default: "",
//   },
//   name: {
//     type: String,
//     default: "",
//   },
// });
var date = ref("")
var month = ref()
var todayIs = ref("")
var year = ref("")
var day = ref("")
var letShow = ref(false)

const nextMonth = ()=>{
  var nextmonth = Number(month.value) + 1
  console.log(typeof(nextmonth))
  console.log(nextmonth)
}

const openTab = ()=>{
  letShow.value = !letShow.value
  var today = new Date();
  var dt = today.getDate();
  var mm = today.getMonth();
  var dd = today.getDay();
  var yyyy = today.getFullYear();
  var today = mm + '/' + dd + '/' + yyyy;
  todayIs.value = today
  date.value = dt
  year.value = yyyy
  day.value = dd
  console.log(month.value)
  var getMonth = mm == "0" ? "January" : mm == "1" ? "February" : mm == "2" ? "March" : mm == "3" ? "April" : mm == "4" ? "May" : mm == "5" ? "June" : mm == "6" ? "July" : mm == "7" ? "August" : mm == "8" ? "September" : mm == "9" ? "October" : mm == "10" ? "November" : mm == "1" ? "December" : "invalid";
  month.value = getMonth
  var getDay = dd == "0" ? "Sunday" : dd == "1" ? "Monday" : dd == "2" ? "Tuesday" : dd == "3" ? "Wednesday" : dd == "4" ? "thursday" : dd == "5" ? "Friday" : dd == "6" ? "Saturday" : "Invalid"
  day.value = getDay
};
</script>

<template>
  <div>
    {{letShow}}
    <div class="relative w-1/4" @click="openTab()">
      <input type="text" class="relative border border-2 border-black w-full h-7">
      <span class="absolute right-2">
        <icon class="" size="20" path="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm3 8H4v8h16v-8zm-5-6H9v2H7V5H4v4h16V5h-3v2h-2V5zm-9 8h2v2H6v-2zm5 0h2v2h-2v-2zm5 0h2v2h-2v-2z" />
      </span>
    </div>
    <div>
    </div>
    <div :class="[letShow === false ? 'hidden' : 'static']" class="bg-white drop-shadow-md h-1/2 w-1/4">
      <div >
        <div class="flex flex-col-3">
          <div class="">&lt;</div>
        <div class="flex flex-col items-center">
          {{month}}
          {{year}}
          {{day}}
        </div>
        <div class="" @click="nextMonth()">></div>
        </div>
        <ul class="grid grid-cols-7">
          <li>SUN</li>
          <li>MON</li>
          <li>TUE</li>
          <li>WED</li>
          <li>THU</li>
          <li>FRI</li>
          <li>SAT</li>
        </ul>
        <ul class="grid grid-cols-7">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
          <li>14</li>
          <li>15</li>
          <li>16</li>
          <li>17</li>
          <li>18</li>
          <li>19</li>
          <li>20</li>
          <li>21</li>
          <li>22</li>
          <li>23</li>
          <li>24</li>
          <li>25</li>
          <li>26</li>
          <li>27</li>
          <li>28</li>
          <li>29</li>
          <li>30</li>
          <li>31</li>
        </ul>
      </div>
  </div>
  </div>
</template>
