<template>
  <div>
    <table
      class="table-auto w-2/3 text-center"
      v-bind:style="{ display: 'inline-table' }"
    >
      <thead>
        <tr>
          <th>Name</th>
          <th v-for="item in officeOpenTimings" :key="item">{{ item }}</th>
          <th>Daily working time / Fixed Working Time</th>
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
              <span  v-if="item.absenceRange && time > 0 && item.absenceRange.includes(time)">
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
              <span  v-else-if="item.negativeWish && time > 0 && item.negativeWish.includes(time)">
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
      <span  v-else-if="item.positiveWish && time > 0 && item.positiveWish.includes(time)">
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
                <div v-if="time > 0" >
                  {{ item.employeeId }}
                </div>
              </span>
            </td>
            <td class="m-3">{{ item.totalTime }}/{{item.weeklyWorkingHours/5}}</td>
          </tr>
        </template>
        <td>demand coverage</td>
        <td v-for="number in officeOpenTimings" :key="number">
          <span v-for="(item, i) in demand" :key="i">
            <span v-if="item.workAreaId == workArea.workAreaId">
              <span v-for="(demand, i) in item.totalDemand" :key="i">
                <span v-if="demand.time == number" class="p-3">
                  {{ demand.currentlyEmployed }}/{{ item.amount }}
                </span>
              </span>
            </span>
          </span>
        </td>
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

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    const { officeOpenTimings, demand, shift, workArea } = task();

    return { officeOpenTimings, demand, shift, workArea };
  },
});
</script>

<style scoped>
table,
th,
td {
  border: 1px solid black;
}
</style>
