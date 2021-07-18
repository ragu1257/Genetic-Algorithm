/* eslint-disable */
import { demand, wish, absence, setNewEmployee, setLastEmployeeInfo, lastEmployeeInfo } from "./interface"
import * as _ from "lodash";

export function timetable(shiftArray: any[], employee: any[], task_day = 1) {

    let clonedEmployee = _.cloneDeep(employee);
    // console.log("new task day", task_day);

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

    interface shift {
        employeeId?: number,
        workAreaId?: number,
        startTime?: number,
        endTime?: number,
        range?: (number | string)[],
        notAvailable?: (number | string)[],
        totalTime?: number,
        absenceRange?: (number | string)[],
        negativeWish?: (number | string)[],
        positiveWish?: (number | string)[],
        weeklyWorkingHours?: number,
        positiveWishFulfilled?: number,
        negativeWishFulfilled?: number,
        absenceWishFulfilled?: number,
        empPower?: number
    }

    const shift: shift[] = []



    interface stuffing {
        overStuffing?: number,
        underStuffing?: number,
        workAreaId?: number,
        underTime?: number,
        overtime?: number,
        wishNegativeFulfilled?: number,
        wishPositiveFulfilled?: number,
        absenceWishFulfilled?: number,
        totalPositiveWish?: number,
        totalNegativeWish?: number,
        totalAbsence?: number
    }



    const workArea: workArea[] = [
        { workAreaId: 1, workAreaName: "Books" },
        { workAreaId: 2, workAreaName: "Food" },
        { workAreaId: 3, workAreaName: "Cleaning" }
    ]
    //Overstaffing, understaffing, overtime, minus hours, absence, wish


    const officeOpenTimings: number[] = [];
    let stuffingFinal: stuffing[] = []

    let workid
    let starting_time
    let ending_time: any

    for (let i = 0; i < shiftArray!.length; i++) {

        for (let j = 6; j <= shiftArray![i].length; j++) {
            // console.log("thi is shiftArray[i].length", shiftArray[i].length); 
            if (j === 6) {
                // console.log(j);

                workid = shiftArray![i][j]
                starting_time = j
                ending_time = j
                // console.log(i, j, shiftArray[i][j], workid);

            } else {
                // workid = shiftArray[i][j-1]
                if (shiftArray![i][j] === workid) {
                    ending_time = j
                } else {

                    shift.push({ employeeId: i + 1, workAreaId: workid, startTime: starting_time, endTime: ending_time + 1 })
                    workid = shiftArray![i][j]
                    starting_time = j
                    ending_time = j

                }

            }
        }
    }
    // console.log(shift);




    function assignOfficeOpenTime(startTime: number, endTime: number) {
        for (let i = startTime; i < endTime; i++) {
            officeOpenTimings.push(i)
        }
    }

    function calculateEmployeeWorkingHour() {
        for (let i = 0; i < clonedEmployee!.length; i++) {
            let rangeArray = []
            for (let j = 0; j < shift.length; j++) {
                if (clonedEmployee![i].empId == shift[j].employeeId && shift[j].workAreaId != 0) {
                    for (let k = shift[j].startTime!; k < shift[j].endTime!; k++) {
                        rangeArray.push(k)
                    }
                }
            }
            clonedEmployee![i].timeRange = rangeArray;
        }
    }


    //calculate the absence of each employee
    function calculateEmployeeAbsence(task_day: number) {

        let absence_shift_for_day = absence.filter(item => item.day == task_day)
        for (let i = 0; i < clonedEmployee!.length; i++) {
            let rangeArray = []
            for (let j = 0; j < absence_shift_for_day.length; j++) {
                if (clonedEmployee![i].empId == absence_shift_for_day[j].empId) {
                    for (let k = absence_shift_for_day[j].startTime; k < absence_shift_for_day[j].endTime; k++) {
                        rangeArray.push(k)
                    }
                }
            }
            clonedEmployee![i].absenceRange = rangeArray;
        }
    }

    //calculate wish for each employee!
    function calculateEmployeeWish(task_day: number) {
        let filter_wish_for_day = wish.filter(item => item.day == task_day)
        for (let i = 0; i < clonedEmployee!.length; i++) {
            let negativeWish = []
            let positiveWish = []
            for (let j = 0; j < filter_wish_for_day.length; j++) {
                if (clonedEmployee![i].empId == filter_wish_for_day[j].empId) {
                    for (let k = filter_wish_for_day[j].startTime; k < filter_wish_for_day[j].endTime; k++) {
                        if (filter_wish_for_day[j].wantsToWork) {
                            positiveWish.push(k)
                        } else {
                            negativeWish.push(k)
                        }

                    }
                }
            }
            clonedEmployee![i].negativeWish = negativeWish;
            clonedEmployee![i].positiveWish = positiveWish;
        }
    }


    // console.log("this is totalTime in emp", employee!);
    function updateShiftWithTotalTimeOfEmployee() {
        for (let i = 0; i < shift.length; i++) {
            let singleEmployee = clonedEmployee!.filter(item =>
                item.empId == shift[i].employeeId
            )
            // console.log("single empl;oyee", singleEmployee);

            shift[i].totalTime = singleEmployee[0 as any].timeRange?.length
        }
    }

    function calculateTimeRangeDemand(shift: any, task_day: number) {
        let filter_demand_for_day = shift.filter((item: { day: number; }) => item.day == task_day)
        for (let i = 0; i < filter_demand_for_day.length; i++) {
            let rangeArray = []
            for (let j = filter_demand_for_day[i].startTime; j < filter_demand_for_day[i].endTime; j++) {
                rangeArray.push(j)
            }
            filter_demand_for_day[i].range = rangeArray;
        }
    }

    function updateTimeRangeDemand(shift: any[], task_day: number) {
        let filter_demand_for_day = shift.filter((item: { day: number; }) => item.day == task_day)
        for (let i = 0; i < filter_demand_for_day.length; i++) {
            // console.log("this is emp length", filter_demand_for_day.length, filter_demand_for_day[i].range, officeOpenTimings, officeOpenTimings.length);
            let newRange = []
            for (let j = officeOpenTimings[0]; j <= officeOpenTimings[officeOpenTimings.length - 1]; j++) {
                if (filter_demand_for_day[i].range?.includes(j)) {
                    newRange.push(j)
                } else {
                    newRange.push(0)
                }

            }
            // employee[i].daily_working_time = employee[i].work_end_time - employee[i].work_start_time
            filter_demand_for_day[i].range = newRange;
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


    function excessEmployeeInDemand(task_day: number) {
        let filter_demand_for_day = demand.filter(item => item.day == task_day)
        // console.log("this is day 1 demands", task_day, filter_demand_for_day);

        for (let i = 0; i < filter_demand_for_day.length; i++) {
            let totalDemandNew = []
            for (let j = filter_demand_for_day[i].startTime; j < filter_demand_for_day[i].endTime; j++) {
                let currentlyEmployed = 0
                let demandObject: any = {}
                for (let k = 0; k < shift.length; k++) {
                    if (shift[k].range?.includes(j) && filter_demand_for_day[i].workAreaId == shift[k].workAreaId && !shift[k].absenceRange?.includes(j)) {
                        // console.log("it is entered for", shift[k].range,shift[k].absenceRange);

                        currentlyEmployed = currentlyEmployed + 1
                    }
                }

                currentlyEmployed = currentlyEmployed
                // show negative values if employee is less
                // currentlyEmployed = currentlyEmployed - demand[i].amount
                demandObject.time = j
                demandObject.currentlyEmployed = currentlyEmployed
                demandObject.employeeNeeded = filter_demand_for_day[i].amount
                totalDemandNew.push(demandObject)
            }
            filter_demand_for_day[i].totalDemand = totalDemandNew
        }
    }




    // set the opening time of office
    assignOfficeOpenTime(6, 18)

    // calculateds the employee workin hour from all the shifts  
    calculateEmployeeWorkingHour()

    //calculate the absence of each employee
    calculateEmployeeAbsence(task_day)

    //calculate the wish for each employee
    calculateEmployeeWish(task_day)

    // update the shift table with new key totalEmployee time
    updateShiftWithTotalTimeOfEmployee()

    // put the working time in range eg. Emp1 [6,7.....13]
    calculateTimeRangeDemand(demand, task_day)
    // put 0 at the places where the emp is not working for the ease to make table eg Emp1 [6,7...13,0,0,0,0,0]
    updateTimeRangeDemand(demand, task_day)

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
        for (let j = 0; j < clonedEmployee!.length; j++) {
            if (clonedEmployee![j].empId == shift[i].employeeId) {
                shift[i].absenceRange = clonedEmployee![j].absenceRange
                shift[i].negativeWish = clonedEmployee![j].negativeWish
                shift[i].positiveWish = clonedEmployee![j].positiveWish
                shift[i].weeklyWorkingHours = clonedEmployee![j].weeklyWorkingHours
            }
        }
    }

    // adding a new array object in demand that shows excessEmployee for each time(hour) eg. [{time:6, excessEmployee:2}, {time:7, excessEmployee:4}]
    excessEmployeeInDemand(task_day)



    function overstuffing(task_day: number) {
        let filter_demand_for_day = demand.filter(item => item.day == task_day)
        for (let i = 0; i < workArea.length; i++) {
            let trailStuffing: stuffing = {}
            let overStuffingEmployee = 0
            let underStuffingEmployee = 0
            for (let j = 0; j < filter_demand_for_day.length; j++) {
                if (workArea[i].workAreaId == filter_demand_for_day[j].workAreaId) {
                    // console.log("this is is workarea ID", workArea[i].workAreaId, underStuffingEmployee, overStuffingEmployee);

                    for (let k = 0; k < filter_demand_for_day[j].totalDemand!.length; k++) {
                        // console.log(filter_demand_for_day[j].totalDemand![k].employeeNeeded);

                        if (filter_demand_for_day[j].totalDemand![k].currentlyEmployed > filter_demand_for_day[j].totalDemand![k].employeeNeeded) {
                            // console.log(filter_demand_for_day[j].totalDemand![k].currentlyEmployed, filter_demand_for_day[j].totalDemand![k].employeeNeeded);

                            overStuffingEmployee += (filter_demand_for_day[j].totalDemand![k].currentlyEmployed - filter_demand_for_day[j].totalDemand![k].employeeNeeded)
                            // console.log("it is overstuffing", overStuffingEmployee);            
                        } else if (filter_demand_for_day[j].totalDemand![k].currentlyEmployed < filter_demand_for_day[j].totalDemand![k].employeeNeeded) {
                            underStuffingEmployee += (filter_demand_for_day[j].totalDemand![k].employeeNeeded - filter_demand_for_day[j].totalDemand![k].currentlyEmployed)
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
    overstuffing(task_day)
    // console.log("this is shift", shift);

    for (let i = 0; i < workArea.length; i++) {
        let overTime = 0
        let underTime = 0
        let positiveWishFulfilled = 0
        let negativeWishFulfilled = 0
        let absenceWishFulfilled = 0
        let totalPositiveWish = 0
        let totalNegativeWish = 0
        let totalAbsence = 0
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
                    // console.log("shift[j].positiveWish!.length", shift[j].positiveWish!.length);

                    if (shift[j].range?.includes(shift[j].positiveWish![k])) {
                        // console.log(shift[j].workAreaId);

                        positiveWishFulfilled += 1
                        shiftPositiveWishFulfilled += 1
                    }
                }
                for (let k = 0; k < shift[j].negativeWish!.length; k++) {
                    // console.log(shift[j], shift[j].negativeWish!.length, shift[j].negativeWish![k]);
                    // console.log("shift[j].negativeWish!.length", shift[j].negativeWish!.length);


                    if ((!shift[j].range?.includes(shift[j].negativeWish![k]))) {
                        // console.log("shift[j] negative", shift[j].range, !(shift[j].range?.includes(shift[j].negativeWish![k])));
                        // console.log("shiftNegativeWishFulfilled",shiftNegativeWishFulfilled);

                        negativeWishFulfilled += 1
                        shiftNegativeWishFulfilled += 1
                    }
                }

                for (let k = 0; k < shift[j].absenceRange!.length; k++) {
                    // console.log(shift[j], shift[j].absenceRange!.length, shift[j].absenceRange![k]);
                    // console.log("shift[j].absenceRange!.length", shift[j].absenceRange!.length);



                    if ((!shift[j].range?.includes(shift[j].absenceRange![k]))) {
                        // console.log("shift[j] negative", shift[j].range, !(shift[j].range?.includes(shift[j].negativeWish![k])));
                        // console.log("shiftNegativeWishFulfilled",shiftNegativeWishFulfilled);

                        absenceWishFulfilled += 1
                        shiftAbsenceWishFulfilled += 1
                    }
                }
                // console.log("shiftNegativeWishFulfilled end", shiftNegativeWishFulfilled);
                totalPositiveWish += shift[j].positiveWish!.length
                totalNegativeWish = totalNegativeWish + shift[j].negativeWish!.length
                totalAbsence = totalAbsence + shift[j].absenceRange!.length

                shift[j].positiveWishFulfilled = shiftPositiveWishFulfilled
                shift[j].negativeWishFulfilled = shiftNegativeWishFulfilled
                shift[j].absenceWishFulfilled = shiftAbsenceWishFulfilled
            }
        }
        // console.log("totalPositiveWish, neative, absence", totalPositiveWish, totalNegativeWish, totalAbsence);

        stuffingFinal[i].underTime = underTime
        stuffingFinal[i].overtime = overTime
        stuffingFinal[i].wishNegativeFulfilled = negativeWishFulfilled
        stuffingFinal[i].wishPositiveFulfilled = positiveWishFulfilled
        stuffingFinal[i].absenceWishFulfilled = absenceWishFulfilled
        stuffingFinal[i].totalPositiveWish = totalPositiveWish
        stuffingFinal[i].totalNegativeWish = totalNegativeWish
        stuffingFinal[i].totalAbsence = totalAbsence
    }


    let finalOverstuffing: number = 0
    let finalUnderStuffing: number = 0
    let finalOverTime: number = 0
    let finalUnderTime: number = 0
    let totalPositiveWishNotFulfilled: number = 0
    let totalNegativeWishNotFulfilled: number = 0
    let totalAbsenceWishNotFulfilled: number = 0

    // console.log("this is stuffing final", stuffingFinal)
    for (let i = 0; i < stuffingFinal.length; i++) {
        finalOverstuffing += stuffingFinal[i].overStuffing!
        finalUnderStuffing += stuffingFinal[i].underStuffing!
        finalOverTime += stuffingFinal[i].overtime!
        finalUnderTime += stuffingFinal[i].underTime!
        totalPositiveWishNotFulfilled += (stuffingFinal[i].totalPositiveWish! - stuffingFinal[i].wishPositiveFulfilled!)
        totalNegativeWishNotFulfilled += (stuffingFinal[i].totalNegativeWish! - stuffingFinal[i].wishNegativeFulfilled!)
        totalAbsenceWishNotFulfilled += (stuffingFinal[i].totalAbsence! - stuffingFinal[i].absenceWishFulfilled!)

    }

    for (let i = 0; i < clonedEmployee.length; i++) {
        for (let j = 0; j < shift.length; j++) {
            if (shift[j].employeeId == clonedEmployee[i].empId) {
                shift[j].empPower = clonedEmployee[i].empPower
            }
        }
    }

    // console.log("this is in table function", clonedEmployee);
    setLastEmployeeInfo(clonedEmployee)
    console.log("step 2- timetable calculated everything and set the value to last emp info", clonedEmployee);
    

    return { officeOpenTimings, demand, shift, workArea, stuffingFinal, finalOverstuffing, finalUnderStuffing, finalUnderTime, finalOverTime, totalPositiveWishNotFulfilled, totalNegativeWishNotFulfilled, totalAbsenceWishNotFulfilled }

}