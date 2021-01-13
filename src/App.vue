<template>
  <div>
    <table class="table-auto w-1/2" v-bind:style="{ display: 'inline-table' }">
      <thead>
        <tr>
          <th>Name</th>
          <th v-for="item in headline" :key="item">{{item}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,i) in output" :key="i">
          <td>{{item.employeeName}}</td>
          <td v-for="number in headline" :key="number">
            <span v-for="(time,i) in item.time" :key="i">
              <span v-if="number == time" class="bg-green-200">{{time}}</span>
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
    </div>
    </div>
    <div v-for="(item,i) in employee" :key="i">
      <span class="pr-5">employee_name: {{item.emp_name}} </span>
      <span class="pr-5">daily_working_time_left: {{item.daily_working_time}} </span>
      <span class="pr-5">work_start_time: {{item.work_start_time}} </span>
      <span>work_end_time: {{item.work_end_time}}</span>
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
    const {employee, output, demand} = task();
    const headline = ref([6,7,8,9,10,11,12,13,14,15,16,17,18]);

    return {headline,employee, output, demand}
  }
});
</script>

<style scoped>
table, th, td {
  border: 1px solid black;
}

</style>
