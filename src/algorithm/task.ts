/* eslint-disable */

export function task() {

  interface employeeInfo {
    empId: number,
    empName: string,
    weeklyWorkingHours: number,
    notAvailableEmployee?: any[],
    timeRange?: (number | string)[],
    absenceRange?: (number | string)[],
    negativeWish?: (number | string)[],
    positiveWish?: (number | string)[]
  }

  interface workArea {
    workAreaId: number,
    workAreaName: string,
    // stuffing?:  Array<{
    //   overStuffing: number;
    //   underStuffing: number;
    //   underTime: number;
    //   overtime: number;
    //   workAreaId: number;
    // }>
  }

  interface demand {
    demandId: number,
    startTime: number,
    endTime: number,
    amount: number,
    workAreaId: number,
    range?: (number | string)[],
    totalDemand?: any[]
  }

  interface shift {
    employeeId: number,
    workAreaId: number,
    startTime: number,
    endTime: number,
    range?: (number | string)[],
    notAvailable?: (number | string)[],
    totalTime?: number,
    absenceRange?: (number | string)[],
    negativeWish?: (number | string)[],
    positiveWish?: (number | string)[],
    weeklyWorkingHours?: number,
    positiveWishFulfilled?: number,
    negativeWishFulfilled?: number,
    absenceWishFulfilled?: number
  }
  interface absence {
    empId: number,
    day: number,
    startTime: number,
    endTime: number
  }

  interface wish {
    empId: number,
    day: number,
    startTime: number,
    endTime: number,
    wantsToWork: boolean
  }

  interface stuffing {
    overStuffing?: number,
    underStuffing?: number,
    workAreaId?: number,
    underTime?: number,
    overtime?: number,
    wishNegative?: number,
    wishPositive?: number,
    absenceWish?: number
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
    { empId: 21, empName: "Rachit20", weeklyWorkingHours: 40 },
    { empId: 22, empName: "Rachit21", weeklyWorkingHours: 40 }
  ]

  const absence: absence[] = [
    { empId: 1, day: 1, startTime: 7, endTime: 8 },
    { empId: 2, day: 1, startTime: 9, endTime: 11 },
    { empId: 3, day: 1, startTime: 6, endTime: 8 },
    { empId: 6, day: 1, startTime: 10, endTime: 12 },
    { empId: 8, day: 1, startTime: 11, endTime: 12 },
    { empId: 9, day: 1, startTime: 12, endTime: 14 },
    { empId: 13, day: 1, startTime: 13, endTime: 14 },
    { empId: 15, day: 1, startTime: 13, endTime: 15 },
    { empId: 16, day: 1, startTime: 14, endTime: 15 },
    { empId: 17, day: 1, startTime: 14, endTime: 16 },
    { empId: 18, day: 1, startTime: 14, endTime: 15 },
    { empId: 19, day: 1, startTime: 15, endTime: 17 },
    { empId: 22, day: 1, startTime: 15, endTime: 17 },
    { empId: 21, day: 1, startTime: 16, endTime: 18 },
  ]

  const wish: wish[] = [
    { empId: 1, day: 1, startTime: 10, endTime: 11, wantsToWork: false },
    { empId: 1, day: 1, startTime: 6, endTime: 7, wantsToWork: true },
    { empId: 2, day: 1, startTime: 6, endTime: 9, wantsToWork: false },
    { empId: 3, day: 1, startTime: 9, endTime: 14, wantsToWork: false },
    { empId: 6, day: 1, startTime: 13, endTime: 15, wantsToWork: false },
    { empId: 8, day: 1, startTime: 9, endTime: 10, wantsToWork: true },
    { empId: 9, day: 1, startTime: 11, endTime: 12, wantsToWork: true },
    { empId: 13, day: 1, startTime: 11, endTime: 13, wantsToWork: true },
    { empId: 15, day: 1, startTime: 10, endTime: 13, wantsToWork: true },
    { empId: 16, day: 1, startTime: 10, endTime: 14, wantsToWork: true },
    { empId: 17, day: 1, startTime: 9, endTime: 14, wantsToWork: false },
    { empId: 18, day: 1, startTime: 15, endTime: 18, wantsToWork: false },
    { empId: 19, day: 1, startTime: 12, endTime: 15, wantsToWork: false },
    { empId: 22, day: 1, startTime: 12, endTime: 15, wantsToWork: false },
    { empId: 21, day: 1, startTime: 10, endTime: 17, wantsToWork: false }
  ]

  const workArea: workArea[] = [
    { workAreaId: 1, workAreaName: "Books" },
    { workAreaId: 2, workAreaName: "Food" },
    { workAreaId: 3, workAreaName: "Cleaning" }
  ]
  //Overstaffing, understaffing, overtime, minus hours, absence, wish
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
    { employeeId: 1, workAreaId: 1, startTime: 7, endTime: 10 },
    { employeeId: 1, workAreaId: 2, startTime: 11, endTime: 15 },
    { employeeId: 2, workAreaId: 1, startTime: 8, endTime: 14 },
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
    { employeeId: 22, workAreaId: 1, startTime: 12, endTime: 18 },
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
      employee[i].timeRange = rangeArray;
    }
  }


  //calculate the absence of each employee
  function calculateEmployeeAbsence() {
    for (let i = 0; i < employee.length; i++) {
      let rangeArray = []
      for (let j = 0; j < absence.length; j++) {
        if (employee[i].empId == absence[j].empId) {
          for (let k = absence[j].startTime; k < absence[j].endTime; k++) {
            rangeArray.push(k)
          }
        }
      }
      employee[i].absenceRange = rangeArray;
    }
  }

  //calculate wish for each employee
  function calculateEmployeeWish() {
    for (let i = 0; i < employee.length; i++) {
      let negativeWish = []
      let positiveWish = []
      for (let j = 0; j < wish.length; j++) {
        if (employee[i].empId == wish[j].empId) {
          for (let k = wish[j].startTime; k < wish[j].endTime; k++) {
            if (wish[j].wantsToWork) {
              positiveWish.push(k)
            } else {
              negativeWish.push(k)
            }

          }
        }
      }
      employee[i].negativeWish = negativeWish;
      employee[i].positiveWish = positiveWish;
    }
  }


  // console.log("this is totalTime in emp", employee);
  function updateShiftWithTotalTimeOfEmployee() {
    for (let i = 0; i < shift.length; i++) {
      let singleEmployee = employee.filter(item =>
        item.empId == shift[i].employeeId
      )
      shift[i].totalTime = singleEmployee[0 as any].timeRange?.length
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

  interface demandObject {
    time: number,
    currentlyEmployed: number,
    employeeNeeded: number
  }


  function excessEmployeeInDemand() {
    for (let i = 0; i < demand.length; i++) {
      let totalDemandNew = []
      for (let j = demand[i].startTime; j < demand[i].endTime; j++) {
        let currentlyEmployed = 0
        let demandObject: any = {}
        for (let k = 0; k < shift.length; k++) {
          if (shift[k].range?.includes(j) && demand[i].workAreaId == shift[k].workAreaId && !shift[k].absenceRange?.includes(j)) {
            // console.log("it is entered for", shift[k].range,shift[k].absenceRange);

            currentlyEmployed = currentlyEmployed + 1
          }
        }

        currentlyEmployed = currentlyEmployed
        // show negative values if employee is less
        // currentlyEmployed = currentlyEmployed - demand[i].amount
        demandObject.time = j
        demandObject.currentlyEmployed = currentlyEmployed
        demandObject.employeeNeeded = demand[i].amount
        totalDemandNew.push(demandObject)
      }
      demand[i].totalDemand = totalDemandNew
    }
  }




  // set the opening time of office
  assignOfficeOpenTime(6, 18)

  // calculateds the employee workin hour from all the shifts  
  calculateEmployeeWorkingHour()

  //calculate the absence of each employee
  calculateEmployeeAbsence()

  //calculate the wish for each employee
  calculateEmployeeWish()

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

  for (let i = 0; i < shift.length; i++) {
    // let totalNotAvailableTime = []
    for (let j = 0; j < employee.length; j++) {
      if (employee[j].empId == shift[i].employeeId) {
        shift[i].absenceRange = employee[j].absenceRange
        shift[i].negativeWish = employee[j].negativeWish
        shift[i].positiveWish = employee[j].positiveWish
        shift[i].weeklyWorkingHours = employee[j].weeklyWorkingHours
      }
    }
  }

  // adding a new array object in demand that shows excessEmployee for each time(hour) eg. [{time:6, excessEmployee:2}, {time:7, excessEmployee:4}]
  excessEmployeeInDemand()

  let stuffingFinal: stuffing[] = []

  function overstuffing() {
    for (let i = 0; i < workArea.length; i++) {
      let trailStuffing: stuffing = {}
      let overStuffingEmployee = 0
      let underStuffingEmployee = 0
      for (let j = 0; j < demand.length; j++) {
        if (workArea[i].workAreaId == demand[j].workAreaId) {
          // console.log("this is is workarea ID", workArea[i].workAreaId, underStuffingEmployee, overStuffingEmployee);

          for (let k = 0; k < demand[j].totalDemand!.length; k++) {
            // console.log(demand[j].totalDemand![k].employeeNeeded);

            if (demand[j].totalDemand![k].currentlyEmployed > demand[j].totalDemand![k].employeeNeeded) {
              // console.log(demand[j].totalDemand![k].currentlyEmployed, demand[j].totalDemand![k].employeeNeeded);

              overStuffingEmployee += (demand[j].totalDemand![k].currentlyEmployed - demand[j].totalDemand![k].employeeNeeded)
              // console.log("it is overstuffing", overStuffingEmployee);            
            } else if (demand[j].totalDemand![k].currentlyEmployed < demand[j].totalDemand![k].employeeNeeded) {
              underStuffingEmployee += (demand[j].totalDemand![k].employeeNeeded - demand[j].totalDemand![k].currentlyEmployed)
              // console.log("it is understuffing", underStuffingEmployee);            
            }
          }
        }
      }
      trailStuffing.overStuffing = overStuffingEmployee
      trailStuffing.underStuffing = underStuffingEmployee
      trailStuffing.workAreaId = workArea[i].workAreaId
      stuffingFinal.push(trailStuffing)
    }
  }
  overstuffing()
  console.log("this is shift", shift);

  for (let i = 0; i < workArea.length; i++) {
    let overTime = 0
    let underTime = 0
    let positiveWishFulfilled = 0
    let negativeWishFulfilled = 0
    let absenceWishFulfilled =0
    for (let j = 0; j < shift.length; j++) {
      let shiftPositiveWishFulfilled = 0
      let shiftNegativeWishFulfilled = 0
      let shiftAbsenceWishFulfilled = 0
      if (workArea[i].workAreaId == shift[j].workAreaId) {
        // console.log(((shift[j].weeklyWorkingHours!)/5), shift[i].totalTime )

        //Calculation for under and overtime
        if (((shift[j].weeklyWorkingHours!) / 5) > shift[j].totalTime!) {
          // console.log(((shift[j].weeklyWorkingHours!)/5), shift[j].totalTime! );

          underTime += ((shift[j].weeklyWorkingHours!) / 5) - (shift[j].totalTime!)
        } else if (((shift[j].weeklyWorkingHours!) / 5) < shift[j].totalTime!) {
          overTime += (shift[j].totalTime!) - ((shift[j].weeklyWorkingHours!) / 5)
        }

        //calculation for positive and neative wish
        for (let k = 0; k < shift[j].positiveWish!.length; k++) {
          if (shift[j].range?.includes(shift[j].positiveWish![k])) {
            console.log(shift[j].workAreaId);

            positiveWishFulfilled += 1
            shiftPositiveWishFulfilled +=1
          }
        }
        for (let k = 0; k < shift[j].negativeWish!.length; k++) {
          // console.log(shift[j], shift[j].negativeWish!.length, shift[j].negativeWish![k]);
          
          if ((!shift[j].range?.includes(shift[j].negativeWish![k]))) {
            // console.log("shift[j] negative", shift[j].range, !(shift[j].range?.includes(shift[j].negativeWish![k])));
            // console.log("shiftNegativeWishFulfilled",shiftNegativeWishFulfilled);
            
            negativeWishFulfilled += 1
            shiftNegativeWishFulfilled +=1
          }
        }

        for (let k = 0; k < shift[j].absenceRange!.length; k++) {
          // console.log(shift[j], shift[j].negativeWish!.length, shift[j].negativeWish![k]);
          
          if ((!shift[j].range?.includes(shift[j].absenceRange![k]))) {
            // console.log("shift[j] negative", shift[j].range, !(shift[j].range?.includes(shift[j].negativeWish![k])));
            // console.log("shiftNegativeWishFulfilled",shiftNegativeWishFulfilled);
            
            absenceWishFulfilled += 1
            shiftAbsenceWishFulfilled +=1
          }
        }
        // console.log("shiftNegativeWishFulfilled end", shiftNegativeWishFulfilled);
        
       
        
        shift[j].positiveWishFulfilled = shiftPositiveWishFulfilled
        shift[j].negativeWishFulfilled = shiftNegativeWishFulfilled
        shift[j].absenceWishFulfilled= shiftAbsenceWishFulfilled
      }      
    }
    stuffingFinal[i].underTime = underTime
    stuffingFinal[i].overtime = overTime
    stuffingFinal[i].wishNegative = negativeWishFulfilled
    stuffingFinal[i].wishPositive = positiveWishFulfilled
    stuffingFinal[i].absenceWish = absenceWishFulfilled
  }




  // console.log("workarea", workArea);
  console.log("stuffingFinal", stuffingFinal);

  // console.log("this is emp", demand);





  return { officeOpenTimings, demand, shift, workArea, stuffingFinal }

}
