<template>
  <div>
    <table class="table-auto w-2/3 text-center" v-bind:style="{ display: 'inline-table' }">
      <thead>
        <tr>
          <th>Name</th>
          <th v-for="item in officeOpenTimings" :key="item">{{item}}</th>
          <th>Daily working time / Fixed Working Time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,i) in employee" :key="i">
          <td>{{item.emp_name}}</td>
          <!-- <td v-for="number in officeOpenTimings" :key="number"> -->
            <td v-for="(time,i) in item.range" :key="i">
              <div v-if="time>0" class="bg-green-200">{{item.emp_name}}</div>
            </td>
          <!-- </td> -->
          <td class="m-3"> {{item.daily_working_time}}/8 </td>
        </tr>
         <tr>
           <td>Excess Employed / demandBooks</td>
           <td v-for="number in officeOpenTimings" :key="number">
           <span v-for="(item,i) in demandBooks" :key="i">
             <span v-for="(demandBooks,i) in item.totalDemand" :key="i">
               <span v-if="demandBooks.time == number" class="p-3"> {{demandBooks.excessEmployee}}/{{item.demand}} </span>
             </span>
           </span>
           </td>
        </tr>
      </tbody>
    </table>
    <div class="inline-grid p-10">
        <div v-for="(item,i) in demandBooks" :key="i">
      <span class="pr-5">start_time: {{item.start_time}} </span>
      <span class="pr-5">end_time: {{item.end_time}} </span>
      <span class="pr-5">demandBooks: {{item.demand}} </span>
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
    const {employee, demandBooks, officeOpenTimings} = task();

    return {officeOpenTimings,employee, demandBooks}
  }
});
</script>

<style scoped>
table, th, td {
  border: 1px solid black;
}

</style>
