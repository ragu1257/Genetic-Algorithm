<template>
  <div>
    <chart
      :staffingArray="staffing_array"
      :fairnessArray="fairness_array"
      @update-table="updateTable"
    />
    {{ array_number }}
    <table
      @update-table="updateTable"
      class="table-auto w-2/3 text-center"
      v-bind:style="{ display: 'inline-table' }"
    >
      <thead>
        <tr>
          <th>Name</th>
          <th v-for="item in officeOpenTimings" :key="item">{{ item }}</th>
          <th>Daily working time / Fixed Working Time</th>
          <th>Positive Wish Fulfilled / Total Positive Wish</th>
          <th>Negative Wish Fulfilled / Total Negative Wish</th>
          <th>Absence Wish Fulfilled / Total Absence</th>
          <th>Employee Power</th>
        </tr>
      </thead>
      <tbody v-for="(workArea, i) in workArea" :key="i">
        <!-- <div v-for="(workArea, i) in workArea" :key="i"> -->
        <tr class="bg-orange-400">
          <td>{{ workArea.workAreaName }}</td>
        </tr>
        <template v-for="(item, i) in shift" :key="i">
          <tr v-if="item.workAreaId == workArea.workAreaId">
            <!-- <span v-if="item.workAreaId == workArea.workAreaId"> -->
            <td>
              {{ item.employeeId }}
            </td>
            <td v-for="(time, i) in item.range" :key="i">
              <span
                v-if="
                  item.absenceRange &&
                    time > 0 &&
                    item.absenceRange.includes(time)
                "
              >
                <!-- <div
                  v-if="time > 0 && item.absenceRange.includes(time)"
                  class="bg-red-200"
                > -->
                <div class="bg-red-600">{{ item.employeeId }}</div>
                <!-- </div> -->
                <!-- <div v-else class="bg-green-200">
                  {{ item.employeeId }}
                </div> -->
              </span>
              <span
                v-else-if="
                  item.negativeWish &&
                    time > 0 &&
                    item.negativeWish.includes(time)
                "
              >
                <!-- <div
                  v-if="time > 0 && item.negativeWish.includes(time)"
                  class="bg-red-200"
                > -->
                <div class="bg-red-200">{{ item.employeeId }}</div>
                <!-- </div> -->
                <!-- <div v-else class="bg-green-200">
                  {{ item.employeeId }}
                </div> -->
              </span>
              <span
                v-else-if="
                  item.positiveWish &&
                    time > 0 &&
                    item.positiveWish.includes(time)
                "
              >
                <!-- <div
                  v-if="time > 0 && item.positiveWish.includes(time)"
                  class="bg-red-200"
                > -->
                <div class="bg-green-400">{{ item.employeeId }}</div>
                <!-- </div> -->
                <!-- <div v-else class="bg-green-200">
                  {{ item.employeeId }}
                </div> -->
              </span>
              <span v-else>
                <div v-if="time > 0">
                  {{ item.employeeId }}
                </div>
              </span>
            </td>
            <td
              class="m-3"
              :class="
                      (item.totalTime / (item.weeklyWorkingHours / 5)) * 100 &lt; 20
                        ? 'bg-orange-200'
                        : (item.totalTime / (item.weeklyWorkingHours / 5)) * 100 >= 20 && (item.totalTime / (item.weeklyWorkingHours / 5)) * 100 &lt; 40?
                        'bg-orange-300'
                        : (item.totalTime / (item.weeklyWorkingHours / 5)) * 100 >= 40 && (item.totalTime / (item.weeklyWorkingHours / 5)) * 100 &lt; 60?
                        'bg-orange-400' 
                        : (item.totalTime / (item.weeklyWorkingHours / 5)) * 100 >= 60 && (item.totalTime / (item.weeklyWorkingHours / 5)) * 100 &lt; 80?
                        'bg-orange-500' 
                        : (item.totalTime / (item.weeklyWorkingHours / 5)) * 100 >= 80 && (item.totalTime / (item.weeklyWorkingHours / 5)) * 100 &lt; 90?
                        'bg-orange-600' 
                        : ((item.totalTime / (item.weeklyWorkingHours / 5)) * 100) >=90 && ((item.totalTime / (item.weeklyWorkingHours / 5)) * 100) &lt;= 100?
                        'bg-green-700' 
                        : ((item.totalTime / (item.weeklyWorkingHours / 5)) * 100) >100 ?
                        'bg-orange-700' : 'bg-red-800'
                    "
            >
              {{ item.totalTime }}/{{ item.weeklyWorkingHours / 5 }}
            </td>
            <td
              class="m-3"
              :class="
                      (item.positiveWishFulfilled / item.positiveWish.length) * 100 &lt; 20
                        ? 'bg-green-200'
                        : (item.positiveWishFulfilled / item.positiveWish.length) * 100 >= 20 && (item.positiveWishFulfilled / item.positiveWish.length) * 100 &lt; 40?
                        'bg-green-300'
                        : (item.positiveWishFulfilled / item.positiveWish.length) * 100 >= 40 && (item.positiveWishFulfilled / item.positiveWish.length) * 100 &lt; 60?
                        'bg-green-400' 
                        : (item.positiveWishFulfilled / item.positiveWish.length) * 100 >= 60 && (item.positiveWishFulfilled / item.positiveWish.length) * 100 &lt; 80?
                        'bg-green-500' 
                        : (item.positiveWishFulfilled / item.positiveWish.length) * 100 >= 80 && (item.positiveWishFulfilled / item.positiveWish.length) * 100 &lt; 90?
                        'bg-green-600' 
                        : ((item.positiveWishFulfilled / item.positiveWish.length) * 100) >=90 && ((item.positiveWishFulfilled / item.positiveWish.length) * 100) &lt;= 100?
                        'bg-green-700' 
                        : ((item.positiveWishFulfilled / item.positiveWish.length) * 100) >100 ?
                        'bg-green-800' : 'bg-gray-100'
                    "
            >
              {{ item.positiveWishFulfilled }}/{{ item.positiveWish.length }}
            </td>
            <td
              class="m-3"
              :class="
                      (item.negativeWishFulfilled / item.negativeWish.length) * 100 &lt; 20
                        ? 'bg-green-200'
                        : (item.negativeWishFulfilled / item.negativeWish.length) * 100 >= 20 && (item.negativeWishFulfilled / item.negativeWish.length) * 100 &lt; 40?
                        'bg-green-300'
                        : (item.negativeWishFulfilled / item.negativeWish.length) * 100 >= 40 && (item.negativeWishFulfilled / item.negativeWish.length) * 100 &lt; 60?
                        'bg-green-400' 
                        : (item.negativeWishFulfilled / item.negativeWish.length) * 100 >= 60 && (item.negativeWishFulfilled / item.negativeWish.length) * 100 &lt; 80?
                        'bg-green-500' 
                        : (item.negativeWishFulfilled / item.negativeWish.length) * 100 >= 80 && (item.negativeWishFulfilled / item.negativeWish.length) * 100 &lt; 90?
                        'bg-green-600' 
                        : ((item.negativeWishFulfilled / item.negativeWish.length) * 100) >=90 && ((item.negativeWishFulfilled / item.negativeWish.length) * 100) &lt;= 100?
                        'bg-green-700' 
                        : ((item.negativeWishFulfilled / item.negativeWish.length) * 100) >100 ?
                        'bg-green-800' : 'bg-gray-100'
                    "
            >
              {{ item.negativeWishFulfilled }}/{{ item.negativeWish.length }}
            </td>
            <td
              class="m-3"
              :class="
                      (item.absenceWishFulfilled / item.absenceRange.length) * 100 &lt; 20
                        ? 'bg-green-200'
                        : (item.absenceWishFulfilled / item.absenceRange.length) * 100 >= 20 && (item.absenceWishFulfilled / item.absenceRange.length) * 100 &lt; 40?
                        'bg-green-300'
                        : (item.absenceWishFulfilled / item.absenceRange.length) * 100 >= 40 && (item.absenceWishFulfilled / item.absenceRange.length) * 100 &lt; 60?
                        'bg-green-400' 
                        : (item.absenceWishFulfilled / item.absenceRange.length) * 100 >= 60 && (item.absenceWishFulfilled / item.absenceRange.length) * 100 &lt; 80?
                        'bg-green-500' 
                        : (item.absenceWishFulfilled / item.absenceRange.length) * 100 >= 80 && (item.absenceWishFulfilled / item.absenceRange.length) * 100 &lt; 90?
                        'bg-green-600' 
                        : ((item.absenceWishFulfilled / item.absenceRange.length) * 100) >=90 && ((item.absenceWishFulfilled / item.absenceRange.length) * 100) &lt;= 100?
                        'bg-green-700' 
                        : ((item.absenceWishFulfilled / item.absenceRange.length) * 100) >100 ?
                        'bg-green-800' : 'bg-gray-100'
                    "
            >
              {{ item.absenceWishFulfilled }}/{{ item.absenceRange.length }}
            </td>
            <td>
              {{ item.empPower.toFixed(2) }}
            </td>
          </tr>
        </template>
        <tr>
          <td>demand coverage</td>
          <td v-for="number in officeOpenTimings" :key="number">
            <span v-for="(item, i) in demand" :key="i">
              <span v-if="item.workAreaId == workArea.workAreaId">
                <span v-for="(demand, i) in item.totalDemand" :key="i">
                  <span
                    v-if="demand.time == number"
                    class="p-3"
                    :class="
                      (demand.currentlyEmployed / item.amount) * 100 &lt; 20
                        ? 'bg-pink-200'
                        : (demand.currentlyEmployed / item.amount) * 100 >= 20 && (demand.currentlyEmployed / item.amount) * 100 &lt; 40?
                        'bg-pink-300'
                        : (demand.currentlyEmployed / item.amount) * 100 >= 40 && (demand.currentlyEmployed / item.amount) * 100 &lt; 60?
                        'bg-pink-400' 
                        : (demand.currentlyEmployed / item.amount) * 100 >= 60 && (demand.currentlyEmployed / item.amount) * 100 &lt; 80?
                        'bg-pink-500' 
                        : (demand.currentlyEmployed / item.amount) * 100 >= 80 && (demand.currentlyEmployed / item.amount) * 100 &lt; 90?
                        'bg-pink-600' 
                        : ((demand.currentlyEmployed / item.amount) * 100) >=90 && ((demand.currentlyEmployed / item.amount) * 100) &lt;= 100?
                        'bg-green-700' 
                        : ((demand.currentlyEmployed / item.amount) * 100) >100 ?
                        'bg-pink-700' : 'bg-red-800'
                    "
                  >
                    <!-- {{((demand.currentlyEmployed / item.amount) * 100) >=90 && ((demand.currentlyEmployed / item.amount) * 100) &lt;= 100}} -->
                    <!-- {{((demand.currentlyEmployed/item.amount)*100 > 20) && (((demand.currentlyEmployed/item.amount)*100) &lt; 90)}} -->
                    {{ demand.currentlyEmployed }}/{{ item.amount }}
                  </span>
                  <!-- <span v-else-if="demand.time == number" class="p-3">
                    {{((demand.currentlyEmployed/item.amount)*100) > 50}}
                    {{ demand.currentlyEmployed }}/{{ item.amount }}
                  </span> -->
                </span>
              </span>
            </span>
          </td>
        </tr>
        <template v-for="(staffing, i) in stuffingFinal" :key="i">
          <tr v-if="workArea.workAreaId == staffing.workAreaId">
            <td>overStaffing</td>
            <td colspan="12" class="bg-pink-700">
              {{ staffing.overStuffing }}
            </td>
          </tr>
          <tr v-if="workArea.workAreaId == staffing.workAreaId">
            <td>underStaffing</td>
            <td colspan="12" class="bg-pink-200">
              {{ staffing.underStuffing }}
            </td>
          </tr>
          <tr v-if="workArea.workAreaId == staffing.workAreaId">
            <td>underTime</td>
            <td colspan="12" class="bg-orange-200">{{ staffing.underTime }}</td>
          </tr>
          <tr v-if="workArea.workAreaId == staffing.workAreaId">
            <td>overtime</td>
            <td colspan="12" class="bg-orange-700">{{ staffing.overtime }}</td>
          </tr>
          <tr v-if="workArea.workAreaId == staffing.workAreaId">
            <td>Wish Fulfilled</td>
            <td colspan="12" class="bg-green-400">
              {{
                (
                  ((staffing.absenceWishFulfilled +
                    staffing.wishNegativeFulfilled +
                    staffing.wishPositiveFulfilled) /
                    (staffing.totalAbsence +
                      staffing.totalNegativeWish +
                      staffing.totalPositiveWish)) *
                  100
                ).toFixed(2)
              }}%
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <!-- <div class="inline-grid p-10">
      <div v-for="(item, i) in demand" :key="i">
        <span class="pr-5">start_time: {{ item.start_time }} </span>
        <span class="pr-5">end_time: {{ item.end_time }} </span>
        <span class="pr-5">demand: {{ item.demand }} </span>
        <span> totalDemand: {{ item.totalDemand }}</span>
      </div>
    </div>
    <div v-for="(item, i) in employee" :key="i">
      <span class="pr-5">employee_name: {{ item.emp_name }} </span>
      <span class="pr-5"
        >daily_working_time_left: {{ item.daily_working_time }}
      </span>
      <span class="pr-5">work_start_time: {{ item.work_start_time }} </span>
      <span class="pr-5">work_end_time: {{ item.work_end_time }}</span>
      <span>range: {{ item.range }}</span>
    </div> -->
  </div>
