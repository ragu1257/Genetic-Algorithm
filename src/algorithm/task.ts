/* eslint-disable */

export function task() {

  interface employeeInfo {
    empId: number,
    empName: string,
    weeklyWorkingHours: number,
    totalTime?: (number | string)[]
  }

  interface workArea {
    workAreaId: number,
    workAreaName: string
  }

  interface demand {
    demandId: number,
    startTime: number,
    endTime: number,
    amount: number,
    workAreaId: number,
    range?: (number | string)[],
    totalDemand?: (number | string)[]
  }

  interface shift {
    employeeId: number,
    workAreaId: number,
    startTime: number,
    endTime: number,
    range?: (number | string)[],
    totalTime?: number
  }

  const employee: employeeInfo[] = [
    { empId: 1, empName: "Rachit", weeklyWorkingHours: 40 },
    { empId: 2, empName: "Rachit1", weeklyWorkingHours: 40 },
    { empId: 3, empName: "Rachit2", weeklyWorkingHours: 40 },
    { empId: 4, empName: "Rachit3", weeklyWorkingHours: 40 },
    { empId: 5, empName: "Rachit4", weeklyWorkingHours: 40 },
    { empId: 6, empName: "Rachit5", weeklyWorkingHours: 40 },
    { empId: 7, empName: "Rachit6", weeklyWorkingHours: 40 },
    { empId: 8, empName: "Rachit7", weeklyWorkingHours: 40 },
    { empId: 9, empName: "Rachit8", weeklyWorkingHours: 40 },
    { empId: 10, empName: "Rachit9", weeklyWorkingHours: 40 },
    { empId: 11, empName: "Rachit10", weeklyWorkingHours: 40 },
    { empId: 12, empName: "Rachit11", weeklyWorkingHours: 40 },
    { empId: 13, empName: "Rachit12", weeklyWorkingHours: 40 },
    { empId: 14, empName: "Rachit13", weeklyWorkingHours: 40 },
    { empId: 15, empName: "Rachit14", weeklyWorkingHours: 40 },
    { empId: 16, empName: "Rachit15", weeklyWorkingHours: 40 },
    { empId: 17, empName: "Rachit16", weeklyWorkingHours: 40 },
    { empId: 18, empName: "Rachit17", weeklyWorkingHours: 40 },
    { empId: 19, empName: "Rachit18", weeklyWorkingHours: 40 },
    { empId: 20, empName: "Rachit19", weeklyWorkingHours: 40 },
    { empId: 21, empName: "Rachit20", weeklyWorkingHours: 40 }
  ]

  const workArea: workArea[] = [
    { workAreaId: 1, workAreaName: "Books" },
    { workAreaId: 2, workAreaName: "Food" },
    { workAreaId: 3, workAreaName: "Cleaning" }
  ]

  const demand: demand[] = [
    { demandId: 1, startTime: 6, endTime: 10, amount: 3, workAreaId: 1 },
    { demandId: 2, startTime: 10, endTime: 15, amount: 2, workAreaId: 1 },
    { demandId: 3, startTime: 15, endTime: 18, amount: 5, workAreaId: 1 },
    { demandId: 4, startTime: 8, endTime: 11, amount: 2, workAreaId: 2 },
    { demandId: 5, startTime: 11, endTime: 15, amount: 5, workAreaId: 2 },
    { demandId: 6, startTime: 15, endTime: 18, amount: 4, workAreaId: 2 },
    { demandId: 7, startTime: 9, endTime: 12, amount: 3, workAreaId: 3 },
    { demandId: 8, startTime: 12, endTime: 15, amount: 4, workAreaId: 3 },
    { demandId: 9, startTime: 15, endTime: 18, amount: 2, workAreaId: 3 }
  ]
  const shift: shift[] = [
    { employeeId: 1, workAreaId: 1, startTime: 6, endTime: 10 },
    { employeeId: 1, workAreaId: 2, startTime: 11, endTime: 15 },
    { employeeId: 2, workAreaId: 1, startTime: 6, endTime: 14 },
    { employeeId: 3, workAreaId: 1, startTime: 8, endTime: 16 },
    { employeeId: 4, workAreaId: 1, startTime: 8, endTime: 16 },
    { employeeId: 5, workAreaId: 1, startTime: 10, endTime: 18 },
    { employeeId: 6, workAreaId: 1, startTime: 10, endTime: 18 },
    { employeeId: 7, workAreaId: 1, startTime: 10, endTime: 18 },
    { employeeId: 8, workAreaId: 2, startTime: 9, endTime: 14 },
    { employeeId: 9, workAreaId: 2, startTime: 9, endTime: 14 },
    { employeeId: 10, workAreaId: 2, startTime: 10, endTime: 16 },
    { employeeId: 11, workAreaId: 2, startTime: 10, endTime: 16 },
    { employeeId: 12, workAreaId: 2, startTime: 11, endTime: 18 },
    { employeeId: 13, workAreaId: 2, startTime: 11, endTime: 18 },
    { employeeId: 14, workAreaId: 2, startTime: 11, endTime: 18 },
    { employeeId: 15, workAreaId: 3, startTime: 10, endTime: 14 },
    { employeeId: 16, workAreaId: 3, startTime: 10, endTime: 14 },
    { employeeId: 17, workAreaId: 3, startTime: 10, endTime: 16 },
    { employeeId: 18, workAreaId: 3, startTime: 11, endTime: 16 },
    { employeeId: 19, workAreaId: 3, startTime: 11, endTime: 18 },
    { employeeId: 20, workAreaId: 3, startTime: 11, endTime: 18 },
    { employeeId: 21, workAreaId: 3, startTime: 12, endTime: 18 },
  ]

  const officeOpenTimings: number[] = [];

  function assignOfficeOpenTime(startTime: number, endTime: number) {
    for (let i = startTime; i < endTime; i++) {
      officeOpenTimings.push(i)
    }
  }

  function calculateEmployeeWorkingHour() {
    for (let i = 0; i < employee.length; i++) {
      let rangeArray = []
      for (let j = 0; j < shift.length; j++) {
        if (employee[i].empId == shift[j].employeeId) {
          for (let k = shift[j].startTime; k < shift[j].endTime; k++) {
            rangeArray.push(k)
          }
        }
      }
      employee[i].totalTime = rangeArray;
    }
  }


  // console.log("this is totalTime in emp", employee);
  function updateShiftWithTotalTimeOfEmployee() {
    for (let i = 0; i < shift.length; i++) {
      let singleEmployee = employee.filter(item =>
        item.empId == shift[i].employeeId
      )
      shift[i].totalTime = singleEmployee[0 as any].totalTime?.length
    }
  }


  function calculateTimeRange(shift: any[]) {
    for (let i = 0; i < shift.length; i++) {
      let rangeArray = []
      for (let j = shift[i].startTime; j < shift[i].endTime; j++) {
        rangeArray.push(j)
      }
      shift[i].range = rangeArray;
    }
  }

  function updateTimeRange(shift: any[]) {
    for (let i = 0; i < shift.length; i++) {
      // console.log("this is emp length", shift.length, shift[i].range, officeOpenTimings, officeOpenTimings.length);
      let newRange = []
      for (let j = officeOpenTimings[0]; j <= officeOpenTimings[officeOpenTimings.length - 1]; j++) {
        if (shift[i].range?.includes(j)) {
          newRange.push(j)
        } else {
          newRange.push(0)
        }

      }
      // employee[i].daily_working_time = employee[i].work_end_time - employee[i].work_start_time
      shift[i].range = newRange;
    }
  }



  function excessEmployeeInDemand() {
    for (let i = 0; i < demand.length; i++) {
      let totalDemandNew = []
      for (let j = demand[i].startTime; j < demand[i].endTime; j++) {
        let excessEmployee = 0
        let demandObject: any = {}
        for (let k = 0; k < shift.length; k++) {
          if (shift[k].range?.includes(j) && demand[i].workAreaId == shift[k].workAreaId) {
            excessEmployee = excessEmployee + 1
          }
        }
        excessEmployee = excessEmployee - demand[i].amount
        demandObject.time = j
        demandObject.excessEmployee = excessEmployee
        totalDemandNew.push(demandObject)
      }
      demand[i].totalDemand = totalDemandNew
    }
  }


  // set the opening time of office
  assignOfficeOpenTime(6, 18)

  // calculateds the employee workin hour from all the shifts  
  calculateEmployeeWorkingHour()

  // update the shift table with new key totalEmployee time
  updateShiftWithTotalTimeOfEmployee()

  // put the working time in range eg. Emp1 [6,7.....13]
  calculateTimeRange(demand)
  // put 0 at the places where the emp is not working for the ease to make table eg Emp1 [6,7...13,0,0,0,0,0]
  updateTimeRange(demand)

  // put the working time in range eg. Emp1 [6,7.....13]
  calculateTimeRange(shift)

  // join the range of similar employees
  // for(let i=0;i<shift.length;i++){
  //   let key = shift[i].employeeId;
  //   for(let j=i+1;j<shift.length;j++){
  //     if(shift[j].employeeId == key){
  //       shift[i].range  = [...shift[i].range,...shift[j].range];
  //       shift.splice(j,1);
  //     }

  //   }
  // }

  // put 0 at the places where the emp is not working for the ease to make table eg Emp1 [6,7...13,0,0,0,0,0]
  updateTimeRange(shift)

  // adding a new array object in demand that shows excessEmployee for each time(hour) eg. [{time:6, excessEmployee:2}, {time:7, excessEmployee:4}]
  excessEmployeeInDemand()

  return { officeOpenTimings, demand, shift, workArea }

}
