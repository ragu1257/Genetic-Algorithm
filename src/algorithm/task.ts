/* eslint-disable */
export function task() {

  console.log("hello");
  interface LooseObject {
    [key: string]: any
  }
  const employee: LooseObject = [
    { emp_name: 1, daily_working_time: 8, work_start_time: 6, work_end_time: 14 },
    { emp_name: 2, daily_working_time: 8, work_start_time: 6, work_end_time: 14 },
    { emp_name: 3, daily_working_time: 8, work_start_time: 8, work_end_time: 16 },
    { emp_name: 4, daily_working_time: 8, work_start_time: 10, work_end_time: 18 },
    { emp_name: 5, daily_working_time: 8, work_start_time: 10, work_end_time: 18 },
    { emp_name: 6, daily_working_time: 8, work_start_time: 10, work_end_time: 18 },
  ]

  const demand: LooseObject = [
    { start_time: 6, end_time: 8, demand: 2 },
    { start_time: 8, end_time: 13, demand: 3 },
    { start_time: 13, end_time: 15, demand: 4 },
    { start_time: 15, end_time: 18, demand: 3 }
  ]

  let timeTable = []
  const openTime = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  // console.log(employee.length, demand[1]);
  // type User = {
  //     employeeName: number;
  //     time: any
  // }

  for (let i = 0; i < employee.length; i++) {
    let rangeArray = []
    for (let j = employee[i].work_start_time; j < employee[i].work_end_time; j++) {
      rangeArray.push(j)
    }
    employee[i].range = rangeArray;
  }
  // for (let i = 0; i < demand.length; i++) {
  //   let rangeArray = []
  //   for (let j = demand[i].start_time; j < demand[i].end_time; j++) {
  //     rangeArray.push(j)
  //   }
  //   demand[i].range = rangeArray;
  // }

  console.log(openTime[openTime.length - 1]);

  for (let i = 0; i < employee.length; i++) {
    let newRange = []
    for (let j = openTime[0]; j <= openTime[openTime.length-1]; j++) {
      if (employee[i].range.includes(j)) {
        newRange.push(j)
      } else {
        newRange.push(0)
      }

    }
    employee[i].daily_working_time = employee[i].work_end_time - employee[i].work_start_time
    employee[i].range = newRange;
  }


  for(let i=0; i<demand.length;i++){
    let totalDemandNew = []
    for(let j=demand[i].start_time; j<demand[i].end_time;j++){  
      let currentDemand = 0
      let demandObject: any = {}
      for (let k = 0; k < employee.length; k++) {
        if (employee[k].range.includes(j)) {
          currentDemand = currentDemand + 1
        }
      }
      currentDemand = currentDemand - demand[i].demand 
      demandObject.time = j
      demandObject.currentDemand = currentDemand
      totalDemandNew.push(demandObject)
    }
    demand[i].totalDemand = totalDemandNew
   console.log(demand);
   
  }
//   console.log(employee);
// console.log(totalDemand);
// console.log("total Demand New",totalDemandNew);

console.log("final demand",demand);






  return { employee, demand, openTime }
}
