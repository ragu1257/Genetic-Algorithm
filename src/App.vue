<template>
  <div>
    <!-- <button>Monday</button> -->
    <chart
      :staffingFairnessArray="fairness_staffing_array"
      @update-table="updateTable"
    />

    <div>
      <pieChart
        class="pieChart-inline"
        :totalWishNotFulfilled="wish_fulfil_not_fulfil_array"
      />
      <pieChartDemand
        class="pieChart-inline"
        :totalDemandOutcome="demant_met_not_met_array"
      />
      <sDLineChart
        :standardDeviationArray="standardDeviationArray"
        :standardDeviation="standardDeviation"
      />
      <meanColumnChart
        :standardMeanArray="standardMeanArray"
        :standardMeanValue="standardMeanValue"
      />
      <!-- <groupedBarChart :barArrayObject="bar_array_object" /> -->
      <columnDataLabels :dataLabels="columnWithDataLabelsData" />
    </div>
    <div v-for="(daily_shift, index) in weekly_timetable_array" :key="index">
      <div class="days">Day {{ daily_shift.day_id }}</div>
      <table
        @update-table="updateTable"
        class="table-auto w-2/3 text-center"
        v-bind:style="{ display: 'inline-table' }"
      >
        <thead>
          <tr>
            <th>Name</th>
            <th v-for="item in daily_shift.officeOpenTimings" :key="item">
              {{ item }}
            </th>
            <!-- <th>Daily working time / Fixed Working Time</th> -->
            <th>Positive Wish Fulfilled / Total Positive Wish</th>
            <th>Negative Wish Fulfilled / Total Negative Wish</th>
            <th>Absence Wish Fulfilled / Total Absence</th>
            <th>Employee Power</th>
          </tr>
        </thead>
        <tbody v-for="(workArea, i) in daily_shift.workArea" :key="i">
          <!-- <div v-for="(workArea, i) in workArea" :key="i"> -->
          <tr class="bg-orange-400">
            <td>{{ workArea.workAreaName }}</td>
          </tr>
          <template v-for="(item, i) in daily_shift.shift" :key="i">
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
              <!-- <td
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
            </td> -->
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
            <td v-for="number in daily_shift.officeOpenTimings" :key="number">
              <span v-for="(item, i) in daily_shift.demand" :key="i">
                <span
                  v-if="
                    item.workAreaId == workArea.workAreaId &&
                      item.day == daily_shift.day_id
                  "
                >
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
          <template v-for="(staffing, i) in daily_shift.stuffingFinal" :key="i">
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
            <!-- <tr v-if="workArea.workAreaId == staffing.workAreaId">
            <td>underTime</td>
            <td colspan="12" class="bg-orange-200">{{ staffing.underTime }}</td>
          </tr>
          <tr v-if="workArea.workAreaId == staffing.workAreaId">
            <td>overtime</td>
            <td colspan="12" class="bg-orange-700">{{ staffing.overtime }}</td>
          </tr> -->
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
    </div>
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
// import { days } from "./algorithm/days";
import { timetable } from "./algorithm/timetable";
import { empPower } from "./algorithm/empPower";
import {
  employee,
  setLastEmployeeInfo,
  ep_powers,
  lastEmployeeInfo,
  set_ep_power,
} from "./algorithm/interface";
import { std, mean } from "mathjs";
import chart from "./chart.vue";
import pieChartDemand from "./pieChartDemand.vue";
import pieChart from "./pieChart.vue";
import sDLineChart from "./sDLineChart.vue";
import meanColumnChart from "./meanColumnChart.vue";
import groupedBarChart from "./groupedBarChart.vue";
import columnDataLabels from "./columnDataLabels.vue";
import * as _ from "lodash";
// import dna from "./algorithm/dna";
export default defineComponent({
  name: "App",
  components: {
    chart,
    pieChart,
    sDLineChart,
    meanColumnChart,
    groupedBarChart,
    pieChartDemand,
    columnDataLabels,
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
    // const dayOutput = days();
    // console.log(dayOutput);
    let officeOpenTimings = ref();
    let demand = ref();
    let shift = ref();
    let workArea = ref();
    let stuffingFinal = ref();
    // let best_pop_array = ref(task().best_pop_array);
    let final_rank_index = ref();
    let final_pop_population: any = ref();
    let array_number = ref(1);
    let fairness_staffing_array: any = ref([]);
    let demant_met_not_met_array: any = ref([]);
    let days = ref(["Monday", "Tuesday", "Wednesday"]);
    let complete_log_of_everyday_timetable: any = ref([]);
    let next_day = ref(0);
    let totalWeeklyWishNotFulfilled = ref(0);
    let totalWeeklyWishForAllEmployees = ref(0);
    let makePieChart = ref(false);
    let wish_fulfil_not_fulfil_array = ref();
    let standardDeviationArray = ref();
    let standardMeanArray = ref();
    let standardMeanValue = ref(0);
    let standardDeviation = ref(0);
    let weekly_timetable_array: any = ref([]);
    let bar_array_object: any = ref();
    let columnWithDataLabelsData: any = ref([]);

    let fetchTask = task();
    final_pop_population.value = fetchTask.final_pop_population;
    final_rank_index.value = fetchTask.final_rank_index;

    // console.log(
    //   "this is fetch tasks",
    //   fetchTask,
    //   final_rank_index.value,
    //   final_pop_population.value
    // );

    fetchFirstIndexValue();

    function fetchFirstIndexValue(index_value = 0) {
      weekly_timetable_array.value = [];
      let default_timetable_pop =
        final_pop_population.value[final_rank_index.value[index_value]];
      // console.log("default_timetable_pop", default_timetable_pop);
      let cloned_lastEmployeeInfo = _.cloneDeep(employee);
      let ep_powers_for_all_days = [];
      for (let i = 0; i < default_timetable_pop.genes.length; i++) {
        // console.log(
        //   "default_timetable_pop.genes[i]",
        //   default_timetable_pop.genes[i]
        // );
        let shift_for_each_day: any = {};
        // console.log("checking employee in shift each day", employee)
        if (i == 0) {
          shift_for_each_day = timetable(
            default_timetable_pop.genes[i],
            cloned_lastEmployeeInfo,
            i + 1
          );
          let updated_emp = empPower(default_timetable_pop.genes[i]);
          setLastEmployeeInfo(updated_emp);
          ep_powers_for_all_days.push(updated_emp);
        } else {
          shift_for_each_day = timetable(
            default_timetable_pop.genes[i],
            lastEmployeeInfo,
            i + 1
          );
          let updated_emp = empPower(default_timetable_pop.genes[i]);
          setLastEmployeeInfo(updated_emp);
          ep_powers_for_all_days.push(updated_emp);
        }

        shift_for_each_day.day_id = i + 1;
        weekly_timetable_array.value.push(shift_for_each_day);
        // console.log("shift_for_each_day", shift_for_each_day);
      }
      set_ep_power(ep_powers_for_all_days);

      updateEPInTable();
    }

    // console.log("weekly_timetable_array", weekly_timetable_array)
    // console.log("ep_powers", ep_powers)

    function updateEPInTable() {
      for (let i = 0; i < weekly_timetable_array.value.length; i++) {
        for (let j = 0; j < ep_powers.length; j++) {
          if (i == j) {
            for (
              let k = 0;
              k < weekly_timetable_array.value[i].shift.length;
              k++
            ) {
              let result = ep_powers[j].filter(
                (item: { empId: any }) =>
                  item.empId ==
                  weekly_timetable_array.value[i].shift[k].employeeId
              );
              // console.log("it is mattchedddddddddddddddddddddddddddddd", result)
              weekly_timetable_array.value[i].shift[k].empPower =
                result[0].empPower;
            }
          }
        }
      }
    }

    //    console.log("weekly_timetable_array", weekly_timetable_array.value);
    // console.log("this is final ep powers array object", ep_powers);
    // function setTaskData(fetchTask: {
    //   officeOpenTimings: any;
    //   demand: any;
    //   shift: any;
    //   workArea: any;
    //   stuffingFinal: any;
    //   best_pop_array?: number[];
    //   finalOverstuffing?: number;
    //   finalUnderStuffing?: number;
    //   finalUnderTime?: number;
    //   finalOverTime?: number;
    //   final_rank_index: any;
    //   final_pop_population: any;
    // }) {
    //   officeOpenTimings.value = fetchTask.officeOpenTimings;
    //   demand.value = fetchTask.demand;
    //   shift.value = fetchTask.shift;
    //   workArea.value = fetchTask.workArea;
    //   stuffingFinal.value = fetchTask.stuffingFinal;
    //   final_rank_index.value = fetchTask.final_rank_index;
    //   final_pop_population.value = fetchTask.final_pop_population;
    // }

    function makeArray() {
      // console.log("final_rank_index in make array", final_rank_index.value);
      // console.log("final_pop_population",final_pop_population.value)
      fairness_staffing_array.value = [];
      for (let i = 0; i < final_rank_index.value.length; i++) {
        fairness_staffing_array.value.push([
          final_pop_population.value[final_rank_index.value[i]].fairness,
          final_pop_population.value[final_rank_index.value[i]].staffing,
        ]);
      }

      // console.log("fairness_staffing_array", fairness_staffing_array.value);
    }

    makeArray();

    // return a new employee object with updated EP power
    // let employeeObjectForThisTimetable = empPower(
    //   final_pop_population.value[final_rank_index.value[0]].genes
    // );

    // setNewEmployee(employeeObjectForThisTimetable);

    //calling timetable.ts to return new shift with updated EP power for the first DNA/timetable in set of population/timetable
    // let setInitialShift = timetable(
    //   final_pop_population.value[0].genes,
    //   employeeObjectForThisTimetable
    // );
    //setting shift to a updated shift and all other return values respectively

    // officeOpenTimings.value = setInitialShift.officeOpenTimings;
    // demand.value = setInitialShift.demand;
    // shift.value = setInitialShift.shift;
    // workArea.value = setInitialShift.workArea;
    // stuffingFinal.value = setInitialShift.stuffingFinal;

    function updateTable(e: any) {
      array_number.value = e.config;
      // console.log("this is clicked", e.config)
      fetchFirstIndexValue(array_number.value);
      calcTotalWishesNotFulfilledWeek();
      calcTotalDeamndMetAndNotMet();
      calStandardDeviationOfIndividualsFairness();
      //           console.log("weekly_timetable_array on click", weekly_timetable_array.value)
      // console.log("ep_powers on click", ep_powers)
      //   employeeObjectForThisTimetable = empPower(
      //     final_pop_population.value[array_number.value].genes
      //   );

      // setNewEmployee(employeeObjectForThisTimetable);

      // let click_callback = timetable(
      //   final_pop_population.value[array_number.value].genes,
      //   employeeObjectForThisTimetable
      // );

      //   officeOpenTimings.value = click_callback.officeOpenTimings;
      //   demand.value = click_callback.demand;
      //   shift.value = click_callback.shift;
      //   workArea.value = click_callback.workArea;
      //   stuffingFinal.value = click_callback.stuffingFinal;
    }

    // console.log("weekly_timetable_array", weekly_timetable_array.value);
    // console.log("ep_powers", ep_powers);
    calcTotalWishesNotFulfilledWeek();

    function calcTotalWishesNotFulfilledWeek() {
      console.log(
        "weekly_timetable_array.value. weekly_timetable_array.value.",
        weekly_timetable_array.value
      );
      let totalWishesNotFulfilled = 0;
      let totalWishes = 0;
      for (let i = 0; i < weekly_timetable_array.value.length; i++) {
        for (
          let j = 0;
          j < weekly_timetable_array.value[i].stuffingFinal.length;
          j++
        ) {
          totalWishesNotFulfilled +=
            weekly_timetable_array.value[i].stuffingFinal[j]
              .absenceWishFulfilled +
            weekly_timetable_array.value[i].stuffingFinal[j]
              .wishNegativeFulfilled +
            weekly_timetable_array.value[i].stuffingFinal[j]
              .wishPositiveFulfilled;
          totalWishes +=
            weekly_timetable_array.value[i].stuffingFinal[j].totalAbsence +
            weekly_timetable_array.value[i].stuffingFinal[j].totalNegativeWish +
            weekly_timetable_array.value[i].stuffingFinal[j].totalPositiveWish;
        }
      }
      totalWeeklyWishNotFulfilled.value = totalWishesNotFulfilled;
      totalWeeklyWishForAllEmployees.value = totalWishes;
      wish_fulfil_not_fulfil_array.value = [
        totalWeeklyWishNotFulfilled.value,
        totalWeeklyWishForAllEmployees.value -
          totalWeeklyWishNotFulfilled.value,
      ];
    }

    calcTotalDeamndMetAndNotMet();

    function calcTotalDeamndMetAndNotMet() {
      let demandNotMet = 0;
      let totalDemand = 0;
      for (let i = 0; i < weekly_timetable_array.value.length; i++) {
        for (
          let j = 0;
          j < weekly_timetable_array.value[i].stuffingFinal.length;
          j++
        ) {
          demandNotMet +=
            weekly_timetable_array.value[i].stuffingFinal[j].overStuffing +
            weekly_timetable_array.value[i].stuffingFinal[j].underStuffing;
        }
      }

      for (let i = 0; i < weekly_timetable_array.value.length; i++) {
        for (
          let j = 0;
          j < weekly_timetable_array.value[i].demand.length;
          j++
        ) {
          totalDemand += weekly_timetable_array.value[i].demand[j].amount;
        }
        break;
      }
      let demandMet = totalDemand - demandNotMet;

      demant_met_not_met_array.value = [demandMet, demandNotMet];
    }

    calStandardDeviationOfIndividualsFairness();

    function calStandardDeviationOfIndividualsFairness() {
      let standardDeviationArrayLocal = [];
      for (let i = 0; i < employee.length; i++) {
        let currentEmployeeFairnessScore = 0;
        for (let j = 0; j < ep_powers.length; j++) {
          // console.log("inside");
          for (let k = 0; k < ep_powers[j].length; k++) {
            if (employee[i].empId == ep_powers[j][k].empId) {
              // console.log("ep_powers[j].positiveWish", ep_powers[j].positiveWish);
              ep_powers[j][k].positiveWish.some((item: any) => {
                if (ep_powers[j][k].timeRange.includes(item)) {
                  currentEmployeeFairnessScore += 1;
                } else {
                  currentEmployeeFairnessScore += 0;
                }
              });
              ep_powers[j][k].negativeWish.some((item: any) => {
                if (ep_powers[j][k].timeRange.includes(item)) {
                  currentEmployeeFairnessScore += 0;
                } else {
                  currentEmployeeFairnessScore += 1;
                }
              });
              ep_powers[j][k].absenceRange.some((item: any) => {
                if (ep_powers[j][k].timeRange.includes(item)) {
                  currentEmployeeFairnessScore += 0;
                } else {
                  currentEmployeeFairnessScore += 1;
                }
              });
            }
          }
        }
        standardDeviationArrayLocal.push(currentEmployeeFairnessScore);
      }
      console.log("standardDeviationArrayLocal", standardDeviationArrayLocal);
      let meanValue: number = mean(standardDeviationArrayLocal);
      console.log("this is mean", mean(standardDeviationArrayLocal));
      let sortedArray = standardDeviationArrayLocal.sort((a, b) => a - b);
      console.log(
        "sort aarray",
        standardDeviationArrayLocal.sort((a, b) => a - b)
      );
      let meanDeviationArrayIntermediate = [];
      let meanDeviationArray = [];

      for (let i = 0; i < sortedArray.length; i++) {
        meanDeviationArrayIntermediate.push(sortedArray[i] - meanValue);
      }

      for (let i = 0; i < meanDeviationArrayIntermediate.length; i++) {
        meanDeviationArray.push(parseFloat(meanDeviationArrayIntermediate[i].toFixed(0)));
      }
      console.log("thi sis subtracted values", meanDeviationArray);
      standardMeanArray.value = meanDeviationArray;
      standardMeanValue.value = meanValue;
      let leftArray = [];
      let rightArray = [];

      for (let i = 0; i < standardDeviationArrayLocal.length; i++) {
        if (i < standardDeviationArrayLocal.length / 2) {
          leftArray.push(standardDeviationArrayLocal[i]);
        } else {
          rightArray.push(standardDeviationArrayLocal[i]);
        }
      }
      leftArray.sort((a, b) => a - b);
      rightArray.sort((a, b) => b - a);

      standardDeviationArrayLocal = leftArray.concat(rightArray);
      // console.log("standardDeviationArrayLocal, left and right",standardDeviationArrayLocal, leftArray, rightArray)

      standardDeviation.value = std(standardDeviationArrayLocal);

      standardDeviationArray.value = standardDeviationArrayLocal;

      // console.log("standardDeviation, standardDeviationArray", standardDeviation.value, standardDeviationArray.value);
    }

    calGroupData();

    function calGroupData() {
      let barArrayObject: any = [];
      console.log("ep_powers", ep_powers);
      for (let i = 0; i < ep_powers.length; i++) {
        // console.log("inside");
        let currentDayEmpWishes = [];
        for (let j = 0; j < ep_powers[i].length; j++) {
          let wishesCount = 0;
          // console.log("ep_powers[i].positiveWish", ep_powers[i].positiveWish);
          ep_powers[i][j].positiveWish.some((item: any) => {
            if (ep_powers[i][j].timeRange.includes(item)) {
              wishesCount += 1;
            } else {
              wishesCount += 0;
            }
          });
          ep_powers[i][j].negativeWish.some((item: any) => {
            if (ep_powers[i][j].timeRange.includes(item)) {
              wishesCount += 0;
            } else {
              wishesCount += 1;
            }
          });
          ep_powers[i][j].absenceRange.some((item: any) => {
            if (ep_powers[i][j].timeRange.includes(item)) {
              wishesCount += 0;
            } else {
              wishesCount += 1;
            }
          });
          currentDayEmpWishes.push(wishesCount);
        }
        barArrayObject.push({ data: currentDayEmpWishes });
      }
      bar_array_object.value = barArrayObject;
      console.log("bar object", barArrayObject);
    }

    columnWithDataLabels();

    function columnWithDataLabels() {
      let finalData = [];
      for (let i = 0; i < employee.length; i++) {
        let wishFulfilled = 0;
        let totalWish = 0;
        for (let j = 0; j < ep_powers.length; j++) {
          let empOutcome = ep_powers[j].filter(
            (item: { empId: number }) => item.empId == employee[i].empId
          );
          empOutcome[0].absenceRange.map((item: any) => {
            !empOutcome[0].timeRange.includes(item)
              ? wishFulfilled++
              : wishFulfilled;
            totalWish++;
          });
          empOutcome[0].negativeWish.map((item: any) => {
            !empOutcome[0].timeRange.includes(item)
              ? wishFulfilled++
              : wishFulfilled;
            totalWish++;
          });
          empOutcome[0].positiveWish.map((item: any) => {
            empOutcome[0].timeRange.includes(item)
              ? wishFulfilled++
              : wishFulfilled;
            totalWish++;
          });
          // if(employee[i].empId == ep_powers[j].)
        }
        // console.log(
        //   "total wish of emp i ",
        //   employee[i].empId,
        //   totalWish,
        //   wishFulfilled
        // );
        let wishFulfilledPercentage = (wishFulfilled / totalWish) * 100;
        finalData.push(wishFulfilledPercentage.toFixed(2));
      }
      // console.log("this is final perecenteage", data)
      columnWithDataLabelsData.value = [
        { name: "wish fulfilled", data: finalData },
      ];
    }
    return {
      officeOpenTimings,
      demand,
      shift,
      workArea,
      stuffingFinal,
      updateTable,
      array_number,
      fairness_staffing_array,
      // updateDayTable,
      makePieChart,
      wish_fulfil_not_fulfil_array,
      standardDeviationArray,
      standardMeanArray,
      standardMeanValue,
      standardDeviation,
      weekly_timetable_array,
      demant_met_not_met_array,
      bar_array_object,
      columnWithDataLabelsData,
      // fairness_array,
      // staffing_array,
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
.days {
  background: #333;
  color: #fff;
  text-align: center;
  font-size: 24px;
}
.pieChart-inline {
  display: inline-block;
}
</style>