</template>

<!-- eslint-disable -->

<script lang="ts">
/* eslint-disable */
import { defineComponent, ref } from "vue";
import { task } from "./algorithm/task";
import { days } from "./algorithm/days";
import { timetable } from "./algorithm/timetable";
import { empPower } from "./algorithm/empPower";
import { employee } from "./algorithm/interface";

import chart from "./chart.vue";
// import dna from "./algorithm/dna";
export default defineComponent({
  name: "App",
  components: {
    chart,
  },
  setup() {
    // let {
    //   officeOpenTimings,
    //   demand,
    //   shift,
    //   workArea,
    //   stuffingFinal,
    //   generattion_array,
    //   best_pop_array,
    //   final_rank_index,
    //   final_pop_population,
    // } = task();
    const dayOutput = days();
    console.log(dayOutput);
    let officeOpenTimings = ref(task().officeOpenTimings);
    let demand = ref(task().demand);
    let shift = ref(task().shift);
    let workArea = ref(task().workArea);
    let stuffingFinal = ref(task().stuffingFinal);
    let best_pop_array = ref(task().best_pop_array);
    let final_rank_index = ref(task().final_rank_index);
    let final_pop_population: any = ref(task().final_pop_population);
    let array_number = ref(1);
    let fairness_array: any = ref([]);
    let staffing_array: any = ref([]);
    // console.log(
    //   "this is final_rank_index",
    //   final_rank_index.value.length,
    //   final_rank_index.value,
    //   final_pop_population.value
    // );

    function makeArray() {
      for (let i = 0; i < final_rank_index.value.length; i++) {
        fairness_array.value.push(final_pop_population.value[i].fairness);
        staffing_array.value.push(final_pop_population.value[i].staffing);
      }
    }

    makeArray();
    // console.log("fairness array, staffing array", fairness_array.value, staffing_array.value);
    console.log("employee on load", employee)
    let employeeObjectForThisTimetable = empPower(
      final_pop_population.value[0].genes
    );

    //setting the table for the first DNA/timetable in set of population/timetable
    let setInitialShift = timetable(
      final_pop_population.value[0].genes,
      employeeObjectForThisTimetable
    );
    shift.value = setInitialShift.shift;
    // timetable(final_pop_population[array_number])
    function updateTable(e: any) {
      // console.log("hello world", e.config);
      console.log("employee after click ", employee)
      array_number.value = e.config;
       employeeObjectForThisTimetable = empPower(
      final_pop_population.value[array_number.value].genes
    );
      let click_callback = timetable(
        final_pop_population.value[array_number.value].genes,
        employeeObjectForThisTimetable,
        2
      );

      officeOpenTimings.value = click_callback.officeOpenTimings;
      demand.value = click_callback.demand;
      shift.value = click_callback.shift;
      workArea.value = click_callback.workArea;
      stuffingFinal.value = click_callback.stuffingFinal;
      // generattion_array = click_callback.generation_array
      // best_pop_array = click_callback.best_pop_array
      //  console.log("click_callback",click_callback);
      console.log("this is employee in vue", employee);
    }
    // console.log("checking old and new value", stuffingFinal.value);
    // console.log("this is shift in app.vue", shift);

    return {
      officeOpenTimings,
      demand,
      shift,
      workArea,
      stuffingFinal,
      best_pop_array,
      updateTable,
      array_number,
      fairness_array,
      staffing_array,
    };
  },
  // methods: {
  //   updateTable(e: any) {
  //     this.updateTable()
  //     console.log("hello world", e);
  //   },
  // },
});
</script>

<style scoped>
table,
th,
td {
  border: 1px solid black;
}
</style>
