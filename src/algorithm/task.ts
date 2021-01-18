/* eslint-disable */
export function task() {

  interface employeeInfo {
    emp_name: number,
    daily_working_time: number,
    work_start_time: number,
    work_end_time: number,
    range?: (number | string)[]
  }

  interface demandInfo {
    start_time: number,
    end_time: number,
    demand: number,
    totalDemand?: (number | string)[]
  }

  let employee: employeeInfo[] = [
    { emp_name: 1, daily_working_time: 8, work_start_time: 6, work_end_time: 14 },
    { emp_name: 2, daily_working_time: 8, work_start_time: 6, work_end_time: 14 },
    { emp_name: 3, daily_working_time: 8, work_start_time: 8, work_end_time: 16 },
    { emp_name: 4, daily_working_time: 8, work_start_time: 10, work_end_time: 18 },
    { emp_name: 5, daily_working_time: 8, work_start_time: 10, work_end_time: 18 },
    { emp_name: 6, daily_working_time: 8, work_start_time: 10, work_end_time: 18 },
  ]

  const demandBooks: demandInfo[] = [
    { start_time: 6, end_time: 8, demand: 2 },
    { start_time: 8, end_time: 13, demand: 3 },
    { start_time: 13, end_time: 15, demand: 4 },
    { start_time: 15, end_time: 18, demand: 3 }
  ]

  const officeOpenTimings: number[] = [];

  function assignOfficeOpenTime(startTime: number, endTime: number) {
    for (let i = startTime; i < endTime; i++) {
      officeOpenTimings.push(i)
    }
  }


  function calculateEmployeeTimeRange() {
    for (let i = 0; i < employee.length; i++) {
      let rangeArray = []
      for (let j = employee[i].work_start_time; j < employee[i].work_end_time; j++) {
        rangeArray.push(j)
      }
      employee[i].range = rangeArray;
    }
  }

  function updateEmployeeRange() {
    for (let i = 0; i < employee.length; i++) {
      console.log("this is emp length", employee.length, employee[i].range, officeOpenTimings, officeOpenTimings.length);
      let newRange = []
      for (let j = officeOpenTimings[0]; j <= officeOpenTimings[officeOpenTimings.length - 1]; j++) {
        if (employee[i].range?.includes(j)) {
          newRange.push(j)
        } else {
          newRange.push(0)
        }

      }
      employee[i].daily_working_time = employee[i].work_end_time - employee[i].work_start_time
      employee[i].range = newRange;
    }
  }

  function excessEmployeeInDemand() {
    for (let i = 0; i < demandBooks.length; i++) {
      let totalDemandNew = []
      for (let j = demandBooks[i].start_time; j < demandBooks[i].end_time; j++) {
        let excessEmployee = 0
        let demandObject: any = {}
        for (let k = 0; k < employee.length; k++) {
          if (employee[k].range?.includes(j)) {
            excessEmployee = excessEmployee + 1
          }
        }
        excessEmployee = excessEmployee - demandBooks[i].demand
        demandObject.time = j
        demandObject.excessEmployee = excessEmployee
        totalDemandNew.push(demandObject)
      }
      demandBooks[i].totalDemand = totalDemandNew
    }
  }

  // set the opening time of office
  assignOfficeOpenTime(6, 18)

  // put the working time in range eg. Emp1 [6,7.....13]
  calculateEmployeeTimeRange()

  // put 0 at the places where the emp is not working for the ease to make table eg Emp1 [6,7...13,0,0,0,0,0]
  updateEmployeeRange()

  // adding a new array object in demand that shows excessEmployee for each time(hour) eg. [{time:6, excessEmployee:2}, {time:7, excessEmployee:4}]
  excessEmployeeInDemand()

  return { employee, demandBooks, officeOpenTimings }
}
