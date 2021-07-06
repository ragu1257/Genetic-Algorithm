<template>
  <div>
    <button>Monday</button>
    <chart
      :staffingFairnessArray="fairness_staffing_array"
      @update-table="updateTable"
    />

    <div v-if="makePieChart">
      <pieChart :totalWishNotFulfilled="wish_fulfil_not_fulfil_array" />
      <sDLineChart :standardDeviationArray="standardDeviationArray" :standardDeviation="standardDeviation" />
    </div>
    <!-- {{ array_number }} -->
    <div>
      <button>Save</button>
      <button @click="updateDayTable">Next</button>
    </div>
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
// import { days } from "./algorithm/days";
import { timetable } from "./algorithm/timetable";
import { empPower } from "./algorithm/empPower";
import { employee, setLastEmployeeInfo } from "./algorithm/interface";
import { std } from "mathjs";
import chart from "./chart.vue";
import pieChart from "./pieChart.vue";
import sDLineChart from "./sDLineChart.vue"
// import dna from "./algorithm/dna";
export default defineComponent({
  name: "App",
  components: {
    chart,
    pieChart,
    sDLineChart
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
    let days = ref(["Monday", "Tuesday", "Wednesday"]);
    let complete_log_of_everyday_timetable: any = ref([]);
    let next_day = ref(0);
    let totalWeeklyWishNotFulfilled = ref(0);
    let totalWeeklyWishForAllEmployees = ref(0);
    let makePieChart = ref(false);
    let wish_fulfil_not_fulfil_array = ref();
    let standardDeviationArray = ref()
    let standardDeviation = ref(0)

    let fetchTask = task(1);
    console.log(fetchTask);
    function setTaskData(fetchTask: {
      officeOpenTimings: any;
      demand: any;
      shift: any;
      workArea: any;
      stuffingFinal: any;
      best_pop_array?: number[];
      finalOverstuffing?: number;
      finalUnderStuffing?: number;
      finalUnderTime?: number;
      finalOverTime?: number;
      final_rank_index: any;
      final_pop_population: any;
    }) {
      officeOpenTimings.value = fetchTask.officeOpenTimings;
      demand.value = fetchTask.demand;
      shift.value = fetchTask.shift;
      workArea.value = fetchTask.workArea;
      stuffingFinal.value = fetchTask.stuffingFinal;
      final_rank_index.value = fetchTask.final_rank_index;
      final_pop_population.value = fetchTask.final_pop_population;
    }

    setTaskData(fetchTask);
    function makeArray() {
      console.log("final_rank_index in make array", final_rank_index.value)
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
    let employeeObjectForThisTimetable = empPower(
      final_pop_population.value[final_rank_index.value[0]].genes
    );

    // setNewEmployee(employeeObjectForThisTimetable);

    //calling timetable.ts to return new shift with updated EP power for the first DNA/timetable in set of population/timetable
    let setInitialShift = timetable(
      final_pop_population.value[0].genes,
      employeeObjectForThisTimetable
    );
    //setting shift to a updated shift and all other return values respectively

    officeOpenTimings.value = setInitialShift.officeOpenTimings;
    demand.value = setInitialShift.demand;
    shift.value = setInitialShift.shift;
    workArea.value = setInitialShift.workArea;
    stuffingFinal.value = setInitialShift.stuffingFinal;

    function updateTable(e: any) {
      array_number.value = e.config;
      employeeObjectForThisTimetable = empPower(
        final_pop_population.value[array_number.value].genes
      );

      // setNewEmployee(employeeObjectForThisTimetable);

      let click_callback = timetable(
        final_pop_population.value[array_number.value].genes,
        employeeObjectForThisTimetable
      );

      officeOpenTimings.value = click_callback.officeOpenTimings;
      demand.value = click_callback.demand;
      shift.value = click_callback.shift;
      workArea.value = click_callback.workArea;
      stuffingFinal.value = click_callback.stuffingFinal;
    }

    function calcTotalWishesNotFulfilledWeek() {
      let negativeWishNotFullfilled = 0;
      let positiveWishNotFullfilled = 0;
      let absenceWishNotFullfilled = 0;

      let negativeWish = 0;
      let positiveWish = 0;
      let absenceWish = 0;

      for (
        let i = 0;
        i < complete_log_of_everyday_timetable.value.length;
        i++
      ) {
        for (
          let j = 0;
          j <
          complete_log_of_everyday_timetable.value[i].employee_object_info
            .length;
          j++
        ) {
          complete_log_of_everyday_timetable.value[i].employee_object_info[
            j
          ].positiveWish.some((item: any) => {
            if (
              complete_log_of_everyday_timetable.value[i].employee_object_info[
                j
              ].timeRange.includes(item)
            ) {
              positiveWishNotFullfilled += 0;
            } else {
              positiveWishNotFullfilled += 1;
            }
          });
          complete_log_of_everyday_timetable.value[i].employee_object_info[
            j
          ].negativeWish.some((item: any) => {
            if (
              complete_log_of_everyday_timetable.value[i].employee_object_info[
                j
              ].timeRange.includes(item)
            ) {
              negativeWishNotFullfilled += 1;
            }
          });
          complete_log_of_everyday_timetable.value[i].employee_object_info[
            j
          ].absenceRange.some((item: any) => {
            if (
              complete_log_of_everyday_timetable.value[i].employee_object_info[
                j
              ].timeRange.includes(item)
            ) {
              absenceWishNotFullfilled += 1;
            }
          });

          positiveWish +=
            complete_log_of_everyday_timetable.value[i].employee_object_info[j]
              .positiveWish.length;
          negativeWish +=
            complete_log_of_everyday_timetable.value[i].employee_object_info[j]
              .negativeWish.length;
          absenceWish +=
            complete_log_of_everyday_timetable.value[i].employee_object_info[j]
              .absenceRange.length;
        }
      }
      totalWeeklyWishNotFulfilled.value =
        negativeWishNotFullfilled +
        positiveWishNotFullfilled +
        absenceWishNotFullfilled;

      totalWeeklyWishForAllEmployees.value =
        negativeWish + positiveWish + absenceWish;

      console.log(
        "this is totalWeeklyWishNotFulfilled, totalWeeklyWishForAllEmployees",
        totalWeeklyWishNotFulfilled.value,
        totalWeeklyWishForAllEmployees.value
      );
      wish_fulfil_not_fulfil_array.value = [
        totalWeeklyWishNotFulfilled.value,
        totalWeeklyWishForAllEmployees.value -
          totalWeeklyWishNotFulfilled.value,
      ];
    }

    function calStandardDeviationOfIndividualsFairness() {
      let standardDeviationArrayLocal = []

      for(let i=0; i<employee.length; i++){
        let currentEmployeeFairnessScore = 0
        for(let j=0; j<complete_log_of_everyday_timetable.value.length; j++){
          for(let k=0 ; k<complete_log_of_everyday_timetable.value[j].employee_object_info.length; k++){
            if(employee[i].empId == complete_log_of_everyday_timetable.value[j].employee_object_info[k].empId){

        complete_log_of_everyday_timetable.value[j].employee_object_info[k].positiveWish.some((item: any) => {
            if (complete_log_of_everyday_timetable.value[j].employee_object_info[k].timeRange.includes(item)) {
                currentEmployeeFairnessScore += 1
            }else{
                currentEmployeeFairnessScore += 0
            }
        });
        complete_log_of_everyday_timetable.value[j].employee_object_info[k].negativeWish.some((item: any) => {
            if (complete_log_of_everyday_timetable.value[j].employee_object_info[k].timeRange.includes(item)) {
                currentEmployeeFairnessScore += 0
            }else{
               currentEmployeeFairnessScore += 1
            }
        });
        complete_log_of_everyday_timetable.value[j].employee_object_info[k].absenceRange.some((item: any) => {
            if (complete_log_of_everyday_timetable.value[j].employee_object_info[k].timeRange.includes(item)) {
                currentEmployeeFairnessScore += 0
            }else{
               currentEmployeeFairnessScore += 1
            }
        });

            }
          }
        }

        standardDeviationArrayLocal.push(currentEmployeeFairnessScore)
      }

      let leftArray = []
      let rightArray = []

      for(let i=0; i<standardDeviationArrayLocal.length; i++){
        if(i<(standardDeviationArrayLocal.length/2)){
          leftArray.push(standardDeviationArrayLocal[i])
        }else{
          rightArray.push(standardDeviationArrayLocal[i])
        }
      }
      leftArray.sort((a, b) => a - b); 
      rightArray.sort((a, b) => b - a);

      standardDeviationArrayLocal = leftArray.concat(rightArray)
      // console.log("standardDeviationArrayLocal, left and right",standardDeviationArrayLocal, leftArray, rightArray)

      standardDeviation.value = std(standardDeviationArrayLocal)

      standardDeviationArray.value = standardDeviationArrayLocal

      // console.log("standardDeviation, standardDeviationArray", standardDeviation.value, standardDeviationArray.value);
      
    }

    function updateDayTable() {
      if (next_day.value < days.value.length) {
        setLastEmployeeInfo(employeeObjectForThisTimetable);
        let day_object = {
          day: days.value[next_day.value],
          employee_object_info: employeeObjectForThisTimetable,
          final_pop_population: final_pop_population.value,
          final_rank_index: final_rank_index.value,
          selected_score: array_number.value,
          fairness_staffing_array: fairness_staffing_array.value,
          shift: shift.value,
        };
        // console.log("this is day object", day_object);
        complete_log_of_everyday_timetable.value.push(day_object);
        next_day.value += 1;

        let new_day_task_return_values = task(next_day.value + 1);
        // console.log("ep value before", employee);
        // console.log(new_day_task_return_values);
        setTaskData(new_day_task_return_values);
        employeeObjectForThisTimetable = empPower(
          final_pop_population.value[final_rank_index.value[0]].genes
        );

        //calling timetable.ts to return new shift with updated EP power for the first DNA/timetable in set of population/timetable
        let setInitialShift = timetable(
          final_pop_population.value[0].genes,
          employeeObjectForThisTimetable
        );
        //setting shift to a updated shift and all other return values respectively

        officeOpenTimings.value = setInitialShift.officeOpenTimings;
        demand.value = setInitialShift.demand;
        shift.value = setInitialShift.shift;
        workArea.value = setInitialShift.workArea;
        stuffingFinal.value = setInitialShift.stuffingFinal;

        makeArray();
        // this.$emit("new-chart-data")
      } else {
        calcTotalWishesNotFulfilledWeek();
        calStandardDeviationOfIndividualsFairness();
        // console.log(
        //   "complete_log_of_everyday_timetable",
        //   complete_log_of_everyday_timetable
        // );

        makePieChart.value = true;
      }
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
      updateDayTable,
      makePieChart,
      wish_fulfil_not_fulfil_array,
      standardDeviationArray,
      standardDeviation
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
</style>
