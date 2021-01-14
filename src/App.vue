<template>
  <div>
    <table class="table-auto w-1/2" v-bind:style="{ display: 'inline-table' }">
      <thead>
        <tr>
          <th>Name</th>
          <th v-for="item in openTime" :key="item">{{item}}</th>
          <th>Daily working time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,i) in employee" :key="i">
          <td>{{item.emp_name}}</td>
          <!-- <td v-for="number in openTime" :key="number"> -->
            <td v-for="(time,i) in item.range" :key="i">
              <div v-if="time>0" class="bg-green-200">{{item.emp_name}}</div>
            </td>
          <!-- </td> -->
          <td>{{item.daily_working_time}}</td>
        </tr>
         <tr>
           <td>Excess Employed / Demand</td>
           <td v-for="number in openTime" :key="number">
           <span v-for="(item,i) in demand" :key="i">
             <span v-for="(demand,i) in item.totalDemand" :key="i">
               <span v-if="demand.time == number">{{demand.currentDemand}} / {{item.demand}}</span>
             </span>
           </span>
           </td>
        </tr>
      </tbody>
    </table>
    <div class="inline-grid p-10">
        <div v-for="(item,i) in demand" :key="i">
      <span class="pr-5">start_time: {{item.start_time}} </span>
      <span class="pr-5">end_time: {{item.end_time}} </span>
      <span class="pr-5">demand: {{item.demand}} </span>
      <span> totalDemand: {{item.totalDemand}}</span>
    </div>
    </div>
    <div v-for="(item,i) in employee" :key="i">
      <span class="pr-5">employee_name: {{item.emp_name}} </span>
      <span class="pr-5">daily_working_time_left: {{item.daily_working_time}} </span>
      <span class="pr-5">work_start_time: {{item.work_start_time}} </span>
      <span class="pr-5">work_end_time: {{item.work_end_time}}</span>
      <span>range: {{item.range}}</span>
    </div>
  </div>
</template>

<!-- eslint-disable -->

<script lang="ts">
/* eslint-disable */
import { defineComponent, ref } from 'vue';
import {task} from './algorithm/task'


export default defineComponent({
  name: 'App',
  components: {
  },
  setup(){
    const {employee, demand, openTime} = task();

    return {openTime,employee, demand}
  }
});
</script>

<style scoped>
table, th, td {
  border: 1px solid black;
}

</style>
