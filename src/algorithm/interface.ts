/* eslint-disable */

interface employeeInfo {
    empId: number,
    empName: string,
    weeklyWorkingHours: number,
    notAvailableEmployee?: any[],
    timeRange?: (number | string)[],
    absenceRange?: (number | string)[],
    negativeWish?: (number | string)[],
    positiveWish?: (number | string)[],
    todayWorkingHours?: number,
    empPower?: number
}

interface demandInfo {
    demandId: number,
    day: number,
    startTime: number,
    endTime: number,
    amount: number,
    workAreaId: number,
    range?: (number | string)[],
    totalDemand?: any[],
    remainingHours?: number,
    alreadyAllocatedEmp?: (number | string)[]
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

export let lastEmployeeInfo: employeeInfo[] = []


export let employee: employeeInfo[] = [
    { empId: 1, empName: "Rachit", weeklyWorkingHours: 40, todayWorkingHours: 0, empPower: 1 },
    { empId: 2, empName: "Rachit1", weeklyWorkingHours: 40, todayWorkingHours: 0, empPower: 1 },
    { empId: 3, empName: "Rachit2", weeklyWorkingHours: 40, todayWorkingHours: 0, empPower: 1 },
    { empId: 4, empName: "Rachit3", weeklyWorkingHours: 40, todayWorkingHours: 0, empPower: 1 },
    { empId: 5, empName: "Rachit4", weeklyWorkingHours: 40, todayWorkingHours: 0, empPower: 1 },
    { empId: 6, empName: "Rachit5", weeklyWorkingHours: 40, todayWorkingHours: 0, empPower: 1 },
    { empId: 7, empName: "Rachit6", weeklyWorkingHours: 40, todayWorkingHours: 0, empPower: 1 },
    { empId: 8, empName: "Rachit7", weeklyWorkingHours: 40, todayWorkingHours: 0, empPower: 1 },
    { empId: 9, empName: "Rachit8", weeklyWorkingHours: 40, todayWorkingHours: 0, empPower: 1 },
    { empId: 10, empName: "Rachit9", weeklyWorkingHours: 40, todayWorkingHours: 0, empPower: 1 },
    // { empId: 11, empName: "Rachit10", weeklyWorkingHours: 40, todayWorkingHours:0, empPower: 1 },
    // { empId: 12, empName: "Rachit11", weeklyWorkingHours: 40, todayWorkingHours:0, empPower: 1 },
    // { empId: 13, empName: "Rachit12", weeklyWorkingHours: 40, todayWorkingHours:0, empPower: 1 },
    // { empId: 14, empName: "Rachit13", weeklyWorkingHours: 40, todayWorkingHours:0, empPower: 1 },
    // { empId: 15, empName: "Rachit14", weeklyWorkingHours: 40, todayWorkingHours:0, empPower: 1 },
    // { empId: 16, empName: "Rachit15", weeklyWorkingHours: 40, todayWorkingHours:0, empPower: 1 },
    // { empId: 17, empName: "Rachit16", weeklyWorkingHours: 40, todayWorkingHours:0, empPower: 1 },
    // { empId: 18, empName: "Rachit17", weeklyWorkingHours: 40, todayWorkingHours:0, empPower: 1 },
    // { empId: 19, empName: "Rachit18", weeklyWorkingHours: 40, todayWorkingHours:0, empPower: 1 },
    // { empId: 20, empName: "Rachit19", weeklyWorkingHours: 40, todayWorkingHours:0, empPower: 1 },
    // { empId: 21, empName: "Rachit20", weeklyWorkingHours: 40, todayWorkingHours:0, empPower: 1 },
    // { empId: 22, empName: "Rachit21", weeklyWorkingHours: 40, todayWorkingHours:0,empPower: 1 },
    // { empId: 23, empName: "Rachit14", weeklyWorkingHours: 40, todayWorkingHours:0, empPower: 1 },
    // { empId: 24, empName: "Rachit15", weeklyWorkingHours: 40, todayWorkingHours:0, empPower: 1 },
    // { empId: 25, empName: "Rachit16", weeklyWorkingHours: 40, todayWorkingHours:0, empPower: 1 },
    // { empId: 26, empName: "Rachit17", weeklyWorkingHours: 40, todayWorkingHours:0, empPower: 1 },
    // { empId: 27, empName: "Rachit18", weeklyWorkingHours: 40, todayWorkingHours:0, empPower: 1 },
    // { empId: 28, empName: "Rachit19", weeklyWorkingHours: 40, todayWorkingHours:0, empPower: 1 },
    // { empId: 29, empName: "Rachit20", weeklyWorkingHours: 40, todayWorkingHours:0, empPower: 1 },
    // { empId: 30, empName: "Rachit21", weeklyWorkingHours: 40, todayWorkingHours:0, empPower: 1 }
]

export function setNewEmployee(newValue: employeeInfo[]) {
    employee = newValue;
}

export let ep_powers: any

export function set_ep_power(values: any) {
    ep_powers = values
}

export function setLastEmployeeInfo(newValue: employeeInfo[]) {
    lastEmployeeInfo = newValue
}
// console.log("employee in interface", employee)

export const demand: demandInfo[] = [

// For 5 employees demand
// { demandId: 1, day: 1, startTime: 6, endTime: 7, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },
// { demandId: 2, day: 1, startTime: 7, endTime: 8, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },
// { demandId: 3, day: 1, startTime: 8, endTime: 9, amount: 0, workAreaId: 1, alreadyAllocatedEmp: [] },
// { demandId: 4, day: 1, startTime: 9, endTime: 10, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },

// { demandId: 5, day: 1, startTime: 6, endTime: 7, amount: 1, workAreaId: 2, alreadyAllocatedEmp: [] },
// { demandId: 6, day: 1, startTime: 7, endTime: 8, amount: 0, workAreaId: 2, alreadyAllocatedEmp: [] },
// { demandId: 7, day: 1, startTime: 8, endTime: 9, amount: 1, workAreaId: 2, alreadyAllocatedEmp: [] },
// { demandId: 8, day: 1, startTime: 9, endTime: 10, amount: 1, workAreaId: 2, alreadyAllocatedEmp: [] },

// { demandId: 9, day: 1, startTime: 6, endTime: 7, amount: 0, workAreaId: 3, alreadyAllocatedEmp: [] },
// { demandId: 10, day: 1, startTime: 7, endTime: 8, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
// { demandId: 11, day: 1, startTime: 8, endTime: 9, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
// { demandId: 12, day: 1, startTime: 9, endTime: 10, amount: 0, workAreaId: 3, alreadyAllocatedEmp: [] },


// { demandId: 13, day: 1, startTime: 10, endTime: 11, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },
// { demandId: 14, day: 1, startTime: 11, endTime: 12, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
// { demandId: 15, day: 1, startTime: 12, endTime: 13, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },


// { demandId: 16, day: 1, startTime: 10, endTime: 11, amount: 1, workAreaId: 2, alreadyAllocatedEmp: [] },
// { demandId: 17, day: 1, startTime: 11, endTime: 12, amount: 1, workAreaId: 2, alreadyAllocatedEmp: [] },
// { demandId: 18, day: 1, startTime: 12, endTime: 13, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

// { demandId: 19, day: 1, startTime: 10, endTime: 11, amount: 3, workAreaId: 3, alreadyAllocatedEmp: [] },
// { demandId: 19, day: 1, startTime: 11, endTime: 12, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
// { demandId: 20, day: 1, startTime: 12, endTime: 13, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },


// { demandId: 21, day: 1, startTime: 13, endTime: 14, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },
// { demandId: 22, day: 1, startTime: 14, endTime: 15, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
// { demandId: 23, day: 1, startTime: 15, endTime: 16, amount: 0, workAreaId: 1, alreadyAllocatedEmp: [] },


// { demandId: 24, day: 1, startTime: 13, endTime: 14, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
// { demandId: 25, day: 1, startTime: 14, endTime: 15, amount: 1, workAreaId: 2, alreadyAllocatedEmp: [] },
// { demandId: 26, day: 1, startTime: 15, endTime: 16, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },


// { demandId: 27, day: 1, startTime: 13, endTime: 14, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
// { demandId: 28, day: 1, startTime: 14, endTime: 15, amount:0, workAreaId: 3, alreadyAllocatedEmp: [] },
// { demandId: 29, day: 1, startTime: 15, endTime: 16, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },


// { demandId: 30, day: 1, startTime: 16, endTime: 17, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },
// { demandId: 31, day: 1, startTime: 17, endTime: 18, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },

// { demandId: 32, day: 1, startTime: 16, endTime: 17, amount: 1, workAreaId: 2, alreadyAllocatedEmp: [] },
// { demandId: 33, day: 1, startTime: 17, endTime: 18, amount: 1, workAreaId: 2, alreadyAllocatedEmp: [] },

// { demandId: 34, day: 1, startTime: 16, endTime: 17, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
// { demandId: 35, day: 1, startTime: 17, endTime: 18, amount: 0, workAreaId: 3, alreadyAllocatedEmp: [] },









// { demandId: 1, day: 2, startTime: 6, endTime: 7, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },
// { demandId: 2, day: 2, startTime: 7, endTime: 8, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },
// { demandId: 3, day: 2, startTime: 8, endTime: 9, amount: 0, workAreaId: 1, alreadyAllocatedEmp: [] },
// { demandId: 4, day: 2, startTime: 9, endTime: 10, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },

// { demandId: 5, day: 2, startTime: 6, endTime: 7, amount: 1, workAreaId: 2, alreadyAllocatedEmp: [] },
// { demandId: 6, day: 2, startTime: 7, endTime: 8, amount: 0, workAreaId: 2, alreadyAllocatedEmp: [] },
// { demandId: 7, day: 2, startTime: 8, endTime: 9, amount: 1, workAreaId: 2, alreadyAllocatedEmp: [] },
// { demandId: 8, day: 2, startTime: 9, endTime: 10, amount: 1, workAreaId: 2, alreadyAllocatedEmp: [] },

// { demandId: 9, day: 2, startTime: 6, endTime: 7, amount: 0, workAreaId: 3, alreadyAllocatedEmp: [] },
// { demandId: 10, day: 2, startTime: 7, endTime: 8, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
// { demandId: 11, day: 2, startTime: 8, endTime: 9, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
// { demandId: 12, day: 2, startTime: 9, endTime: 10, amount: 0, workAreaId: 3, alreadyAllocatedEmp: [] },


// { demandId: 13, day: 2, startTime: 10, endTime: 11, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },
// { demandId: 14, day: 2, startTime: 11, endTime: 12, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
// { demandId: 15, day: 2, startTime: 12, endTime: 13, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },


// { demandId: 16, day: 2, startTime: 10, endTime: 11, amount: 1, workAreaId: 2, alreadyAllocatedEmp: [] },
// { demandId: 17, day: 2, startTime: 11, endTime: 12, amount: 1, workAreaId: 2, alreadyAllocatedEmp: [] },
// { demandId: 18, day: 2, startTime: 12, endTime: 13, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

// { demandId: 19, day: 2, startTime: 10, endTime: 11, amount: 3, workAreaId: 3, alreadyAllocatedEmp: [] },
// { demandId: 19, day: 2, startTime: 11, endTime: 12, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
// { demandId: 20, day: 2, startTime: 12, endTime: 13, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },


// { demandId: 21, day: 2, startTime: 13, endTime: 14, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },
// { demandId: 22, day: 2, startTime: 14, endTime: 15, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
// { demandId: 23, day: 2, startTime: 15, endTime: 16, amount: 0, workAreaId: 1, alreadyAllocatedEmp: [] },


// { demandId: 24, day: 2, startTime: 13, endTime: 14, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
// { demandId: 25, day: 2, startTime: 14, endTime: 15, amount: 1, workAreaId: 2, alreadyAllocatedEmp: [] },
// { demandId: 26, day: 2, startTime: 15, endTime: 16, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },


// { demandId: 27, day: 2, startTime: 13, endTime: 14, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
// { demandId: 28, day: 2, startTime: 14, endTime: 15, amount:0, workAreaId: 3, alreadyAllocatedEmp: [] },
// { demandId: 29, day: 2, startTime: 15, endTime: 16, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },


// { demandId: 30, day: 2, startTime: 16, endTime: 17, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },
// { demandId: 31, day: 2, startTime: 17, endTime: 18, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },

// { demandId: 32, day: 2, startTime: 16, endTime: 17, amount: 1, workAreaId: 2, alreadyAllocatedEmp: [] },
// { demandId: 33, day: 2, startTime: 17, endTime: 18, amount: 1, workAreaId: 2, alreadyAllocatedEmp: [] },

// { demandId: 34, day: 2, startTime: 16, endTime: 17, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
// { demandId: 35, day: 2, startTime: 17, endTime: 18, amount: 0, workAreaId: 3, alreadyAllocatedEmp: [] },






// { demandId: 1, day: 3, startTime: 6, endTime: 7, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },
// { demandId: 2, day: 3, startTime: 7, endTime: 8, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },
// { demandId: 3, day: 3, startTime: 8, endTime: 9, amount: 0, workAreaId: 1, alreadyAllocatedEmp: [] },
// { demandId: 4, day: 3, startTime: 9, endTime: 10, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },

// { demandId: 5, day: 3, startTime: 6, endTime: 7, amount: 1, workAreaId: 2, alreadyAllocatedEmp: [] },
// { demandId: 6, day: 3, startTime: 7, endTime: 8, amount: 0, workAreaId: 2, alreadyAllocatedEmp: [] },
// { demandId: 7, day: 3, startTime: 8, endTime: 9, amount: 1, workAreaId: 2, alreadyAllocatedEmp: [] },
// { demandId: 8, day: 3, startTime: 9, endTime: 10, amount: 1, workAreaId: 2, alreadyAllocatedEmp: [] },

// { demandId: 9, day: 3, startTime: 6, endTime: 7, amount: 0, workAreaId: 3, alreadyAllocatedEmp: [] },
// { demandId: 10, day: 3, startTime: 7, endTime: 8, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
// { demandId: 11, day: 3, startTime: 8, endTime: 9, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
// { demandId: 12, day: 3, startTime: 9, endTime: 10, amount: 0, workAreaId: 3, alreadyAllocatedEmp: [] },


// { demandId: 13, day: 3, startTime: 10, endTime: 11, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },
// { demandId: 14, day: 3, startTime: 11, endTime: 12, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
// { demandId: 15, day: 3, startTime: 12, endTime: 13, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },


// { demandId: 16, day: 3, startTime: 10, endTime: 11, amount: 1, workAreaId: 2, alreadyAllocatedEmp: [] },
// { demandId: 17, day: 3, startTime: 11, endTime: 12, amount: 1, workAreaId: 2, alreadyAllocatedEmp: [] },
// { demandId: 18, day: 3, startTime: 12, endTime: 13, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

// { demandId: 19, day: 3, startTime: 10, endTime: 11, amount: 3, workAreaId: 3, alreadyAllocatedEmp: [] },
// { demandId: 19, day: 3, startTime: 11, endTime: 12, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
// { demandId: 20, day: 3, startTime: 12, endTime: 13, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },


// { demandId: 21, day: 3, startTime: 13, endTime: 14, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },
// { demandId: 22, day: 3, startTime: 14, endTime: 15, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
// { demandId: 23, day: 3, startTime: 15, endTime: 16, amount: 0, workAreaId: 1, alreadyAllocatedEmp: [] },


// { demandId: 24, day: 3, startTime: 13, endTime: 14, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
// { demandId: 25, day: 3, startTime: 14, endTime: 15, amount: 1, workAreaId: 2, alreadyAllocatedEmp: [] },
// { demandId: 26, day: 3, startTime: 15, endTime: 16, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },


// { demandId: 27, day: 3, startTime: 13, endTime: 14, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
// { demandId: 28, day: 3, startTime: 14, endTime: 15, amount:0, workAreaId: 3, alreadyAllocatedEmp: [] },
// { demandId: 29, day: 3, startTime: 15, endTime: 16, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },


// { demandId: 30, day: 3, startTime: 16, endTime: 17, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },
// { demandId: 31, day: 3, startTime: 17, endTime: 18, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },

// { demandId: 32, day: 3, startTime: 16, endTime: 17, amount: 1, workAreaId: 2, alreadyAllocatedEmp: [] },
// { demandId: 33, day: 3, startTime: 17, endTime: 18, amount: 1, workAreaId: 2, alreadyAllocatedEmp: [] },

// { demandId: 34, day: 3, startTime: 16, endTime: 17, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
// { demandId: 35, day: 3, startTime: 17, endTime: 18, amount: 0, workAreaId: 3, alreadyAllocatedEmp: [] },









// { demandId: 1, day: 4, startTime: 6, endTime: 7, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },
// { demandId: 2, day: 4, startTime: 7, endTime: 8, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },
// { demandId: 3, day: 4, startTime: 8, endTime: 9, amount: 0, workAreaId: 1, alreadyAllocatedEmp: [] },
// { demandId: 4, day: 4, startTime: 9, endTime: 10, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },

// { demandId: 5, day: 4, startTime: 6, endTime: 7, amount: 1, workAreaId: 2, alreadyAllocatedEmp: [] },
// { demandId: 6, day: 4, startTime: 7, endTime: 8, amount: 0, workAreaId: 2, alreadyAllocatedEmp: [] },
// { demandId: 7, day: 4, startTime: 8, endTime: 9, amount: 1, workAreaId: 2, alreadyAllocatedEmp: [] },
// { demandId: 8, day: 4, startTime: 9, endTime: 10, amount: 1, workAreaId: 2, alreadyAllocatedEmp: [] },

// { demandId: 9, day: 4, startTime: 6, endTime: 7, amount: 0, workAreaId: 3, alreadyAllocatedEmp: [] },
// { demandId: 10, day: 4, startTime: 7, endTime: 8, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
// { demandId: 11, day: 4, startTime: 8, endTime: 9, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
// { demandId: 12, day: 4, startTime: 9, endTime: 10, amount: 0, workAreaId: 3, alreadyAllocatedEmp: [] },


// { demandId: 13, day: 4, startTime: 10, endTime: 11, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },
// { demandId: 14, day: 4, startTime: 11, endTime: 12, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
// { demandId: 15, day: 4, startTime: 12, endTime: 13, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },


// { demandId: 16, day: 4, startTime: 10, endTime: 11, amount: 1, workAreaId: 2, alreadyAllocatedEmp: [] },
// { demandId: 17, day: 4, startTime: 11, endTime: 12, amount: 1, workAreaId: 2, alreadyAllocatedEmp: [] },
// { demandId: 18, day: 4, startTime: 12, endTime: 13, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

// { demandId: 19, day: 4, startTime: 10, endTime: 11, amount: 3, workAreaId: 3, alreadyAllocatedEmp: [] },
// { demandId: 19, day: 4, startTime: 11, endTime: 12, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
// { demandId: 20, day: 4, startTime: 12, endTime: 13, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },


// { demandId: 21, day: 4, startTime: 13, endTime: 14, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },
// { demandId: 22, day: 4, startTime: 14, endTime: 15, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
// { demandId: 23, day: 4, startTime: 15, endTime: 16, amount: 0, workAreaId: 1, alreadyAllocatedEmp: [] },


// { demandId: 24, day: 4, startTime: 13, endTime: 14, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
// { demandId: 25, day: 4, startTime: 14, endTime: 15, amount: 1, workAreaId: 2, alreadyAllocatedEmp: [] },
// { demandId: 26, day: 4, startTime: 15, endTime: 16, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },


// { demandId: 27, day: 4, startTime: 13, endTime: 14, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
// { demandId: 28, day: 4, startTime: 14, endTime: 15, amount:0, workAreaId: 3, alreadyAllocatedEmp: [] },
// { demandId: 29, day: 4, startTime: 15, endTime: 16, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },


// { demandId: 30, day: 4, startTime: 16, endTime: 17, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },
// { demandId: 31, day: 4, startTime: 17, endTime: 18, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },

// { demandId: 32, day: 4, startTime: 16, endTime: 17, amount: 1, workAreaId: 2, alreadyAllocatedEmp: [] },
// { demandId: 33, day: 4, startTime: 17, endTime: 18, amount: 1, workAreaId: 2, alreadyAllocatedEmp: [] },

// { demandId: 34, day: 4, startTime: 16, endTime: 17, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
// { demandId: 35, day: 4, startTime: 17, endTime: 18, amount: 0, workAreaId: 3, alreadyAllocatedEmp: [] },









// { demandId: 1, day: 5, startTime: 6, endTime: 7, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },
// { demandId: 2, day: 5, startTime: 7, endTime: 8, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },
// { demandId: 3, day: 5, startTime: 8, endTime: 9, amount: 0, workAreaId: 1, alreadyAllocatedEmp: [] },
// { demandId: 4, day: 5, startTime: 9, endTime: 10, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },

// { demandId: 5, day: 5, startTime: 6, endTime: 7, amount: 1, workAreaId: 2, alreadyAllocatedEmp: [] },
// { demandId: 6, day: 5, startTime: 7, endTime: 8, amount: 0, workAreaId: 2, alreadyAllocatedEmp: [] },
// { demandId: 7, day: 5, startTime: 8, endTime: 9, amount: 1, workAreaId: 2, alreadyAllocatedEmp: [] },
// { demandId: 8, day: 5, startTime: 9, endTime: 10, amount: 1, workAreaId: 2, alreadyAllocatedEmp: [] },

// { demandId: 9, day: 5, startTime: 6, endTime: 7, amount: 0, workAreaId: 3, alreadyAllocatedEmp: [] },
// { demandId: 10, day: 5, startTime: 7, endTime: 8, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
// { demandId: 11, day: 5, startTime: 8, endTime: 9, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
// { demandId: 12, day: 5, startTime: 9, endTime: 10, amount: 0, workAreaId: 3, alreadyAllocatedEmp: [] },


// { demandId: 13, day: 5, startTime: 10, endTime: 11, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },
// { demandId: 14, day: 5, startTime: 11, endTime: 12, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
// { demandId: 15, day: 5, startTime: 12, endTime: 13, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },


// { demandId: 16, day: 5, startTime: 10, endTime: 11, amount: 1, workAreaId: 2, alreadyAllocatedEmp: [] },
// { demandId: 17, day: 5, startTime: 11, endTime: 12, amount: 1, workAreaId: 2, alreadyAllocatedEmp: [] },
// { demandId: 18, day: 5, startTime: 12, endTime: 13, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

// { demandId: 19, day: 5, startTime: 10, endTime: 11, amount: 3, workAreaId: 3, alreadyAllocatedEmp: [] },
// { demandId: 19, day: 5, startTime: 11, endTime: 12, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
// { demandId: 20, day: 5, startTime: 12, endTime: 13, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },


// { demandId: 21, day: 5, startTime: 13, endTime: 14, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },
// { demandId: 22, day: 5, startTime: 14, endTime: 15, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
// { demandId: 23, day: 5, startTime: 15, endTime: 16, amount: 0, workAreaId: 1, alreadyAllocatedEmp: [] },


// { demandId: 24, day: 5, startTime: 13, endTime: 14, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
// { demandId: 25, day: 5, startTime: 14, endTime: 15, amount: 1, workAreaId: 2, alreadyAllocatedEmp: [] },
// { demandId: 26, day: 5, startTime: 15, endTime: 16, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },


// { demandId: 27, day: 5, startTime: 13, endTime: 14, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
// { demandId: 28, day: 5, startTime: 14, endTime: 15, amount:0, workAreaId: 3, alreadyAllocatedEmp: [] },
// { demandId: 29, day: 5, startTime: 15, endTime: 16, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },


// { demandId: 30, day: 5, startTime: 16, endTime: 17, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },
// { demandId: 31, day: 5, startTime: 17, endTime: 18, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },

// { demandId: 32, day: 5, startTime: 16, endTime: 17, amount: 1, workAreaId: 2, alreadyAllocatedEmp: [] },
// { demandId: 33, day: 5, startTime: 17, endTime: 18, amount: 1, workAreaId: 2, alreadyAllocatedEmp: [] },

// { demandId: 34, day: 5, startTime: 16, endTime: 17, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
// { demandId: 35, day: 5, startTime: 17, endTime: 18, amount: 0, workAreaId: 3, alreadyAllocatedEmp: [] },


    { demandId: 1, day: 1, startTime: 6, endTime: 7, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 2, day: 1, startTime: 7, endTime: 8, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 3, day: 1, startTime: 8, endTime: 9, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 4, day: 1, startTime: 9, endTime: 10, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },

    { demandId: 5, day: 1, startTime: 6, endTime: 7, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 6, day: 1, startTime: 7, endTime: 8, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 7, day: 1, startTime: 8, endTime: 9, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 8, day: 1, startTime: 9, endTime: 10, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    { demandId: 9, day: 1, startTime: 6, endTime: 7, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 10, day: 1, startTime: 7, endTime: 8, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 11, day: 1, startTime: 8, endTime: 9, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 12, day: 1, startTime: 9, endTime: 10, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },


    { demandId: 13, day: 1, startTime: 10, endTime: 11, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 14, day: 1, startTime: 11, endTime: 12, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 15, day: 1, startTime: 12, endTime: 13, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },


    { demandId: 16, day: 1, startTime: 10, endTime: 11, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 17, day: 1, startTime: 11, endTime: 12, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 18, day: 1, startTime: 12, endTime: 13, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },

    { demandId: 19, day: 1, startTime: 10, endTime: 11, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 19, day: 1, startTime: 11, endTime: 12, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 20, day: 1, startTime: 12, endTime: 13, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },


    { demandId: 21, day: 1, startTime: 13, endTime: 14, amount: 5, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 22, day: 1, startTime: 14, endTime: 15, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 23, day: 1, startTime: 15, endTime: 16, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },


    { demandId: 24, day: 1, startTime: 13, endTime: 14, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 25, day: 1, startTime: 14, endTime: 15, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 26, day: 1, startTime: 15, endTime: 16, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },


    { demandId: 27, day: 1, startTime: 13, endTime: 14, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 28, day: 1, startTime: 14, endTime: 15, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 29, day: 1, startTime: 15, endTime: 16, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },


    { demandId: 30, day: 1, startTime: 16, endTime: 17, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 31, day: 1, startTime: 17, endTime: 18, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },

    { demandId: 32, day: 1, startTime: 16, endTime: 17, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 33, day: 1, startTime: 17, endTime: 18, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    { demandId: 34, day: 1, startTime: 16, endTime: 17, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 35, day: 1, startTime: 17, endTime: 18, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },






    { demandId: 1, day: 2, startTime: 6, endTime: 7, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 2, day: 2, startTime: 7, endTime: 8, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 3, day: 2, startTime: 8, endTime: 9, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 4, day: 2, startTime: 9, endTime: 10, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },

    { demandId: 5, day: 2, startTime: 6, endTime: 7, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 6, day: 2, startTime: 7, endTime: 8, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 7, day: 2, startTime: 8, endTime: 9, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 8, day: 2, startTime: 9, endTime: 10, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    { demandId: 9, day: 2, startTime: 6, endTime: 7, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 10, day: 2, startTime: 7, endTime: 8, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 11, day: 2, startTime: 8, endTime: 9, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 12, day: 2, startTime: 9, endTime: 10, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },


    { demandId: 13, day: 2, startTime: 10, endTime: 11, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 14, day: 2, startTime: 11, endTime: 12, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 15, day: 2, startTime: 12, endTime: 13, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },


    { demandId: 16, day: 2, startTime: 10, endTime: 11, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 17, day: 2, startTime: 11, endTime: 12, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 18, day: 2, startTime: 12, endTime: 13, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },

    { demandId: 19, day: 2, startTime: 10, endTime: 11, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 19, day: 2, startTime: 11, endTime: 12, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 20, day: 2, startTime: 12, endTime: 13, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },


    { demandId: 21, day: 2, startTime: 13, endTime: 14, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 22, day: 2, startTime: 14, endTime: 15, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 23, day: 2, startTime: 15, endTime: 16, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },


    { demandId: 24, day: 2, startTime: 13, endTime: 14, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 25, day: 2, startTime: 14, endTime: 15, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 26, day: 2, startTime: 15, endTime: 16, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },


    { demandId: 27, day: 2, startTime: 13, endTime: 14, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 28, day: 2, startTime: 14, endTime: 15, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 29, day: 2, startTime: 15, endTime: 16, amount: 3, workAreaId: 3, alreadyAllocatedEmp: [] },


    { demandId: 30, day: 2, startTime: 16, endTime: 17, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 31, day: 2, startTime: 17, endTime: 18, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },

    { demandId: 32, day: 2, startTime: 16, endTime: 17, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 33, day: 2, startTime: 17, endTime: 18, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    { demandId: 34, day: 2, startTime: 16, endTime: 17, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 35, day: 2, startTime: 17, endTime: 18, amount: 4, workAreaId: 3, alreadyAllocatedEmp: [] },

    { demandId: 1, day: 3, startTime: 6, endTime: 7, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 2, day: 3, startTime: 7, endTime: 8, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 3, day: 3, startTime: 8, endTime: 9, amount: 5, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 4, day: 3, startTime: 9, endTime: 10, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },

    { demandId: 5, day: 3, startTime: 6, endTime: 7, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 6, day: 3, startTime: 7, endTime: 8, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 7, day: 3, startTime: 8, endTime: 9, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 8, day: 3, startTime: 9, endTime: 10, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    { demandId: 9, day: 3, startTime: 6, endTime: 7, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 10, day: 3, startTime: 7, endTime: 8, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 11, day: 3, startTime: 8, endTime: 9, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 12, day: 3, startTime: 9, endTime: 10, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },


    { demandId: 13, day: 3, startTime: 10, endTime: 11, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 14, day: 3, startTime: 11, endTime: 12, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 15, day: 3, startTime: 12, endTime: 13, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },


    { demandId: 16, day: 3, startTime: 10, endTime: 11, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 17, day: 3, startTime: 11, endTime: 12, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 18, day: 3, startTime: 12, endTime: 13, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },

    { demandId: 19, day: 3, startTime: 10, endTime: 11, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 19, day: 3, startTime: 11, endTime: 12, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 20, day: 3, startTime: 12, endTime: 13, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },


    { demandId: 21, day: 3, startTime: 13, endTime: 14, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 22, day: 3, startTime: 14, endTime: 15, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 23, day: 3, startTime: 15, endTime: 16, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },


    { demandId: 24, day: 3, startTime: 13, endTime: 14, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 25, day: 3, startTime: 14, endTime: 15, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 26, day: 3, startTime: 15, endTime: 16, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },


    { demandId: 27, day: 3, startTime: 13, endTime: 14, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 28, day: 3, startTime: 14, endTime: 15, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 29, day: 3, startTime: 15, endTime: 16, amount: 3, workAreaId: 3, alreadyAllocatedEmp: [] },


    { demandId: 30, day: 3, startTime: 16, endTime: 17, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 31, day: 3, startTime: 17, endTime: 18, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },

    { demandId: 32, day: 3, startTime: 16, endTime: 17, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 33, day: 3, startTime: 17, endTime: 18, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    { demandId: 34, day: 3, startTime: 16, endTime: 17, amount: 4, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 35, day: 3, startTime: 17, endTime: 18, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },






    { demandId: 1, day: 4, startTime: 6, endTime: 7, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 2, day: 4, startTime: 7, endTime: 8, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 3, day: 4, startTime: 8, endTime: 9, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 4, day: 4, startTime: 9, endTime: 10, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },

    { demandId: 5, day: 4, startTime: 6, endTime: 7, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 6, day: 4, startTime: 7, endTime: 8, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 7, day: 4, startTime: 8, endTime: 9, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 8, day: 4, startTime: 9, endTime: 10, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    { demandId: 9, day: 4, startTime: 6, endTime: 7, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 10, day: 4, startTime: 7, endTime: 8, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 11, day: 4, startTime: 8, endTime: 9, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 12, day: 4, startTime: 9, endTime: 10, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },


    { demandId: 13, day: 4, startTime: 10, endTime: 11, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 14, day: 4, startTime: 11, endTime: 12, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 15, day: 4, startTime: 12, endTime: 13, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },


    { demandId: 16, day: 4, startTime: 10, endTime: 11, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 17, day: 4, startTime: 11, endTime: 12, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 18, day: 4, startTime: 12, endTime: 13, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },

    { demandId: 19, day: 4, startTime: 10, endTime: 11, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 19, day: 4, startTime: 11, endTime: 12, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 20, day: 4, startTime: 12, endTime: 13, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },


    { demandId: 21, day: 4, startTime: 13, endTime: 14, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 22, day: 4, startTime: 14, endTime: 15, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 23, day: 4, startTime: 15, endTime: 16, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },


    { demandId: 24, day: 4, startTime: 13, endTime: 14, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 25, day: 4, startTime: 14, endTime: 15, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 26, day: 4, startTime: 15, endTime: 16, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },


    { demandId: 27, day: 4, startTime: 13, endTime: 14, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 28, day: 4, startTime: 14, endTime: 15, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 29, day: 4, startTime: 15, endTime: 16, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },


    { demandId: 30, day: 4, startTime: 16, endTime: 17, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 31, day: 4, startTime: 17, endTime: 18, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },

    { demandId: 32, day: 4, startTime: 16, endTime: 17, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 33, day: 4, startTime: 17, endTime: 18, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    { demandId: 34, day: 4, startTime: 16, endTime: 17, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 35, day: 4, startTime: 17, endTime: 18, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },

    { demandId: 1, day: 5, startTime: 6, endTime: 7, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 2, day: 5, startTime: 7, endTime: 8, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 3, day: 5, startTime: 8, endTime: 9, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 4, day: 5, startTime: 9, endTime: 10, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },

    { demandId: 5, day: 5, startTime: 6, endTime: 7, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 6, day: 5, startTime: 7, endTime: 8, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 7, day: 5, startTime: 8, endTime: 9, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 8, day: 5, startTime: 9, endTime: 10, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    { demandId: 9, day: 5, startTime: 6, endTime: 7, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 10, day: 5, startTime: 7, endTime: 8, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 11, day: 5, startTime: 8, endTime: 9, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 12, day: 5, startTime: 9, endTime: 10, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },


    { demandId: 13, day: 5, startTime: 10, endTime: 11, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 14, day: 5, startTime: 11, endTime: 12, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 15, day: 5, startTime: 12, endTime: 13, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },


    { demandId: 16, day: 5, startTime: 10, endTime: 11, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 17, day: 5, startTime: 11, endTime: 12, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 18, day: 5, startTime: 12, endTime: 13, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },

    { demandId: 19, day: 5, startTime: 10, endTime: 11, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 19, day: 5, startTime: 11, endTime: 12, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 20, day: 5, startTime: 12, endTime: 13, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },

    { demandId: 21, day: 5, startTime: 13, endTime: 14, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 22, day: 5, startTime: 14, endTime: 15, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 23, day: 5, startTime: 15, endTime: 16, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },


    { demandId: 24, day: 5, startTime: 13, endTime: 14, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 25, day: 5, startTime: 14, endTime: 15, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 26, day: 5, startTime: 15, endTime: 16, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },


    { demandId: 27, day: 5, startTime: 13, endTime: 14, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 28, day: 5, startTime: 14, endTime: 15, amount: 3, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 29, day: 5, startTime: 15, endTime: 16, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },


    { demandId: 30, day: 5, startTime: 16, endTime: 17, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 31, day: 5, startTime: 17, endTime: 18, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },

    { demandId: 32, day: 5, startTime: 16, endTime: 17, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 33, day: 5, startTime: 17, endTime: 18, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    { demandId: 34, day: 5, startTime: 16, endTime: 17, amount: 4, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 35, day: 5, startTime: 17, endTime: 18, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },





    // //week 2
    // { demandId: 1, day: 6, startTime: 6, endTime: 7, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 2, day: 6, startTime: 7, endTime: 8, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 3, day: 6, startTime: 8, endTime: 9, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 4, day: 6, startTime: 9, endTime: 10, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },

    // { demandId: 5, day: 6, startTime: 6, endTime: 7, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 6, day: 6, startTime: 7, endTime: 8, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 7, day: 6, startTime: 8, endTime: 9, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 8, day: 6, startTime: 9, endTime: 10, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 9, day: 6, startTime: 6, endTime: 7, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 10, day: 6, startTime: 7, endTime: 8, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 11, day: 6, startTime: 8, endTime: 9, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 12, day: 6, startTime: 9, endTime: 10, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },


    // { demandId: 13, day: 6, startTime: 10, endTime: 11, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 14, day: 6, startTime: 11, endTime: 12, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 15, day: 6, startTime: 12, endTime: 13, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },


    // { demandId: 16, day: 6, startTime: 10, endTime: 11, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 17, day: 6, startTime: 11, endTime: 12, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 18, day: 6, startTime: 12, endTime: 13, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 19, day: 6, startTime: 10, endTime: 11, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 19, day: 6, startTime: 11, endTime: 12, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 20, day: 6, startTime: 12, endTime: 13, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },


    // { demandId: 21, day: 6, startTime: 13, endTime: 14, amount: 5, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 22, day: 6, startTime: 14, endTime: 15, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 23, day: 6, startTime: 15, endTime: 16, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },


    // { demandId: 24, day: 6, startTime: 13, endTime: 14, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 25, day: 6, startTime: 14, endTime: 15, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 26, day: 6, startTime: 15, endTime: 16, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },


    // { demandId: 27, day: 6, startTime: 13, endTime: 14, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 28, day: 6, startTime: 14, endTime: 15, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 29, day: 6, startTime: 15, endTime: 16, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },


    // { demandId: 30, day: 6, startTime: 16, endTime: 17, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 31, day: 6, startTime: 17, endTime: 18, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },

    // { demandId: 32, day: 6, startTime: 16, endTime: 17, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 33, day: 6, startTime: 17, endTime: 18, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 34, day: 6, startTime: 16, endTime: 17, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 35, day: 6, startTime: 17, endTime: 18, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },






    // { demandId: 1, day: 7, startTime: 6, endTime: 7, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 2, day: 7, startTime: 7, endTime: 8, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 3, day: 7, startTime: 8, endTime: 9, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 4, day: 7, startTime: 9, endTime: 10, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },

    // { demandId: 5, day: 7, startTime: 6, endTime: 7, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 6, day: 7, startTime: 7, endTime: 8, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 7, day: 7, startTime: 8, endTime: 9, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 8, day: 7, startTime: 9, endTime: 10, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 9, day: 7, startTime: 6, endTime: 7, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 10, day: 7, startTime: 7, endTime: 8, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 11, day: 7, startTime: 8, endTime: 9, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 12, day: 7, startTime: 9, endTime: 10, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },


    // { demandId: 13, day: 7, startTime: 10, endTime: 11, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 14, day: 7, startTime: 11, endTime: 12, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 15, day: 7, startTime: 12, endTime: 13, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },


    // { demandId: 16, day: 7, startTime: 10, endTime: 11, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 17, day: 7, startTime: 11, endTime: 12, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 18, day: 7, startTime: 12, endTime: 13, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 19, day: 7, startTime: 10, endTime: 11, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 19, day: 7, startTime: 11, endTime: 12, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 20, day: 7, startTime: 12, endTime: 13, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },


    // { demandId: 21, day: 7, startTime: 13, endTime: 14, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 22, day: 7, startTime: 14, endTime: 15, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 23, day: 7, startTime: 15, endTime: 16, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },


    // { demandId: 24, day: 7, startTime: 13, endTime: 14, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 25, day: 7, startTime: 14, endTime: 15, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 26, day: 7, startTime: 15, endTime: 16, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },


    // { demandId: 27, day: 7, startTime: 13, endTime: 14, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 28, day: 7, startTime: 14, endTime: 15, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 29, day: 7, startTime: 15, endTime: 16, amount: 3, workAreaId: 3, alreadyAllocatedEmp: [] },


    // { demandId: 30, day: 7, startTime: 16, endTime: 17, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 31, day: 7, startTime: 17, endTime: 18, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },

    // { demandId: 32, day: 7, startTime: 16, endTime: 17, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 33, day: 7, startTime: 17, endTime: 18, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 34, day: 7, startTime: 16, endTime: 17, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 35, day: 7, startTime: 17, endTime: 18, amount: 4, workAreaId: 3, alreadyAllocatedEmp: [] },

    // { demandId: 1, day: 8, startTime: 6, endTime: 7, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 2, day: 8, startTime: 7, endTime: 8, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 3, day: 8, startTime: 8, endTime: 9, amount: 5, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 4, day: 8, startTime: 9, endTime: 10, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },

    // { demandId: 5, day: 8, startTime: 6, endTime: 7, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 6, day: 8, startTime: 7, endTime: 8, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 7, day: 8, startTime: 8, endTime: 9, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 8, day: 8, startTime: 9, endTime: 10, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 9, day: 8, startTime: 6, endTime: 7, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 10, day: 8, startTime: 7, endTime: 8, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 11, day: 8, startTime: 8, endTime: 9, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 12, day: 8, startTime: 9, endTime: 10, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },


    // { demandId: 13, day: 8, startTime: 10, endTime: 11, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 14, day: 8, startTime: 11, endTime: 12, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 15, day: 8, startTime: 12, endTime: 13, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },


    // { demandId: 16, day: 8, startTime: 10, endTime: 11, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 17, day: 8, startTime: 11, endTime: 12, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 18, day: 8, startTime: 12, endTime: 13, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 19, day: 8, startTime: 10, endTime: 11, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 19, day: 8, startTime: 11, endTime: 12, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 20, day: 8, startTime: 12, endTime: 13, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },


    // { demandId: 21, day: 8, startTime: 13, endTime: 14, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 22, day: 8, startTime: 14, endTime: 15, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 23, day: 8, startTime: 15, endTime: 16, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },


    // { demandId: 24, day: 8, startTime: 13, endTime: 14, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 25, day: 8, startTime: 14, endTime: 15, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 26, day: 8, startTime: 15, endTime: 16, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },


    // { demandId: 27, day: 8, startTime: 13, endTime: 14, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 28, day: 8, startTime: 14, endTime: 15, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 29, day: 8, startTime: 15, endTime: 16, amount: 3, workAreaId: 3, alreadyAllocatedEmp: [] },


    // { demandId: 30, day: 8, startTime: 16, endTime: 17, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 31, day: 8, startTime: 17, endTime: 18, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },

    // { demandId: 32, day: 8, startTime: 16, endTime: 17, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 33, day: 8, startTime: 17, endTime: 18, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 34, day: 8, startTime: 16, endTime: 17, amount: 4, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 35, day: 8, startTime: 17, endTime: 18, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },






    // { demandId: 1, day: 9, startTime: 6, endTime: 7, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 2, day: 9, startTime: 7, endTime: 8, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 3, day: 9, startTime: 8, endTime: 9, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 4, day: 9, startTime: 9, endTime: 10, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },

    // { demandId: 5, day: 9, startTime: 6, endTime: 7, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 6, day: 9, startTime: 7, endTime: 8, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 7, day: 9, startTime: 8, endTime: 9, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 8, day: 9, startTime: 9, endTime: 10, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 9, day: 9, startTime: 6, endTime: 7, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 10, day: 9, startTime: 7, endTime: 8, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 11, day: 9, startTime: 8, endTime: 9, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 12, day: 9, startTime: 9, endTime: 10, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },


    // { demandId: 13, day: 9, startTime: 10, endTime: 11, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 14, day: 9, startTime: 11, endTime: 12, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 15, day: 9, startTime: 12, endTime: 13, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },


    // { demandId: 16, day: 9, startTime: 10, endTime: 11, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 17, day: 9, startTime: 11, endTime: 12, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 18, day: 9, startTime: 12, endTime: 13, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 19, day: 9, startTime: 10, endTime: 11, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 19, day: 9, startTime: 11, endTime: 12, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 20, day: 9, startTime: 12, endTime: 13, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },


    // { demandId: 21, day: 9, startTime: 13, endTime: 14, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 22, day: 9, startTime: 14, endTime: 15, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 23, day: 9, startTime: 15, endTime: 16, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },


    // { demandId: 24, day: 9, startTime: 13, endTime: 14, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 25, day: 9, startTime: 14, endTime: 15, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 26, day: 9, startTime: 15, endTime: 16, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },


    // { demandId: 27, day: 9, startTime: 13, endTime: 14, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 28, day: 9, startTime: 14, endTime: 15, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 29, day: 9, startTime: 15, endTime: 16, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },


    // { demandId: 30, day: 9, startTime: 16, endTime: 17, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 31, day: 9, startTime: 17, endTime: 18, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },

    // { demandId: 32, day: 9, startTime: 16, endTime: 17, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 33, day: 9, startTime: 17, endTime: 18, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 34, day: 9, startTime: 16, endTime: 17, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 35, day: 9, startTime: 17, endTime: 18, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },

    // { demandId: 1, day: 10, startTime: 6, endTime: 7, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 2, day: 10, startTime: 7, endTime: 8, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 3, day: 10, startTime: 8, endTime: 9, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 4, day: 10, startTime: 9, endTime: 10, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },

    // { demandId: 5, day: 10, startTime: 6, endTime: 7, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 6, day: 10, startTime: 7, endTime: 8, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 7, day: 10, startTime: 8, endTime: 9, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 8, day: 10, startTime: 9, endTime: 10, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 9, day: 10, startTime: 6, endTime: 7, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 10, day: 10, startTime: 7, endTime: 8, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 11, day: 10, startTime: 8, endTime: 9, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 12, day: 10, startTime: 9, endTime: 10, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },


    // { demandId: 13, day: 10, startTime: 10, endTime: 11, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 14, day: 10, startTime: 11, endTime: 12, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 15, day: 10, startTime: 12, endTime: 13, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },


    // { demandId: 16, day: 10, startTime: 10, endTime: 11, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 17, day: 10, startTime: 11, endTime: 12, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 18, day: 10, startTime: 12, endTime: 13, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 19, day: 10, startTime: 10, endTime: 11, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 19, day: 10, startTime: 11, endTime: 12, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 20, day: 10, startTime: 12, endTime: 13, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },

    // { demandId: 21, day: 10, startTime: 13, endTime: 14, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 22, day: 10, startTime: 14, endTime: 15, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 23, day: 10, startTime: 15, endTime: 16, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },


    // { demandId: 24, day: 10, startTime: 13, endTime: 14, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 25, day: 10, startTime: 14, endTime: 15, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 26, day: 10, startTime: 15, endTime: 16, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },


    // { demandId: 27, day: 10, startTime: 13, endTime: 14, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 28, day: 10, startTime: 14, endTime: 15, amount: 3, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 29, day: 10, startTime: 15, endTime: 16, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },


    // { demandId: 30, day: 10, startTime: 16, endTime: 17, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 31, day: 10, startTime: 17, endTime: 18, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },

    // { demandId: 32, day: 10, startTime: 16, endTime: 17, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 33, day: 10, startTime: 17, endTime: 18, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 34, day: 10, startTime: 16, endTime: 17, amount: 4, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 35, day: 10, startTime: 17, endTime: 18, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },



    // //week 4

    // { demandId: 1, day: 11, startTime: 6, endTime: 7, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 2, day: 11, startTime: 7, endTime: 8, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 3, day: 11, startTime: 8, endTime: 9, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 4, day: 11, startTime: 9, endTime: 10, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },

    // { demandId: 5, day: 11, startTime: 6, endTime: 7, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 6, day: 11, startTime: 7, endTime: 8, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 7, day: 11, startTime: 8, endTime: 9, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 8, day: 11, startTime: 9, endTime: 10, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 9, day: 11, startTime: 6, endTime: 7, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 10, day: 11, startTime: 7, endTime: 8, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 11, day: 11, startTime: 8, endTime: 9, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 12, day: 11, startTime: 9, endTime: 10, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },


    // { demandId: 13, day: 11, startTime: 10, endTime: 11, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 14, day: 11, startTime: 11, endTime: 12, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 15, day: 11, startTime: 12, endTime: 13, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },


    // { demandId: 16, day: 11, startTime: 10, endTime: 11, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 17, day: 11, startTime: 11, endTime: 12, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 18, day: 11, startTime: 12, endTime: 13, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 19, day: 11, startTime: 10, endTime: 11, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 19, day: 11, startTime: 11, endTime: 12, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 20, day: 11, startTime: 12, endTime: 13, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },


    // { demandId: 21, day: 11, startTime: 13, endTime: 14, amount: 5, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 22, day: 11, startTime: 14, endTime: 15, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 23, day: 11, startTime: 15, endTime: 16, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },


    // { demandId: 24, day: 11, startTime: 13, endTime: 14, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 25, day: 11, startTime: 14, endTime: 15, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 26, day: 11, startTime: 15, endTime: 16, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },


    // { demandId: 27, day: 11, startTime: 13, endTime: 14, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 28, day: 11, startTime: 14, endTime: 15, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 29, day: 11, startTime: 15, endTime: 16, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },


    // { demandId: 30, day: 11, startTime: 16, endTime: 17, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 31, day: 11, startTime: 17, endTime: 18, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },

    // { demandId: 32, day: 11, startTime: 16, endTime: 17, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 33, day: 11, startTime: 17, endTime: 18, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 34, day: 11, startTime: 16, endTime: 17, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 35, day: 11, startTime: 17, endTime: 18, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },






    // { demandId: 1, day: 12, startTime: 6, endTime: 7, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 2, day: 12, startTime: 7, endTime: 8, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 3, day: 12, startTime: 8, endTime: 9, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 4, day: 12, startTime: 9, endTime: 10, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },

    // { demandId: 5, day: 12, startTime: 6, endTime: 7, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 6, day: 12, startTime: 7, endTime: 8, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 7, day: 12, startTime: 8, endTime: 9, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 8, day: 12, startTime: 9, endTime: 10, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 9, day: 12, startTime: 6, endTime: 7, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 10, day: 12, startTime: 7, endTime: 8, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 11, day: 12, startTime: 8, endTime: 9, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 12, day: 12, startTime: 9, endTime: 10, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },


    // { demandId: 13, day: 12, startTime: 10, endTime: 11, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 14, day: 12, startTime: 11, endTime: 12, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 15, day: 12, startTime: 12, endTime: 13, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },


    // { demandId: 16, day: 12, startTime: 10, endTime: 11, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 17, day: 12, startTime: 11, endTime: 12, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 18, day: 12, startTime: 12, endTime: 13, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 19, day: 12, startTime: 10, endTime: 11, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 19, day: 12, startTime: 11, endTime: 12, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 20, day: 12, startTime: 12, endTime: 13, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },


    // { demandId: 21, day: 12, startTime: 13, endTime: 14, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 22, day: 12, startTime: 14, endTime: 15, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 23, day: 12, startTime: 15, endTime: 16, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },


    // { demandId: 24, day: 12, startTime: 13, endTime: 14, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 25, day: 12, startTime: 14, endTime: 15, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 26, day: 12, startTime: 15, endTime: 16, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },


    // { demandId: 27, day: 12, startTime: 13, endTime: 14, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 28, day: 12, startTime: 14, endTime: 15, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 29, day: 12, startTime: 15, endTime: 16, amount: 3, workAreaId: 3, alreadyAllocatedEmp: [] },


    // { demandId: 30, day: 12, startTime: 16, endTime: 17, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 31, day: 12, startTime: 17, endTime: 18, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },

    // { demandId: 32, day: 12, startTime: 16, endTime: 17, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 33, day: 12, startTime: 17, endTime: 18, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 34, day: 12, startTime: 16, endTime: 17, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 35, day: 12, startTime: 17, endTime: 18, amount: 4, workAreaId: 3, alreadyAllocatedEmp: [] },

    // { demandId: 1, day: 13, startTime: 6, endTime: 7, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 2, day: 13, startTime: 7, endTime: 8, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 3, day: 13, startTime: 8, endTime: 9, amount: 5, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 4, day: 13, startTime: 9, endTime: 10, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },

    // { demandId: 5, day: 13, startTime: 6, endTime: 7, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 6, day: 13, startTime: 7, endTime: 8, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 7, day: 13, startTime: 8, endTime: 9, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 8, day: 13, startTime: 9, endTime: 10, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 9, day: 13, startTime: 6, endTime: 7, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 10, day: 13, startTime: 7, endTime: 8, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 11, day: 13, startTime: 8, endTime: 9, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 12, day: 13, startTime: 9, endTime: 10, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },


    // { demandId: 13, day: 13, startTime: 10, endTime: 11, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 14, day: 13, startTime: 11, endTime: 12, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 15, day: 13, startTime: 12, endTime: 13, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },


    // { demandId: 16, day: 13, startTime: 10, endTime: 11, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 17, day: 13, startTime: 11, endTime: 12, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 18, day: 13, startTime: 12, endTime: 13, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 19, day: 13, startTime: 10, endTime: 11, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 19, day: 13, startTime: 11, endTime: 12, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 20, day: 13, startTime: 12, endTime: 13, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },


    // { demandId: 21, day: 13, startTime: 13, endTime: 14, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 22, day: 13, startTime: 14, endTime: 15, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 23, day: 13, startTime: 15, endTime: 16, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },


    // { demandId: 24, day: 13, startTime: 13, endTime: 14, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 25, day: 13, startTime: 14, endTime: 15, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 26, day: 13, startTime: 15, endTime: 16, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },


    // { demandId: 27, day: 13, startTime: 13, endTime: 14, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 28, day: 13, startTime: 14, endTime: 15, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 29, day: 13, startTime: 15, endTime: 16, amount: 3, workAreaId: 3, alreadyAllocatedEmp: [] },


    // { demandId: 30, day: 13, startTime: 16, endTime: 17, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 31, day: 13, startTime: 17, endTime: 18, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },

    // { demandId: 32, day: 13, startTime: 16, endTime: 17, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 33, day: 13, startTime: 17, endTime: 18, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 34, day: 13, startTime: 16, endTime: 17, amount: 4, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 35, day: 13, startTime: 17, endTime: 18, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },






    // { demandId: 1, day: 14, startTime: 6, endTime: 7, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 2, day: 14, startTime: 7, endTime: 8, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 3, day: 14, startTime: 8, endTime: 9, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 4, day: 14, startTime: 9, endTime: 10, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },

    // { demandId: 5, day: 14, startTime: 6, endTime: 7, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 6, day: 14, startTime: 7, endTime: 8, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 7, day: 14, startTime: 8, endTime: 9, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 8, day: 14, startTime: 9, endTime: 10, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 9, day: 14, startTime: 6, endTime: 7, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 10, day: 14, startTime: 7, endTime: 8, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 11, day: 14, startTime: 8, endTime: 9, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 12, day: 14, startTime: 9, endTime: 10, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },


    // { demandId: 13, day: 14, startTime: 10, endTime: 11, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 14, day: 14, startTime: 11, endTime: 12, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 15, day: 14, startTime: 12, endTime: 13, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },


    // { demandId: 16, day: 14, startTime: 10, endTime: 11, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 17, day: 14, startTime: 11, endTime: 12, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 18, day: 14, startTime: 12, endTime: 13, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 19, day: 14, startTime: 10, endTime: 11, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 19, day: 14, startTime: 11, endTime: 12, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 20, day: 14, startTime: 12, endTime: 13, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },


    // { demandId: 21, day: 14, startTime: 13, endTime: 14, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 22, day: 14, startTime: 14, endTime: 15, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 23, day: 14, startTime: 15, endTime: 16, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },


    // { demandId: 24, day: 14, startTime: 13, endTime: 14, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 25, day: 14, startTime: 14, endTime: 15, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 26, day: 14, startTime: 15, endTime: 16, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },


    // { demandId: 27, day: 14, startTime: 13, endTime: 14, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 28, day: 14, startTime: 14, endTime: 15, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 29, day: 14, startTime: 15, endTime: 16, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },


    // { demandId: 30, day: 14, startTime: 16, endTime: 17, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 31, day: 14, startTime: 17, endTime: 18, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },

    // { demandId: 32, day: 14, startTime: 16, endTime: 17, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 33, day: 14, startTime: 17, endTime: 18, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 34, day: 14, startTime: 16, endTime: 17, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 35, day: 14, startTime: 17, endTime: 18, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },

    // { demandId: 1, day: 15, startTime: 6, endTime: 7, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 2, day: 15, startTime: 7, endTime: 8, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 3, day: 15, startTime: 8, endTime: 9, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 4, day: 15, startTime: 9, endTime: 10, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },

    // { demandId: 5, day: 15, startTime: 6, endTime: 7, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 6, day: 15, startTime: 7, endTime: 8, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 7, day: 15, startTime: 8, endTime: 9, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 8, day: 15, startTime: 9, endTime: 10, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 9, day: 15, startTime: 6, endTime: 7, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 10, day: 15, startTime: 7, endTime: 8, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 11, day: 15, startTime: 8, endTime: 9, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 12, day: 15, startTime: 9, endTime: 10, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },


    // { demandId: 13, day: 15, startTime: 10, endTime: 11, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 14, day: 15, startTime: 11, endTime: 12, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 15, day: 15, startTime: 12, endTime: 13, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },


    // { demandId: 16, day: 15, startTime: 10, endTime: 11, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 17, day: 15, startTime: 11, endTime: 12, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 18, day: 15, startTime: 12, endTime: 13, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 19, day: 15, startTime: 10, endTime: 11, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 19, day: 15, startTime: 11, endTime: 12, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 20, day: 15, startTime: 12, endTime: 13, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },

    // { demandId: 21, day: 15, startTime: 13, endTime: 14, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 22, day: 15, startTime: 14, endTime: 15, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 23, day: 15, startTime: 15, endTime: 16, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },


    // { demandId: 24, day: 15, startTime: 13, endTime: 14, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 25, day: 15, startTime: 14, endTime: 15, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 26, day: 15, startTime: 15, endTime: 16, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },


    // { demandId: 27, day: 15, startTime: 13, endTime: 14, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 28, day: 15, startTime: 14, endTime: 15, amount: 3, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 29, day: 15, startTime: 15, endTime: 16, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },


    // { demandId: 30, day: 15, startTime: 16, endTime: 17, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 31, day: 15, startTime: 17, endTime: 18, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },

    // { demandId: 32, day: 15, startTime: 16, endTime: 17, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 33, day: 15, startTime: 17, endTime: 18, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 34, day: 15, startTime: 16, endTime: 17, amount: 4, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 35, day: 15, startTime: 17, endTime: 18, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },

    // { demandId: 1, day: 16, startTime: 6, endTime: 7, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 2, day: 16, startTime: 7, endTime: 8, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 3, day: 16, startTime: 8, endTime: 9, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 4, day: 16, startTime: 9, endTime: 10, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },

    // { demandId: 5, day: 16, startTime: 6, endTime: 7, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 6, day: 16, startTime: 7, endTime: 8, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 7, day: 16, startTime: 8, endTime: 9, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 8, day: 16, startTime: 9, endTime: 10, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 9, day: 16, startTime: 6, endTime: 7, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 10, day: 16, startTime: 7, endTime: 8, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 11, day: 16, startTime: 8, endTime: 9, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 12, day: 16, startTime: 9, endTime: 10, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },


    // { demandId: 13, day: 16, startTime: 10, endTime: 11, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 14, day: 16, startTime: 11, endTime: 12, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 15, day: 16, startTime: 12, endTime: 13, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },


    // { demandId: 16, day: 16, startTime: 10, endTime: 11, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 17, day: 16, startTime: 11, endTime: 12, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 18, day: 16, startTime: 12, endTime: 13, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 19, day: 16, startTime: 10, endTime: 11, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 19, day: 16, startTime: 11, endTime: 12, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 20, day: 16, startTime: 12, endTime: 13, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },


    // { demandId: 21, day: 16, startTime: 13, endTime: 14, amount: 5, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 22, day: 16, startTime: 14, endTime: 15, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 23, day: 16, startTime: 15, endTime: 16, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },


    // { demandId: 24, day: 16, startTime: 13, endTime: 14, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 25, day: 16, startTime: 14, endTime: 15, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 26, day: 16, startTime: 15, endTime: 16, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },


    // { demandId: 27, day: 16, startTime: 13, endTime: 14, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 28, day: 16, startTime: 14, endTime: 15, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 29, day: 16, startTime: 15, endTime: 16, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },


    // { demandId: 30, day: 16, startTime: 16, endTime: 17, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 31, day: 16, startTime: 17, endTime: 18, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },

    // { demandId: 32, day: 16, startTime: 16, endTime: 17, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 33, day: 16, startTime: 17, endTime: 18, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 34, day: 16, startTime: 16, endTime: 17, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 35, day: 16, startTime: 17, endTime: 18, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },






    // { demandId: 1, day: 17, startTime: 6, endTime: 7, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 2, day: 17, startTime: 7, endTime: 8, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 3, day: 17, startTime: 8, endTime: 9, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 4, day: 17, startTime: 9, endTime: 10, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },

    // { demandId: 5, day: 17, startTime: 6, endTime: 7, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 6, day: 17, startTime: 7, endTime: 8, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 7, day: 17, startTime: 8, endTime: 9, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 8, day: 17, startTime: 9, endTime: 10, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 9, day: 17, startTime: 6, endTime: 7, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 10, day: 17, startTime: 7, endTime: 8, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 11, day: 17, startTime: 8, endTime: 9, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 12, day: 17, startTime: 9, endTime: 10, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },


    // { demandId: 13, day: 17, startTime: 10, endTime: 11, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 14, day: 17, startTime: 11, endTime: 12, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 15, day: 17, startTime: 12, endTime: 13, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },


    // { demandId: 16, day: 17, startTime: 10, endTime: 11, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 17, day: 17, startTime: 11, endTime: 12, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 18, day: 17, startTime: 12, endTime: 13, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 19, day: 17, startTime: 10, endTime: 11, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 19, day: 17, startTime: 11, endTime: 12, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 20, day: 17, startTime: 12, endTime: 13, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },


    // { demandId: 21, day: 17, startTime: 13, endTime: 14, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 22, day: 17, startTime: 14, endTime: 15, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 23, day: 17, startTime: 15, endTime: 16, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },


    // { demandId: 24, day: 17, startTime: 13, endTime: 14, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 25, day: 17, startTime: 14, endTime: 15, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 26, day: 17, startTime: 15, endTime: 16, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },


    // { demandId: 27, day: 17, startTime: 13, endTime: 14, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 28, day: 17, startTime: 14, endTime: 15, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 29, day: 17, startTime: 15, endTime: 16, amount: 3, workAreaId: 3, alreadyAllocatedEmp: [] },


    // { demandId: 30, day: 17, startTime: 16, endTime: 17, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 31, day: 17, startTime: 17, endTime: 18, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },

    // { demandId: 32, day: 17, startTime: 16, endTime: 17, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 33, day: 17, startTime: 17, endTime: 18, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 34, day: 17, startTime: 16, endTime: 17, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 35, day: 17, startTime: 17, endTime: 18, amount: 4, workAreaId: 3, alreadyAllocatedEmp: [] },

    // { demandId: 1, day: 18, startTime: 6, endTime: 7, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 2, day: 18, startTime: 7, endTime: 8, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 3, day: 18, startTime: 8, endTime: 9, amount: 5, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 4, day: 18, startTime: 9, endTime: 10, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },

    // { demandId: 5, day: 18, startTime: 6, endTime: 7, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 6, day: 18, startTime: 7, endTime: 8, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 7, day: 18, startTime: 8, endTime: 9, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 8, day: 18, startTime: 9, endTime: 10, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 9, day: 18, startTime: 6, endTime: 7, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 10, day: 18, startTime: 7, endTime: 8, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 11, day: 18, startTime: 8, endTime: 9, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 12, day: 18, startTime: 9, endTime: 10, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },


    // { demandId: 13, day: 18, startTime: 10, endTime: 11, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 14, day: 18, startTime: 11, endTime: 12, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 15, day: 18, startTime: 12, endTime: 13, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },


    // { demandId: 16, day: 18, startTime: 10, endTime: 11, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 17, day: 18, startTime: 11, endTime: 12, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 18, day: 18, startTime: 12, endTime: 13, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 19, day: 18, startTime: 10, endTime: 11, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 19, day: 18, startTime: 11, endTime: 12, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 20, day: 18, startTime: 12, endTime: 13, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },


    // { demandId: 21, day: 18, startTime: 13, endTime: 14, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 22, day: 18, startTime: 14, endTime: 15, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 23, day: 18, startTime: 15, endTime: 16, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },


    // { demandId: 24, day: 18, startTime: 13, endTime: 14, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 25, day: 18, startTime: 14, endTime: 15, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 26, day: 18, startTime: 15, endTime: 16, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },


    // { demandId: 27, day: 18, startTime: 13, endTime: 14, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 28, day: 18, startTime: 14, endTime: 15, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 29, day: 18, startTime: 15, endTime: 16, amount: 3, workAreaId: 3, alreadyAllocatedEmp: [] },


    // { demandId: 30, day: 18, startTime: 16, endTime: 17, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 31, day: 18, startTime: 17, endTime: 18, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },

    // { demandId: 32, day: 18, startTime: 16, endTime: 17, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 33, day: 18, startTime: 17, endTime: 18, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 34, day: 18, startTime: 16, endTime: 17, amount: 4, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 35, day: 18, startTime: 17, endTime: 18, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },






    // { demandId: 1, day: 19, startTime: 6, endTime: 7, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 2, day: 19, startTime: 7, endTime: 8, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 3, day: 19, startTime: 8, endTime: 9, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 4, day: 19, startTime: 9, endTime: 10, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },

    // { demandId: 5, day: 19, startTime: 6, endTime: 7, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 6, day: 19, startTime: 7, endTime: 8, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 7, day: 19, startTime: 8, endTime: 9, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 8, day: 19, startTime: 9, endTime: 10, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 9, day: 19, startTime: 6, endTime: 7, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 10, day: 19, startTime: 7, endTime: 8, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 11, day: 19, startTime: 8, endTime: 9, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 12, day: 19, startTime: 9, endTime: 10, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },


    // { demandId: 13, day: 19, startTime: 10, endTime: 11, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 14, day: 19, startTime: 11, endTime: 12, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 15, day: 19, startTime: 12, endTime: 13, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },


    // { demandId: 16, day: 19, startTime: 10, endTime: 11, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 17, day: 19, startTime: 11, endTime: 12, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 18, day: 19, startTime: 12, endTime: 13, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 19, day: 19, startTime: 10, endTime: 11, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 19, day: 19, startTime: 11, endTime: 12, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 20, day: 19, startTime: 12, endTime: 13, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },


    // { demandId: 21, day: 19, startTime: 13, endTime: 14, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 22, day: 19, startTime: 14, endTime: 15, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 23, day: 19, startTime: 15, endTime: 16, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },


    // { demandId: 24, day: 19, startTime: 13, endTime: 14, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 25, day: 19, startTime: 14, endTime: 15, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 26, day: 19, startTime: 15, endTime: 16, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },


    // { demandId: 27, day: 19, startTime: 13, endTime: 14, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 28, day: 19, startTime: 14, endTime: 15, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 29, day: 19, startTime: 15, endTime: 16, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },


    // { demandId: 30, day: 19, startTime: 16, endTime: 17, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 31, day: 19, startTime: 17, endTime: 18, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },

    // { demandId: 32, day: 19, startTime: 16, endTime: 17, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 33, day: 19, startTime: 17, endTime: 18, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 34, day: 19, startTime: 16, endTime: 17, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 35, day: 19, startTime: 17, endTime: 18, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },

    // { demandId: 1, day: 20, startTime: 6, endTime: 7, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 2, day: 20, startTime: 7, endTime: 8, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 3, day: 20, startTime: 8, endTime: 9, amount: 1, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 4, day: 20, startTime: 9, endTime: 10, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },

    // { demandId: 5, day: 20, startTime: 6, endTime: 7, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 6, day: 20, startTime: 7, endTime: 8, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 7, day: 20, startTime: 8, endTime: 9, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 8, day: 20, startTime: 9, endTime: 10, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 9, day: 20, startTime: 6, endTime: 7, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 10, day: 20, startTime: 7, endTime: 8, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 11, day: 20, startTime: 8, endTime: 9, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 12, day: 20, startTime: 9, endTime: 10, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },


    // { demandId: 13, day: 20, startTime: 10, endTime: 11, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 14, day: 20, startTime: 11, endTime: 12, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 15, day: 20, startTime: 12, endTime: 13, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },


    // { demandId: 16, day: 20, startTime: 10, endTime: 11, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 17, day: 20, startTime: 11, endTime: 12, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 18, day: 20, startTime: 12, endTime: 13, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 19, day: 20, startTime: 10, endTime: 11, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 19, day: 20, startTime: 11, endTime: 12, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 20, day: 20, startTime: 12, endTime: 13, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },

    // { demandId: 21, day: 20, startTime: 13, endTime: 14, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 22, day: 20, startTime: 14, endTime: 15, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 23, day: 20, startTime: 15, endTime: 16, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },


    // { demandId: 24, day: 20, startTime: 13, endTime: 14, amount: 5, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 25, day: 20, startTime: 14, endTime: 15, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 26, day: 20, startTime: 15, endTime: 16, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },


    // { demandId: 27, day: 20, startTime: 13, endTime: 14, amount: 5, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 28, day: 20, startTime: 14, endTime: 15, amount: 3, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 29, day: 20, startTime: 15, endTime: 16, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },


    // { demandId: 30, day: 20, startTime: 16, endTime: 17, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    // { demandId: 31, day: 20, startTime: 17, endTime: 18, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },

    // { demandId: 32, day: 20, startTime: 16, endTime: 17, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    // { demandId: 33, day: 20, startTime: 17, endTime: 18, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    // { demandId: 34, day: 20, startTime: 16, endTime: 17, amount: 4, workAreaId: 3, alreadyAllocatedEmp: [] },
    // { demandId: 35, day: 20, startTime: 17, endTime: 18, amount: 1, workAreaId: 3, alreadyAllocatedEmp: [] },





]


export const absence: absence[] = [
    // { empId: 1, day: 1, startTime: 7, endTime: 8 },
    // { empId: 2, day: 1, startTime: 9, endTime: 11 },
    // { empId: 3, day: 1, startTime: 6, endTime: 8 },
    // { empId: 4, day: 1, startTime: 10, endTime: 12 },
    // { empId: 5, day: 1, startTime: 14, endTime: 15 },
    // { empId: 6, day: 1, startTime: 10, endTime: 12 },
    // { empId: 7, day: 1, startTime: 12, endTime: 14 },
    { empId: 8, day: 1, startTime: 11, endTime: 12 },
    { empId: 9, day: 1, startTime: 12, endTime: 14 },
    { empId: 10, day: 1, startTime: 14, endTime: 16 },
    { empId: 13, day: 1, startTime: 13, endTime: 14 },
    { empId: 15, day: 1, startTime: 13, endTime: 15 },
    { empId: 16, day: 1, startTime: 14, endTime: 15 },
    { empId: 17, day: 1, startTime: 14, endTime: 16 },
    { empId: 18, day: 1, startTime: 14, endTime: 15 },
    { empId: 19, day: 1, startTime: 15, endTime: 17 },
    { empId: 22, day: 1, startTime: 15, endTime: 17 },
    { empId: 21, day: 1, startTime: 16, endTime: 18 },



    { empId: 1, day: 2, startTime: 6, endTime: 8 },
    { empId: 2, day: 2, startTime: 9, endTime: 11 },
    { empId: 3, day: 2, startTime: 6, endTime: 8 },
    { empId: 4, day: 2, startTime: 11, endTime: 13 },
    { empId: 5, day: 2, startTime: 12, endTime: 14 },
    { empId: 6, day: 2, startTime: 10, endTime: 12 },
    { empId: 7, day: 2, startTime: 14, endTime: 15 },
    // { empId: 8, day: 2, startTime: 11, endTime: 12 },
    // { empId: 9, day: 2, startTime: 12, endTime: 14 },
    // { empId: 10, day: 2, startTime: 14, endTime: 16 },
    // { empId: 13, day: 2, startTime: 13, endTime: 14 },
    // { empId: 15, day: 2, startTime: 13, endTime: 15 },
    // { empId: 16, day: 2, startTime: 14, endTime: 15 },
    // { empId: 17, day: 2, startTime: 14, endTime: 16 },
    // { empId: 18, day: 2, startTime: 14, endTime: 15 },
    // { empId: 19, day: 2, startTime: 15, endTime: 17 },
    { empId: 22, day: 2, startTime: 15, endTime: 17 },
    { empId: 21, day: 2, startTime: 16, endTime: 18 },


    { empId: 1, day: 3, startTime: 7, endTime: 8 },
    { empId: 2, day: 3, startTime: 9, endTime: 11 },
    { empId: 3, day: 3, startTime: 6, endTime: 8 },
    { empId: 4, day: 3, startTime: 12, endTime: 14 },
    // { empId: 5, day: 3, startTime: 10, endTime: 12 },
    // { empId: 6, day: 3, startTime: 10, endTime: 12 },
    // { empId: 7, day: 3, startTime: 9, endTime: 11 },
    // { empId: 8, day: 3, startTime: 11, endTime: 12 },
    // { empId: 9, day: 3, startTime: 12, endTime: 14 },
    // { empId: 10, day: 3, startTime: 15, endTime: 17 },
    { empId: 13, day: 3, startTime: 13, endTime: 14 },
    { empId: 15, day: 3, startTime: 13, endTime: 15 },
    { empId: 16, day: 3, startTime: 14, endTime: 15 },
    { empId: 17, day: 3, startTime: 14, endTime: 16 },
    { empId: 18, day: 3, startTime: 14, endTime: 15 },
    { empId: 19, day: 3, startTime: 15, endTime: 17 },
    { empId: 22, day: 3, startTime: 15, endTime: 17 },
    { empId: 21, day: 3, startTime: 16, endTime: 18 },




    { empId: 1, day: 4, startTime: 7, endTime: 8 },
    { empId: 2, day: 4, startTime: 9, endTime: 11 },
    { empId: 3, day: 4, startTime: 6, endTime: 8 },
    { empId: 4, day: 4, startTime: 12, endTime: 14 },
    // { empId: 5, day: 4, startTime: 10, endTime: 12 },
    // { empId: 6, day: 4, startTime: 10, endTime: 12 },
    // { empId: 7, day: 4, startTime: 9, endTime: 11 },
    // { empId: 8, day: 4, startTime: 11, endTime: 12 },
    // { empId: 9, day: 4, startTime: 12, endTime: 14 },
    // { empId: 10, day: 4, startTime: 15, endTime: 17 },
    // { empId: 13, day: 4, startTime: 13, endTime: 14 },
    // { empId: 15, day: 4, startTime: 13, endTime: 15 },
    // { empId: 16, day: 4, startTime: 14, endTime: 15 },
    // { empId: 17, day: 4, startTime: 14, endTime: 16 },
    // { empId: 18, day: 4, startTime: 14, endTime: 15 },
    // { empId: 19, day: 4, startTime: 15, endTime: 17 },
    // { empId: 22, day: 4, startTime: 15, endTime: 17 },
    // { empId: 21, day: 4, startTime: 16, endTime: 18 },


    { empId: 1, day: 5, startTime: 7, endTime: 8 },
    { empId: 2, day: 5, startTime: 9, endTime: 11 },
    { empId: 3, day: 5, startTime: 6, endTime: 8 },
    { empId: 4, day: 5, startTime: 10, endTime: 12 },
    // { empId: 5, day: 5, startTime: 14, endTime: 15 },
    // { empId: 6, day: 5, startTime: 10, endTime: 12 },
    // { empId: 7, day: 5, startTime: 12, endTime: 14 },
    // { empId: 8, day: 5, startTime: 11, endTime: 12 },
    // { empId: 9, day: 5, startTime: 12, endTime: 14 },
    { empId: 10, day: 5, startTime: 14, endTime: 16 },
    { empId: 13, day: 5, startTime: 13, endTime: 14 },
    { empId: 15, day: 5, startTime: 13, endTime: 15 },
    { empId: 16, day: 5, startTime: 14, endTime: 15 },
    { empId: 17, day: 5, startTime: 14, endTime: 16 },
    { empId: 18, day: 5, startTime: 14, endTime: 15 },
    { empId: 19, day: 5, startTime: 15, endTime: 17 },
    { empId: 22, day: 5, startTime: 15, endTime: 17 },
    { empId: 21, day: 5, startTime: 16, endTime: 18 },





    { empId: 1, day: 6, startTime: 7, endTime: 8 },
    { empId: 2, day: 6, startTime: 9, endTime: 11 },
    { empId: 3, day: 6, startTime: 6, endTime: 8 },
    { empId: 4, day: 6, startTime: 10, endTime: 12 },
    { empId: 5, day: 6, startTime: 14, endTime: 15 },
    { empId: 6, day: 6, startTime: 10, endTime: 12 },
    { empId: 7, day: 6, startTime: 12, endTime: 14 },
    { empId: 8, day: 6, startTime: 11, endTime: 12 },
    { empId: 9, day: 6, startTime: 12, endTime: 14 },
    { empId: 10, day: 6, startTime: 14, endTime: 16 },
    { empId: 13, day: 6, startTime: 13, endTime: 14 },
    { empId: 15, day: 6, startTime: 13, endTime: 15 },
    { empId: 16, day: 6, startTime: 14, endTime: 15 },
    { empId: 17, day: 6, startTime: 14, endTime: 16 },
    { empId: 18, day: 6, startTime: 14, endTime: 15 },
    { empId: 19, day: 6, startTime: 15, endTime: 17 },
    { empId: 22, day: 6, startTime: 15, endTime: 17 },
    { empId: 21, day: 6, startTime: 16, endTime: 18 },



    { empId: 1, day: 7, startTime: 6, endTime: 8 },
    { empId: 2, day: 7, startTime: 9, endTime: 11 },
    { empId: 3, day: 7, startTime: 6, endTime: 8 },
    { empId: 4, day: 7, startTime: 11, endTime: 13 },
    { empId: 5, day: 7, startTime: 12, endTime: 14 },
    { empId: 6, day: 7, startTime: 10, endTime: 12 },
    { empId: 7, day: 7, startTime: 14, endTime: 15 },
    { empId: 8, day: 7, startTime: 11, endTime: 12 },
    { empId: 9, day: 7, startTime: 12, endTime: 14 },
    { empId: 10, day: 7, startTime: 14, endTime: 16 },
    { empId: 13, day: 7, startTime: 13, endTime: 14 },
    { empId: 15, day: 7, startTime: 13, endTime: 15 },
    { empId: 16, day: 7, startTime: 14, endTime: 15 },
    { empId: 17, day: 7, startTime: 14, endTime: 16 },
    { empId: 18, day: 7, startTime: 14, endTime: 15 },
    { empId: 19, day: 7, startTime: 15, endTime: 17 },
    { empId: 22, day: 7, startTime: 15, endTime: 17 },
    { empId: 21, day: 7, startTime: 16, endTime: 18 },


    { empId: 1, day: 8, startTime: 7, endTime: 8 },
    { empId: 2, day: 8, startTime: 9, endTime: 11 },
    { empId: 3, day: 8, startTime: 6, endTime: 8 },
    { empId: 4, day: 8, startTime: 12, endTime: 14 },
    { empId: 5, day: 8, startTime: 10, endTime: 12 },
    { empId: 6, day: 8, startTime: 10, endTime: 12 },
    { empId: 7, day: 8, startTime: 9, endTime: 11 },
    { empId: 8, day: 8, startTime: 11, endTime: 12 },
    { empId: 9, day: 8, startTime: 12, endTime: 14 },
    { empId: 10, day: 8, startTime: 15, endTime: 17 },
    { empId: 13, day: 8, startTime: 13, endTime: 14 },
    { empId: 15, day: 8, startTime: 13, endTime: 15 },
    { empId: 16, day: 8, startTime: 14, endTime: 15 },
    { empId: 17, day: 8, startTime: 14, endTime: 16 },
    { empId: 18, day: 8, startTime: 14, endTime: 15 },
    { empId: 19, day: 8, startTime: 15, endTime: 17 },
    { empId: 22, day: 8, startTime: 15, endTime: 17 },
    { empId: 21, day: 8, startTime: 16, endTime: 18 },




    { empId: 1, day: 9, startTime: 7, endTime: 8 },
    { empId: 2, day: 9, startTime: 9, endTime: 11 },
    { empId: 3, day: 9, startTime: 6, endTime: 8 },
    { empId: 4, day: 9, startTime: 12, endTime: 14 },
    { empId: 5, day: 9, startTime: 10, endTime: 12 },
    { empId: 6, day: 9, startTime: 10, endTime: 12 },
    { empId: 7, day: 9, startTime: 9, endTime: 11 },
    { empId: 8, day: 9, startTime: 11, endTime: 12 },
    { empId: 9, day: 9, startTime: 12, endTime: 14 },
    { empId: 10, day: 9, startTime: 15, endTime: 17 },
    { empId: 13, day: 9, startTime: 13, endTime: 14 },
    { empId: 15, day: 9, startTime: 13, endTime: 15 },
    { empId: 16, day: 9, startTime: 14, endTime: 15 },
    { empId: 17, day: 9, startTime: 14, endTime: 16 },
    { empId: 18, day: 9, startTime: 14, endTime: 15 },
    { empId: 19, day: 9, startTime: 15, endTime: 17 },
    { empId: 22, day: 9, startTime: 15, endTime: 17 },
    { empId: 21, day: 9, startTime: 16, endTime: 18 },


    { empId: 1, day: 10, startTime: 7, endTime: 8 },
    { empId: 2, day: 10, startTime: 9, endTime: 11 },
    { empId: 3, day: 10, startTime: 6, endTime: 8 },
    { empId: 4, day: 10, startTime: 10, endTime: 12 },
    { empId: 5, day: 10, startTime: 14, endTime: 15 },
    { empId: 6, day: 10, startTime: 10, endTime: 12 },
    { empId: 7, day: 10, startTime: 12, endTime: 14 },
    { empId: 8, day: 10, startTime: 11, endTime: 12 },
    { empId: 9, day: 10, startTime: 12, endTime: 14 },
    { empId: 10, day: 10, startTime: 14, endTime: 16 },
    { empId: 13, day: 10, startTime: 13, endTime: 14 },
    { empId: 15, day: 10, startTime: 13, endTime: 15 },
    { empId: 16, day: 10, startTime: 14, endTime: 15 },
    { empId: 17, day: 10, startTime: 14, endTime: 16 },
    { empId: 18, day: 10, startTime: 14, endTime: 15 },
    { empId: 19, day: 10, startTime: 15, endTime: 17 },
    { empId: 22, day: 10, startTime: 15, endTime: 17 },
    { empId: 21, day: 10, startTime: 16, endTime: 18 },










    { empId: 1, day: 11, startTime: 7, endTime: 8 },
    { empId: 2, day: 11, startTime: 9, endTime: 11 },
    { empId: 3, day: 11, startTime: 6, endTime: 8 },
    { empId: 4, day: 11, startTime: 10, endTime: 12 },
    { empId: 5, day: 11, startTime: 14, endTime: 15 },
    { empId: 6, day: 11, startTime: 10, endTime: 12 },
    { empId: 7, day: 11, startTime: 12, endTime: 14 },
    { empId: 8, day: 11, startTime: 11, endTime: 12 },
    { empId: 9, day: 11, startTime: 12, endTime: 14 },
    { empId: 10, day: 11, startTime: 14, endTime: 16 },
    { empId: 13, day: 11, startTime: 13, endTime: 14 },
    { empId: 15, day: 11, startTime: 13, endTime: 15 },
    { empId: 16, day: 11, startTime: 14, endTime: 15 },
    { empId: 17, day: 11, startTime: 14, endTime: 16 },
    { empId: 18, day: 11, startTime: 14, endTime: 15 },
    { empId: 19, day: 11, startTime: 15, endTime: 17 },
    { empId: 22, day: 11, startTime: 15, endTime: 17 },
    { empId: 21, day: 11, startTime: 16, endTime: 18 },



    { empId: 1, day: 12, startTime: 6, endTime: 8 },
    { empId: 2, day: 12, startTime: 9, endTime: 11 },
    { empId: 3, day: 12, startTime: 6, endTime: 8 },
    { empId: 4, day: 12, startTime: 11, endTime: 13 },
    { empId: 5, day: 12, startTime: 12, endTime: 14 },
    { empId: 6, day: 12, startTime: 10, endTime: 12 },
    { empId: 7, day: 12, startTime: 14, endTime: 15 },
    { empId: 8, day: 12, startTime: 11, endTime: 12 },
    { empId: 9, day: 12, startTime: 12, endTime: 14 },
    { empId: 10, day: 12, startTime: 14, endTime: 16 },
    { empId: 13, day: 12, startTime: 13, endTime: 14 },
    { empId: 15, day: 12, startTime: 13, endTime: 15 },
    { empId: 16, day: 12, startTime: 14, endTime: 15 },
    { empId: 17, day: 12, startTime: 14, endTime: 16 },
    { empId: 18, day: 12, startTime: 14, endTime: 15 },
    { empId: 19, day: 12, startTime: 15, endTime: 17 },
    { empId: 22, day: 12, startTime: 15, endTime: 17 },
    { empId: 21, day: 12, startTime: 16, endTime: 18 },


    { empId: 1, day: 13, startTime: 7, endTime: 8 },
    { empId: 2, day: 13, startTime: 9, endTime: 11 },
    { empId: 3, day: 13, startTime: 6, endTime: 8 },
    { empId: 4, day: 13, startTime: 12, endTime: 14 },
    { empId: 5, day: 13, startTime: 10, endTime: 12 },
    { empId: 6, day: 13, startTime: 10, endTime: 12 },
    { empId: 7, day: 13, startTime: 9, endTime: 11 },
    { empId: 8, day: 13, startTime: 11, endTime: 12 },
    { empId: 9, day: 13, startTime: 12, endTime: 14 },
    { empId: 10, day: 13, startTime: 15, endTime: 17 },
    { empId: 13, day: 13, startTime: 13, endTime: 14 },
    { empId: 15, day: 13, startTime: 13, endTime: 15 },
    { empId: 16, day: 13, startTime: 14, endTime: 15 },
    { empId: 17, day: 13, startTime: 14, endTime: 16 },
    { empId: 18, day: 13, startTime: 14, endTime: 15 },
    { empId: 19, day: 13, startTime: 15, endTime: 17 },
    { empId: 22, day: 13, startTime: 15, endTime: 17 },
    { empId: 21, day: 13, startTime: 16, endTime: 18 },




    { empId: 1, day: 14, startTime: 7, endTime: 8 },
    { empId: 2, day: 14, startTime: 9, endTime: 11 },
    { empId: 3, day: 14, startTime: 6, endTime: 8 },
    { empId: 4, day: 14, startTime: 12, endTime: 14 },
    { empId: 5, day: 14, startTime: 10, endTime: 12 },
    { empId: 6, day: 14, startTime: 10, endTime: 12 },
    { empId: 7, day: 14, startTime: 9, endTime: 11 },
    { empId: 8, day: 14, startTime: 11, endTime: 12 },
    { empId: 9, day: 14, startTime: 12, endTime: 14 },
    { empId: 10, day: 14, startTime: 15, endTime: 17 },
    { empId: 13, day: 14, startTime: 13, endTime: 14 },
    { empId: 15, day: 14, startTime: 13, endTime: 15 },
    { empId: 16, day: 14, startTime: 14, endTime: 15 },
    { empId: 17, day: 14, startTime: 14, endTime: 16 },
    { empId: 18, day: 14, startTime: 14, endTime: 15 },
    { empId: 19, day: 14, startTime: 15, endTime: 17 },
    { empId: 22, day: 14, startTime: 15, endTime: 17 },
    { empId: 21, day: 14, startTime: 16, endTime: 18 },


    { empId: 1, day: 15, startTime: 7, endTime: 8 },
    { empId: 2, day: 15, startTime: 9, endTime: 11 },
    { empId: 3, day: 15, startTime: 6, endTime: 8 },
    { empId: 4, day: 15, startTime: 10, endTime: 12 },
    { empId: 5, day: 15, startTime: 14, endTime: 15 },
    { empId: 6, day: 15, startTime: 10, endTime: 12 },
    { empId: 7, day: 15, startTime: 12, endTime: 14 },
    { empId: 8, day: 15, startTime: 11, endTime: 12 },
    { empId: 9, day: 15, startTime: 12, endTime: 14 },
    { empId: 10, day: 15, startTime: 14, endTime: 16 },
    { empId: 13, day: 15, startTime: 13, endTime: 14 },
    { empId: 15, day: 15, startTime: 13, endTime: 15 },
    { empId: 16, day: 15, startTime: 14, endTime: 15 },
    { empId: 17, day: 15, startTime: 14, endTime: 16 },
    { empId: 18, day: 15, startTime: 14, endTime: 15 },
    { empId: 19, day: 15, startTime: 15, endTime: 17 },
    { empId: 22, day: 15, startTime: 15, endTime: 17 },
    { empId: 21, day: 15, startTime: 16, endTime: 18 },





    { empId: 1, day: 16, startTime: 7, endTime: 8 },
    { empId: 2, day: 16, startTime: 9, endTime: 11 },
    { empId: 3, day: 16, startTime: 6, endTime: 8 },
    { empId: 4, day: 16, startTime: 10, endTime: 12 },
    { empId: 5, day: 16, startTime: 14, endTime: 15 },
    { empId: 6, day: 16, startTime: 10, endTime: 12 },
    { empId: 7, day: 16, startTime: 12, endTime: 14 },
    { empId: 8, day: 16, startTime: 11, endTime: 12 },
    { empId: 9, day: 16, startTime: 12, endTime: 14 },
    { empId: 10, day: 16, startTime: 14, endTime: 16 },
    { empId: 13, day: 16, startTime: 13, endTime: 14 },
    { empId: 15, day: 16, startTime: 13, endTime: 15 },
    { empId: 16, day: 16, startTime: 14, endTime: 15 },
    { empId: 17, day: 16, startTime: 14, endTime: 16 },
    { empId: 18, day: 16, startTime: 14, endTime: 15 },
    { empId: 19, day: 16, startTime: 15, endTime: 17 },
    { empId: 22, day: 16, startTime: 15, endTime: 17 },
    { empId: 21, day: 16, startTime: 16, endTime: 18 },



    { empId: 1, day: 17, startTime: 6, endTime: 8 },
    { empId: 2, day: 17, startTime: 9, endTime: 11 },
    { empId: 3, day: 17, startTime: 6, endTime: 8 },
    { empId: 4, day: 17, startTime: 11, endTime: 13 },
    { empId: 5, day: 17, startTime: 12, endTime: 14 },
    { empId: 6, day: 17, startTime: 10, endTime: 12 },
    { empId: 7, day: 17, startTime: 14, endTime: 15 },
    { empId: 8, day: 17, startTime: 11, endTime: 12 },
    { empId: 9, day: 17, startTime: 12, endTime: 14 },
    { empId: 10, day: 17, startTime: 14, endTime: 16 },
    { empId: 13, day: 17, startTime: 13, endTime: 14 },
    { empId: 15, day: 17, startTime: 13, endTime: 15 },
    { empId: 16, day: 17, startTime: 14, endTime: 15 },
    { empId: 17, day: 17, startTime: 14, endTime: 16 },
    { empId: 18, day: 17, startTime: 14, endTime: 15 },
    { empId: 19, day: 17, startTime: 15, endTime: 17 },
    { empId: 22, day: 17, startTime: 15, endTime: 17 },
    { empId: 21, day: 17, startTime: 16, endTime: 18 },


    { empId: 1, day: 18, startTime: 7, endTime: 8 },
    { empId: 2, day: 18, startTime: 9, endTime: 11 },
    { empId: 3, day: 18, startTime: 6, endTime: 8 },
    { empId: 4, day: 18, startTime: 12, endTime: 14 },
    { empId: 5, day: 18, startTime: 10, endTime: 12 },
    { empId: 6, day: 18, startTime: 10, endTime: 12 },
    { empId: 7, day: 18, startTime: 9, endTime: 11 },
    { empId: 8, day: 18, startTime: 11, endTime: 12 },
    { empId: 9, day: 18, startTime: 12, endTime: 14 },
    { empId: 10, day: 18, startTime: 15, endTime: 17 },
    { empId: 13, day: 18, startTime: 13, endTime: 14 },
    { empId: 15, day: 18, startTime: 13, endTime: 15 },
    { empId: 16, day: 18, startTime: 14, endTime: 15 },
    { empId: 17, day: 18, startTime: 14, endTime: 16 },
    { empId: 18, day: 18, startTime: 14, endTime: 15 },
    { empId: 19, day: 18, startTime: 15, endTime: 17 },
    { empId: 22, day: 18, startTime: 15, endTime: 17 },
    { empId: 21, day: 18, startTime: 16, endTime: 18 },




    { empId: 1, day: 19, startTime: 7, endTime: 8 },
    { empId: 2, day: 19, startTime: 9, endTime: 11 },
    { empId: 3, day: 19, startTime: 6, endTime: 8 },
    { empId: 4, day: 19, startTime: 12, endTime: 14 },
    { empId: 5, day: 19, startTime: 10, endTime: 12 },
    { empId: 6, day: 19, startTime: 10, endTime: 12 },
    { empId: 7, day: 19, startTime: 9, endTime: 11 },
    { empId: 8, day: 19, startTime: 11, endTime: 12 },
    { empId: 9, day: 19, startTime: 12, endTime: 14 },
    { empId: 10, day: 19, startTime: 15, endTime: 17 },
    { empId: 13, day: 19, startTime: 13, endTime: 14 },
    { empId: 15, day: 19, startTime: 13, endTime: 15 },
    { empId: 16, day: 19, startTime: 14, endTime: 15 },
    { empId: 17, day: 19, startTime: 14, endTime: 16 },
    { empId: 18, day: 19, startTime: 14, endTime: 15 },
    { empId: 19, day: 19, startTime: 15, endTime: 17 },
    { empId: 22, day: 19, startTime: 15, endTime: 17 },
    { empId: 21, day: 19, startTime: 16, endTime: 18 },


    { empId: 1, day: 20, startTime: 7, endTime: 8 },
    { empId: 2, day: 20, startTime: 9, endTime: 11 },
    { empId: 3, day: 20, startTime: 6, endTime: 8 },
    { empId: 4, day: 20, startTime: 10, endTime: 12 },
    { empId: 5, day: 20, startTime: 14, endTime: 15 },
    { empId: 6, day: 20, startTime: 10, endTime: 12 },
    { empId: 7, day: 20, startTime: 12, endTime: 14 },
    { empId: 8, day: 20, startTime: 11, endTime: 12 },
    { empId: 9, day: 20, startTime: 12, endTime: 14 },
    { empId: 10, day: 20, startTime: 14, endTime: 16 },
    { empId: 13, day: 20, startTime: 13, endTime: 14 },
    { empId: 15, day: 20, startTime: 13, endTime: 15 },
    { empId: 16, day: 20, startTime: 14, endTime: 15 },
    { empId: 17, day: 20, startTime: 14, endTime: 16 },
    { empId: 18, day: 20, startTime: 14, endTime: 15 },
    { empId: 19, day: 20, startTime: 15, endTime: 17 },
    { empId: 22, day: 20, startTime: 15, endTime: 17 },
    { empId: 21, day: 20, startTime: 16, endTime: 18 },
]

export const wish: wish[] = [
    { empId: 1, day: 1, startTime: 10, endTime: 11, wantsToWork: false },
    { empId: 1, day: 1, startTime: 6, endTime: 7, wantsToWork: true },
    { empId: 2, day: 1, startTime: 6, endTime: 8, wantsToWork: false },
    { empId: 3, day: 1, startTime: 9, endTime: 11, wantsToWork: false },
    // { empId: 4, day: 1, startTime: 12, endTime: 13, wantsToWork: true },
    // { empId: 5, day: 1, startTime: 13, endTime: 15, wantsToWork: false },
    // { empId: 6, day: 1, startTime: 13, endTime: 15, wantsToWork: false },
    // { empId: 7, day: 1, startTime: 14, endTime: 16, wantsToWork: false },
    // { empId: 8, day: 1, startTime: 9, endTime: 10, wantsToWork: true },
    // { empId: 9, day: 1, startTime: 11, endTime: 12, wantsToWork: true },
    // { empId: 10, day: 1, startTime: 15, endTime: 17, wantsToWork: true },
    { empId: 13, day: 1, startTime: 11, endTime: 13, wantsToWork: true },
    { empId: 15, day: 1, startTime: 10, endTime: 13, wantsToWork: true },
    { empId: 16, day: 1, startTime: 10, endTime: 14, wantsToWork: true },
    { empId: 17, day: 1, startTime: 9, endTime: 14, wantsToWork: false },
    { empId: 18, day: 1, startTime: 15, endTime: 18, wantsToWork: false },
    { empId: 19, day: 1, startTime: 12, endTime: 15, wantsToWork: false },
    { empId: 22, day: 1, startTime: 12, endTime: 15, wantsToWork: false },
    { empId: 21, day: 1, startTime: 10, endTime: 17, wantsToWork: false },



    // { empId: 1, day: 2, startTime: 13, endTime: 15, wantsToWork: false },
    // { empId: 1, day: 2, startTime: 10, endTime: 12, wantsToWork: true },
    // { empId: 2, day: 2, startTime: 6, endTime: 9, wantsToWork: false },
    // { empId: 3, day: 2, startTime: 9, endTime: 14, wantsToWork: false },
    // { empId: 4, day: 2, startTime: 15, endTime: 17, wantsToWork: false },
    // { empId: 5, day: 2, startTime: 14, endTime: 15, wantsToWork: true },
    // { empId: 6, day: 2, startTime: 13, endTime: 15, wantsToWork: false },
    { empId: 7, day: 2, startTime: 9, endTime: 11, wantsToWork: false },
    { empId: 8, day: 2, startTime: 9, endTime: 10, wantsToWork: true },
    { empId: 9, day: 2, startTime: 11, endTime: 12, wantsToWork: true },
    { empId: 10, day: 2, startTime: 12, endTime: 14, wantsToWork: false },
    { empId: 13, day: 2, startTime: 11, endTime: 13, wantsToWork: true },
    { empId: 15, day: 2, startTime: 10, endTime: 13, wantsToWork: true },
    { empId: 16, day: 2, startTime: 10, endTime: 14, wantsToWork: true },
    { empId: 17, day: 2, startTime: 9, endTime: 14, wantsToWork: false },
    { empId: 18, day: 2, startTime: 15, endTime: 18, wantsToWork: false },
    { empId: 19, day: 2, startTime: 12, endTime: 15, wantsToWork: false },
    { empId: 22, day: 2, startTime: 12, endTime: 15, wantsToWork: false },
    { empId: 21, day: 2, startTime: 10, endTime: 17, wantsToWork: false },

    { empId: 1, day: 3, startTime: 10, endTime: 11, wantsToWork: false },
    { empId: 1, day: 3, startTime: 6, endTime: 7, wantsToWork: true },
    { empId: 2, day: 3, startTime: 6, endTime: 9, wantsToWork: false },
    { empId: 3, day: 3, startTime: 11, endTime: 13, wantsToWork: true },
    { empId: 4, day: 3, startTime: 13, endTime: 14, wantsToWork: false },
    { empId: 5, day: 3, startTime: 9, endTime: 11, wantsToWork: false },
    { empId: 6, day: 3, startTime: 13, endTime: 15, wantsToWork: false },
    { empId: 8, day: 3, startTime: 9, endTime: 10, wantsToWork: true },
    { empId: 9, day: 3, startTime: 11, endTime: 12, wantsToWork: true },
    { empId: 10, day: 3, startTime: 11, endTime: 13, wantsToWork: false },
    { empId: 13, day: 3, startTime: 11, endTime: 13, wantsToWork: true },
    { empId: 15, day: 3, startTime: 10, endTime: 13, wantsToWork: true },
    // { empId: 16, day: 3, startTime: 10, endTime: 14, wantsToWork: true },
    // { empId: 17, day: 3, startTime: 9, endTime: 14, wantsToWork: false },
    // { empId: 18, day: 3, startTime: 15, endTime: 18, wantsToWork: false },
    // { empId: 19, day: 3, startTime: 12, endTime: 15, wantsToWork: false },
    // { empId: 22, day: 3, startTime: 12, endTime: 15, wantsToWork: false },
    { empId: 21, day: 3, startTime: 10, endTime: 17, wantsToWork: false },




    { empId: 1, day: 4, startTime: 13, endTime: 15, wantsToWork: false },
    { empId: 1, day: 4, startTime: 10, endTime: 12, wantsToWork: true },
    { empId: 2, day: 4, startTime: 6, endTime: 9, wantsToWork: false },
    { empId: 3, day: 4, startTime: 9, endTime: 14, wantsToWork: false },
    { empId: 4, day: 4, startTime: 15, endTime: 17, wantsToWork: false },
    { empId: 5, day: 4, startTime: 14, endTime: 15, wantsToWork: true },
    { empId: 6, day: 4, startTime: 13, endTime: 15, wantsToWork: false },
    { empId: 7, day: 4, startTime: 9, endTime: 11, wantsToWork: false },
    { empId: 8, day: 4, startTime: 9, endTime: 10, wantsToWork: true },
    // { empId: 9, day: 4, startTime: 11, endTime: 12, wantsToWork: true },
    // { empId: 10, day: 4, startTime: 12, endTime: 14, wantsToWork: false },
    // { empId: 13, day: 4, startTime: 11, endTime: 13, wantsToWork: true },
    // { empId: 15, day: 4, startTime: 10, endTime: 13, wantsToWork: true },
    // { empId: 16, day: 4, startTime: 10, endTime: 14, wantsToWork: true },
    // { empId: 17, day: 4, startTime: 9, endTime: 14, wantsToWork: false },
    // { empId: 18, day: 4, startTime: 15, endTime: 18, wantsToWork: false },
    { empId: 19, day: 4, startTime: 12, endTime: 15, wantsToWork: false },
    { empId: 22, day: 4, startTime: 12, endTime: 15, wantsToWork: false },
    { empId: 21, day: 4, startTime: 10, endTime: 17, wantsToWork: false },

    { empId: 1, day: 5, startTime: 10, endTime: 11, wantsToWork: false },
    { empId: 1, day: 5, startTime: 6, endTime: 7, wantsToWork: true },
    { empId: 2, day: 5, startTime: 6, endTime: 9, wantsToWork: false },
    { empId: 3, day: 5, startTime: 11, endTime: 13, wantsToWork: true },
    { empId: 4, day: 5, startTime: 13, endTime: 14, wantsToWork: false },
    { empId: 5, day: 5, startTime: 9, endTime: 11, wantsToWork: false },
    { empId: 6, day: 5, startTime: 13, endTime: 15, wantsToWork: false },
    { empId: 8, day: 5, startTime: 9, endTime: 10, wantsToWork: true },
    { empId: 9, day: 5, startTime: 11, endTime: 12, wantsToWork: true },
    { empId: 10, day: 5, startTime: 11, endTime: 13, wantsToWork: false },
    { empId: 13, day: 5, startTime: 11, endTime: 13, wantsToWork: true },
    { empId: 15, day: 5, startTime: 10, endTime: 13, wantsToWork: true },
    { empId: 16, day: 5, startTime: 10, endTime: 14, wantsToWork: true },
    { empId: 17, day: 5, startTime: 9, endTime: 14, wantsToWork: false },
    { empId: 18, day: 5, startTime: 15, endTime: 18, wantsToWork: false },
    // { empId: 19, day: 5, startTime: 12, endTime: 15, wantsToWork: false },
    // { empId: 22, day: 5, startTime: 12, endTime: 15, wantsToWork: false },
    // { empId: 21, day: 5, startTime: 10, endTime: 17, wantsToWork: false },


    { empId: 1, day: 6, startTime: 10, endTime: 11, wantsToWork: false },
    { empId: 1, day: 6, startTime: 6, endTime: 7, wantsToWork: true },
    { empId: 2, day: 6, startTime: 6, endTime: 8, wantsToWork: false },
    { empId: 3, day: 6, startTime: 9, endTime: 11, wantsToWork: false },
    { empId: 4, day: 6, startTime: 11, endTime: 13, wantsToWork: true },
    { empId: 5, day: 6, startTime: 13, endTime: 15, wantsToWork: false },
    { empId: 6, day: 6, startTime: 13, endTime: 15, wantsToWork: false },
    { empId: 7, day: 6, startTime: 14, endTime: 16, wantsToWork: false },
    // { empId: 8, day: 6, startTime: 9, endTime: 10, wantsToWork: true },
    // { empId: 9, day: 6, startTime: 11, endTime: 12, wantsToWork: true },
    // { empId: 10, day: 6, startTime: 15, endTime: 17, wantsToWork: true },
    // { empId: 13, day: 6, startTime: 11, endTime: 13, wantsToWork: true },
    // { empId: 15, day: 6, startTime: 10, endTime: 13, wantsToWork: true },
    // { empId: 16, day: 6, startTime: 10, endTime: 14, wantsToWork: true },
    // { empId: 17, day: 6, startTime: 9, endTime: 14, wantsToWork: false },
    { empId: 18, day: 6, startTime: 15, endTime: 18, wantsToWork: false },
    { empId: 19, day: 6, startTime: 12, endTime: 15, wantsToWork: false },
    { empId: 22, day: 6, startTime: 12, endTime: 15, wantsToWork: false },
    { empId: 21, day: 6, startTime: 10, endTime: 17, wantsToWork: false },



    { empId: 1, day: 7, startTime: 13, endTime: 15, wantsToWork: false },
    { empId: 1, day: 7, startTime: 10, endTime: 12, wantsToWork: true },
    { empId: 2, day: 7, startTime: 6, endTime: 9, wantsToWork: false },
    { empId: 3, day: 7, startTime: 9, endTime: 14, wantsToWork: false },
    { empId: 4, day: 7, startTime: 15, endTime: 17, wantsToWork: false },
    { empId: 5, day: 7, startTime: 14, endTime: 15, wantsToWork: true },
    { empId: 6, day: 7, startTime: 13, endTime: 15, wantsToWork: false },
    { empId: 7, day: 7, startTime: 9, endTime: 11, wantsToWork: false },
    { empId: 8, day: 7, startTime: 9, endTime: 10, wantsToWork: true },
    { empId: 9, day: 7, startTime: 11, endTime: 12, wantsToWork: true },
    { empId: 10, day: 7, startTime: 12, endTime: 14, wantsToWork: false },
    { empId: 13, day: 7, startTime: 11, endTime: 13, wantsToWork: true },
    { empId: 15, day: 7, startTime: 10, endTime: 13, wantsToWork: true },
    { empId: 16, day: 7, startTime: 10, endTime: 14, wantsToWork: true },
    { empId: 17, day: 7, startTime: 9, endTime: 14, wantsToWork: false },
    { empId: 18, day: 7, startTime: 15, endTime: 18, wantsToWork: false },
    { empId: 19, day: 7, startTime: 12, endTime: 15, wantsToWork: false },
    { empId: 22, day: 7, startTime: 12, endTime: 15, wantsToWork: false },
    { empId: 21, day: 7, startTime: 10, endTime: 17, wantsToWork: false },

    { empId: 1, day: 8, startTime: 10, endTime: 11, wantsToWork: false },
    { empId: 1, day: 8, startTime: 6, endTime: 7, wantsToWork: true },
    { empId: 2, day: 8, startTime: 6, endTime: 9, wantsToWork: false },
    { empId: 3, day: 8, startTime: 11, endTime: 13, wantsToWork: true },
    { empId: 4, day: 8, startTime: 13, endTime: 14, wantsToWork: false },
    { empId: 5, day: 8, startTime: 9, endTime: 11, wantsToWork: false },
    { empId: 6, day: 8, startTime: 13, endTime: 15, wantsToWork: false },
    { empId: 8, day: 8, startTime: 9, endTime: 10, wantsToWork: true },
    { empId: 9, day: 8, startTime: 11, endTime: 12, wantsToWork: true },
    { empId: 10, day: 8, startTime: 11, endTime: 13, wantsToWork: false },
    { empId: 13, day: 8, startTime: 11, endTime: 13, wantsToWork: true },
    { empId: 15, day: 8, startTime: 10, endTime: 13, wantsToWork: true },
    { empId: 16, day: 8, startTime: 10, endTime: 14, wantsToWork: true },
    { empId: 17, day: 8, startTime: 9, endTime: 14, wantsToWork: false },
    { empId: 18, day: 8, startTime: 15, endTime: 18, wantsToWork: false },
    { empId: 19, day: 8, startTime: 12, endTime: 15, wantsToWork: false },
    { empId: 22, day: 8, startTime: 12, endTime: 15, wantsToWork: false },
    { empId: 21, day: 8, startTime: 10, endTime: 17, wantsToWork: false },




    { empId: 1, day: 9, startTime: 13, endTime: 15, wantsToWork: false },
    { empId: 1, day: 9, startTime: 10, endTime: 12, wantsToWork: true },
    { empId: 2, day: 9, startTime: 6, endTime: 9, wantsToWork: false },
    { empId: 3, day: 9, startTime: 9, endTime: 14, wantsToWork: false },
    { empId: 4, day: 9, startTime: 15, endTime: 17, wantsToWork: false },
    { empId: 5, day: 9, startTime: 14, endTime: 15, wantsToWork: true },
    { empId: 6, day: 9, startTime: 13, endTime: 15, wantsToWork: false },
    { empId: 7, day: 9, startTime: 9, endTime: 11, wantsToWork: false },
    { empId: 8, day: 9, startTime: 9, endTime: 10, wantsToWork: true },
    { empId: 9, day: 9, startTime: 11, endTime: 12, wantsToWork: true },
    { empId: 10, day: 9, startTime: 12, endTime: 14, wantsToWork: false },
    { empId: 13, day: 9, startTime: 11, endTime: 13, wantsToWork: true },
    { empId: 15, day: 9, startTime: 10, endTime: 13, wantsToWork: true },
    { empId: 16, day: 9, startTime: 10, endTime: 14, wantsToWork: true },
    { empId: 17, day: 9, startTime: 9, endTime: 14, wantsToWork: false },
    { empId: 18, day: 9, startTime: 15, endTime: 18, wantsToWork: false },
    { empId: 19, day: 9, startTime: 12, endTime: 15, wantsToWork: false },
    { empId: 22, day: 9, startTime: 12, endTime: 15, wantsToWork: false },
    { empId: 21, day: 9, startTime: 10, endTime: 17, wantsToWork: false },

    { empId: 1, day: 10, startTime: 10, endTime: 11, wantsToWork: false },
    { empId: 1, day: 10, startTime: 6, endTime: 7, wantsToWork: true },
    { empId: 2, day: 10, startTime: 6, endTime: 9, wantsToWork: false },
    { empId: 3, day: 10, startTime: 11, endTime: 13, wantsToWork: true },
    { empId: 4, day: 10, startTime: 13, endTime: 14, wantsToWork: false },
    { empId: 5, day: 10, startTime: 9, endTime: 11, wantsToWork: false },
    { empId: 6, day: 10, startTime: 13, endTime: 15, wantsToWork: false },
    { empId: 8, day: 10, startTime: 9, endTime: 10, wantsToWork: true },
    { empId: 9, day: 10, startTime: 11, endTime: 12, wantsToWork: true },
    { empId: 10, day: 10, startTime: 11, endTime: 13, wantsToWork: false },
    { empId: 13, day: 10, startTime: 11, endTime: 13, wantsToWork: true },
    { empId: 15, day: 10, startTime: 10, endTime: 13, wantsToWork: true },
    { empId: 16, day: 10, startTime: 10, endTime: 14, wantsToWork: true },
    { empId: 17, day: 10, startTime: 9, endTime: 14, wantsToWork: false },
    { empId: 18, day: 10, startTime: 15, endTime: 18, wantsToWork: false },
    { empId: 19, day: 10, startTime: 12, endTime: 15, wantsToWork: false },
    { empId: 22, day: 10, startTime: 12, endTime: 15, wantsToWork: false },
    { empId: 21, day: 10, startTime: 10, endTime: 17, wantsToWork: false },






    { empId: 1, day: 11, startTime: 10, endTime: 11, wantsToWork: false },
    { empId: 1, day: 11, startTime: 6, endTime: 7, wantsToWork: true },
    { empId: 2, day: 11, startTime: 6, endTime: 8, wantsToWork: false },
    { empId: 3, day: 11, startTime: 9, endTime: 11, wantsToWork: false },
    { empId: 4, day: 11, startTime: 11, endTime: 13, wantsToWork: true },
    { empId: 5, day: 11, startTime: 13, endTime: 15, wantsToWork: false },
    { empId: 6, day: 11, startTime: 13, endTime: 15, wantsToWork: false },
    { empId: 7, day: 11, startTime: 14, endTime: 16, wantsToWork: false },
    { empId: 8, day: 11, startTime: 9, endTime: 10, wantsToWork: true },
    { empId: 9, day: 11, startTime: 11, endTime: 12, wantsToWork: true },
    { empId: 10, day: 11, startTime: 15, endTime: 17, wantsToWork: true },
    { empId: 13, day: 11, startTime: 11, endTime: 13, wantsToWork: true },
    { empId: 15, day: 11, startTime: 10, endTime: 13, wantsToWork: true },
    { empId: 16, day: 11, startTime: 10, endTime: 14, wantsToWork: true },
    { empId: 17, day: 11, startTime: 9, endTime: 14, wantsToWork: false },
    { empId: 18, day: 11, startTime: 15, endTime: 18, wantsToWork: false },
    { empId: 19, day: 11, startTime: 12, endTime: 15, wantsToWork: false },
    { empId: 22, day: 11, startTime: 12, endTime: 15, wantsToWork: false },
    { empId: 21, day: 11, startTime: 10, endTime: 17, wantsToWork: false },



    { empId: 1, day: 12, startTime: 13, endTime: 15, wantsToWork: false },
    { empId: 1, day: 12, startTime: 10, endTime: 12, wantsToWork: true },
    { empId: 2, day: 12, startTime: 6, endTime: 9, wantsToWork: false },
    { empId: 3, day: 12, startTime: 9, endTime: 14, wantsToWork: false },
    { empId: 4, day: 12, startTime: 15, endTime: 17, wantsToWork: false },
    { empId: 5, day: 12, startTime: 14, endTime: 15, wantsToWork: true },
    { empId: 6, day: 12, startTime: 13, endTime: 15, wantsToWork: false },
    { empId: 7, day: 12, startTime: 9, endTime: 11, wantsToWork: false },
    { empId: 8, day: 12, startTime: 9, endTime: 10, wantsToWork: true },
    { empId: 9, day: 12, startTime: 11, endTime: 12, wantsToWork: true },
    { empId: 10, day: 12, startTime: 12, endTime: 14, wantsToWork: false },
    { empId: 13, day: 12, startTime: 11, endTime: 13, wantsToWork: true },
    { empId: 15, day: 12, startTime: 10, endTime: 13, wantsToWork: true },
    { empId: 16, day: 12, startTime: 10, endTime: 14, wantsToWork: true },
    { empId: 17, day: 12, startTime: 9, endTime: 14, wantsToWork: false },
    { empId: 18, day: 12, startTime: 15, endTime: 18, wantsToWork: false },
    { empId: 19, day: 12, startTime: 12, endTime: 15, wantsToWork: false },
    { empId: 22, day: 12, startTime: 12, endTime: 15, wantsToWork: false },
    { empId: 21, day: 12, startTime: 10, endTime: 17, wantsToWork: false },

    { empId: 1, day: 13, startTime: 10, endTime: 11, wantsToWork: false },
    { empId: 1, day: 13, startTime: 6, endTime: 7, wantsToWork: true },
    { empId: 2, day: 13, startTime: 6, endTime: 9, wantsToWork: false },
    { empId: 3, day: 13, startTime: 11, endTime: 13, wantsToWork: true },
    { empId: 4, day: 13, startTime: 13, endTime: 14, wantsToWork: false },
    { empId: 5, day: 13, startTime: 9, endTime: 11, wantsToWork: false },
    { empId: 6, day: 13, startTime: 13, endTime: 15, wantsToWork: false },
    { empId: 8, day: 13, startTime: 9, endTime: 10, wantsToWork: true },
    { empId: 9, day: 13, startTime: 11, endTime: 12, wantsToWork: true },
    { empId: 10, day: 13, startTime: 11, endTime: 13, wantsToWork: false },
    { empId: 13, day: 13, startTime: 11, endTime: 13, wantsToWork: true },
    { empId: 15, day: 13, startTime: 10, endTime: 13, wantsToWork: true },
    { empId: 16, day: 13, startTime: 10, endTime: 14, wantsToWork: true },
    { empId: 17, day: 13, startTime: 9, endTime: 14, wantsToWork: false },
    { empId: 18, day: 13, startTime: 15, endTime: 18, wantsToWork: false },
    { empId: 19, day: 13, startTime: 12, endTime: 15, wantsToWork: false },
    { empId: 22, day: 13, startTime: 12, endTime: 15, wantsToWork: false },
    { empId: 21, day: 13, startTime: 10, endTime: 17, wantsToWork: false },




    { empId: 1, day: 14, startTime: 13, endTime: 15, wantsToWork: false },
    { empId: 1, day: 14, startTime: 10, endTime: 12, wantsToWork: true },
    { empId: 2, day: 14, startTime: 6, endTime: 9, wantsToWork: false },
    { empId: 3, day: 14, startTime: 9, endTime: 14, wantsToWork: false },
    { empId: 4, day: 14, startTime: 15, endTime: 17, wantsToWork: false },
    { empId: 5, day: 14, startTime: 14, endTime: 15, wantsToWork: true },
    { empId: 6, day: 14, startTime: 13, endTime: 15, wantsToWork: false },
    { empId: 7, day: 14, startTime: 9, endTime: 11, wantsToWork: false },
    { empId: 8, day: 14, startTime: 9, endTime: 10, wantsToWork: true },
    { empId: 9, day: 14, startTime: 11, endTime: 12, wantsToWork: true },
    { empId: 10, day: 14, startTime: 12, endTime: 14, wantsToWork: false },
    { empId: 13, day: 14, startTime: 11, endTime: 13, wantsToWork: true },
    { empId: 15, day: 14, startTime: 10, endTime: 13, wantsToWork: true },
    { empId: 16, day: 14, startTime: 10, endTime: 14, wantsToWork: true },
    { empId: 17, day: 14, startTime: 9, endTime: 14, wantsToWork: false },
    { empId: 18, day: 14, startTime: 15, endTime: 18, wantsToWork: false },
    { empId: 19, day: 14, startTime: 12, endTime: 15, wantsToWork: false },
    { empId: 22, day: 14, startTime: 12, endTime: 15, wantsToWork: false },
    { empId: 21, day: 14, startTime: 10, endTime: 17, wantsToWork: false },

    { empId: 1, day: 15, startTime: 10, endTime: 11, wantsToWork: false },
    { empId: 1, day: 15, startTime: 6, endTime: 7, wantsToWork: true },
    { empId: 2, day: 15, startTime: 6, endTime: 9, wantsToWork: false },
    { empId: 3, day: 15, startTime: 11, endTime: 13, wantsToWork: true },
    { empId: 4, day: 15, startTime: 13, endTime: 14, wantsToWork: false },
    { empId: 5, day: 15, startTime: 9, endTime: 11, wantsToWork: false },
    { empId: 6, day: 15, startTime: 13, endTime: 15, wantsToWork: false },
    { empId: 8, day: 15, startTime: 9, endTime: 10, wantsToWork: true },
    { empId: 9, day: 15, startTime: 11, endTime: 12, wantsToWork: true },
    { empId: 10, day: 15, startTime: 11, endTime: 13, wantsToWork: false },
    { empId: 13, day: 15, startTime: 11, endTime: 13, wantsToWork: true },
    { empId: 15, day: 15, startTime: 10, endTime: 13, wantsToWork: true },
    { empId: 16, day: 15, startTime: 10, endTime: 14, wantsToWork: true },
    { empId: 17, day: 15, startTime: 9, endTime: 14, wantsToWork: false },
    { empId: 18, day: 15, startTime: 15, endTime: 18, wantsToWork: false },
    { empId: 19, day: 15, startTime: 12, endTime: 15, wantsToWork: false },
    { empId: 22, day: 15, startTime: 12, endTime: 15, wantsToWork: false },
    { empId: 21, day: 15, startTime: 10, endTime: 17, wantsToWork: false },


    { empId: 1, day: 16, startTime: 10, endTime: 11, wantsToWork: false },
    { empId: 1, day: 16, startTime: 6, endTime: 7, wantsToWork: true },
    { empId: 2, day: 16, startTime: 6, endTime: 8, wantsToWork: false },
    { empId: 3, day: 16, startTime: 9, endTime: 11, wantsToWork: false },
    { empId: 4, day: 16, startTime: 11, endTime: 13, wantsToWork: true },
    { empId: 5, day: 16, startTime: 13, endTime: 15, wantsToWork: false },
    { empId: 6, day: 16, startTime: 13, endTime: 15, wantsToWork: false },
    { empId: 7, day: 16, startTime: 14, endTime: 16, wantsToWork: false },
    { empId: 8, day: 16, startTime: 9, endTime: 10, wantsToWork: true },
    { empId: 9, day: 16, startTime: 11, endTime: 12, wantsToWork: true },
    { empId: 10, day: 16, startTime: 15, endTime: 17, wantsToWork: true },
    { empId: 13, day: 16, startTime: 11, endTime: 13, wantsToWork: true },
    { empId: 15, day: 16, startTime: 10, endTime: 13, wantsToWork: true },
    { empId: 16, day: 16, startTime: 10, endTime: 14, wantsToWork: true },
    { empId: 17, day: 16, startTime: 9, endTime: 14, wantsToWork: false },
    { empId: 18, day: 16, startTime: 15, endTime: 18, wantsToWork: false },
    { empId: 19, day: 16, startTime: 12, endTime: 15, wantsToWork: false },
    { empId: 22, day: 16, startTime: 12, endTime: 15, wantsToWork: false },
    { empId: 21, day: 16, startTime: 10, endTime: 17, wantsToWork: false },



    { empId: 1, day: 17, startTime: 13, endTime: 15, wantsToWork: false },
    { empId: 1, day: 17, startTime: 10, endTime: 12, wantsToWork: true },
    { empId: 2, day: 17, startTime: 6, endTime: 9, wantsToWork: false },
    { empId: 3, day: 17, startTime: 9, endTime: 14, wantsToWork: false },
    { empId: 4, day: 17, startTime: 15, endTime: 17, wantsToWork: false },
    { empId: 5, day: 17, startTime: 14, endTime: 15, wantsToWork: true },
    { empId: 6, day: 17, startTime: 13, endTime: 15, wantsToWork: false },
    { empId: 7, day: 17, startTime: 9, endTime: 11, wantsToWork: false },
    { empId: 8, day: 17, startTime: 9, endTime: 10, wantsToWork: true },
    { empId: 9, day: 17, startTime: 11, endTime: 12, wantsToWork: true },
    { empId: 10, day: 17, startTime: 12, endTime: 14, wantsToWork: false },
    { empId: 13, day: 17, startTime: 11, endTime: 13, wantsToWork: true },
    { empId: 15, day: 17, startTime: 10, endTime: 13, wantsToWork: true },
    { empId: 16, day: 17, startTime: 10, endTime: 14, wantsToWork: true },
    { empId: 17, day: 17, startTime: 9, endTime: 14, wantsToWork: false },
    { empId: 18, day: 17, startTime: 15, endTime: 18, wantsToWork: false },
    { empId: 19, day: 17, startTime: 12, endTime: 15, wantsToWork: false },
    { empId: 22, day: 17, startTime: 12, endTime: 15, wantsToWork: false },
    { empId: 21, day: 17, startTime: 10, endTime: 17, wantsToWork: false },

    { empId: 1, day: 18, startTime: 10, endTime: 11, wantsToWork: false },
    { empId: 1, day: 18, startTime: 6, endTime: 7, wantsToWork: true },
    { empId: 2, day: 18, startTime: 6, endTime: 9, wantsToWork: false },
    { empId: 3, day: 18, startTime: 11, endTime: 13, wantsToWork: true },
    { empId: 4, day: 18, startTime: 13, endTime: 14, wantsToWork: false },
    { empId: 5, day: 18, startTime: 9, endTime: 11, wantsToWork: false },
    { empId: 6, day: 18, startTime: 13, endTime: 15, wantsToWork: false },
    { empId: 8, day: 18, startTime: 9, endTime: 10, wantsToWork: true },
    { empId: 9, day: 18, startTime: 11, endTime: 12, wantsToWork: true },
    { empId: 10, day: 18, startTime: 11, endTime: 13, wantsToWork: false },
    { empId: 13, day: 18, startTime: 11, endTime: 13, wantsToWork: true },
    { empId: 15, day: 18, startTime: 10, endTime: 13, wantsToWork: true },
    { empId: 16, day: 18, startTime: 10, endTime: 14, wantsToWork: true },
    { empId: 17, day: 18, startTime: 9, endTime: 14, wantsToWork: false },
    { empId: 18, day: 18, startTime: 15, endTime: 18, wantsToWork: false },
    { empId: 19, day: 18, startTime: 12, endTime: 15, wantsToWork: false },
    { empId: 22, day: 18, startTime: 12, endTime: 15, wantsToWork: false },
    { empId: 21, day: 18, startTime: 10, endTime: 17, wantsToWork: false },




    { empId: 1, day: 19, startTime: 13, endTime: 15, wantsToWork: false },
    { empId: 1, day: 19, startTime: 10, endTime: 12, wantsToWork: true },
    { empId: 2, day: 19, startTime: 6, endTime: 9, wantsToWork: false },
    { empId: 3, day: 19, startTime: 9, endTime: 14, wantsToWork: false },
    { empId: 4, day: 19, startTime: 15, endTime: 17, wantsToWork: false },
    { empId: 5, day: 19, startTime: 14, endTime: 15, wantsToWork: true },
    { empId: 6, day: 19, startTime: 13, endTime: 15, wantsToWork: false },
    { empId: 7, day: 19, startTime: 9, endTime: 11, wantsToWork: false },
    { empId: 8, day: 19, startTime: 9, endTime: 10, wantsToWork: true },
    { empId: 9, day: 19, startTime: 11, endTime: 12, wantsToWork: true },
    { empId: 10, day: 19, startTime: 12, endTime: 14, wantsToWork: false },
    { empId: 13, day: 19, startTime: 11, endTime: 13, wantsToWork: true },
    { empId: 15, day: 19, startTime: 10, endTime: 13, wantsToWork: true },
    { empId: 16, day: 19, startTime: 10, endTime: 14, wantsToWork: true },
    { empId: 17, day: 19, startTime: 9, endTime: 14, wantsToWork: false },
    { empId: 18, day: 19, startTime: 15, endTime: 18, wantsToWork: false },
    { empId: 19, day: 19, startTime: 12, endTime: 15, wantsToWork: false },
    { empId: 22, day: 19, startTime: 12, endTime: 15, wantsToWork: false },
    { empId: 21, day: 19, startTime: 10, endTime: 17, wantsToWork: false },

    { empId: 1, day: 20, startTime: 10, endTime: 11, wantsToWork: false },
    { empId: 1, day: 20, startTime: 6, endTime: 7, wantsToWork: true },
    { empId: 2, day: 20, startTime: 6, endTime: 9, wantsToWork: false },
    { empId: 3, day: 20, startTime: 11, endTime: 13, wantsToWork: true },
    { empId: 4, day: 20, startTime: 13, endTime: 14, wantsToWork: false },
    { empId: 5, day: 20, startTime: 9, endTime: 11, wantsToWork: false },
    { empId: 6, day: 20, startTime: 13, endTime: 15, wantsToWork: false },
    { empId: 8, day: 20, startTime: 9, endTime: 10, wantsToWork: true },
    { empId: 9, day: 20, startTime: 11, endTime: 12, wantsToWork: true },
    { empId: 10, day: 20, startTime: 11, endTime: 13, wantsToWork: false },
    { empId: 13, day: 20, startTime: 11, endTime: 13, wantsToWork: true },
    { empId: 15, day: 20, startTime: 10, endTime: 13, wantsToWork: true },
    { empId: 16, day: 20, startTime: 10, endTime: 14, wantsToWork: true },
    { empId: 17, day: 20, startTime: 9, endTime: 14, wantsToWork: false },
    { empId: 18, day: 20, startTime: 15, endTime: 18, wantsToWork: false },
    { empId: 19, day: 20, startTime: 12, endTime: 15, wantsToWork: false },
    { empId: 22, day: 20, startTime: 12, endTime: 15, wantsToWork: false },
    { empId: 21, day: 20, startTime: 10, endTime: 17, wantsToWork: false }
]

