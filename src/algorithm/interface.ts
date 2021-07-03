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


export const employee: employeeInfo[] = [
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
    // { empId: 11, empName: "Rachit10", weeklyWorkingHours: 40, todayWorkingHours:0 },
    // { empId: 12, empName: "Rachit11", weeklyWorkingHours: 40, todayWorkingHours:0 },
    // { empId: 13, empName: "Rachit12", weeklyWorkingHours: 40, todayWorkingHours:0 },
    // { empId: 14, empName: "Rachit13", weeklyWorkingHours: 40, todayWorkingHours:0 },
    // { empId: 15, empName: "Rachit14", weeklyWorkingHours: 40, todayWorkingHours:0 },
    // { empId: 16, empName: "Rachit15", weeklyWorkingHours: 40, todayWorkingHours:0 },
    // { empId: 17, empName: "Rachit16", weeklyWorkingHours: 40, todayWorkingHours:0 },
    // { empId: 18, empName: "Rachit17", weeklyWorkingHours: 40, todayWorkingHours:0 },
    // { empId: 19, empName: "Rachit18", weeklyWorkingHours: 40, todayWorkingHours:0 },
    // { empId: 20, empName: "Rachit19", weeklyWorkingHours: 40, todayWorkingHours:0 },
    // { empId: 21, empName: "Rachit20", weeklyWorkingHours: 40, todayWorkingHours:0 },
    // { empId: 22, empName: "Rachit21", weeklyWorkingHours: 40, todayWorkingHours:0 }
]


export const demand: demandInfo[] = [
    { demandId: 1, startTime: 6, endTime: 7, amount: 5, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 2, startTime: 7, endTime: 8, amount: 5, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 3, startTime: 8, endTime: 9, amount: 5, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 4, startTime: 9, endTime: 10, amount: 5, workAreaId: 1, alreadyAllocatedEmp: [] },

    { demandId: 5, startTime: 6, endTime: 7, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 6, startTime: 7, endTime: 8, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 7, startTime: 8, endTime: 9, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 8, startTime: 9, endTime: 10, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    { demandId: 9, startTime: 6, endTime: 7, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 10, startTime: 7, endTime: 8, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 11, startTime: 8, endTime: 9, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 12, startTime: 9, endTime: 10, amount: 2, workAreaId: 3, alreadyAllocatedEmp: [] },


    { demandId: 13, startTime: 10, endTime: 11, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 14, startTime: 11, endTime: 12, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 15, startTime: 12, endTime: 13, amount: 3, workAreaId: 1, alreadyAllocatedEmp: [] },


    { demandId: 16, startTime: 10, endTime: 11, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 17, startTime: 11, endTime: 12, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 18, startTime: 12, endTime: 13, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    { demandId: 19, startTime: 10, endTime: 11, amount: 3, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 19, startTime: 11, endTime: 12, amount: 3, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 20, startTime: 12, endTime: 13, amount: 3, workAreaId: 3, alreadyAllocatedEmp: [] },


    { demandId: 21, startTime: 13, endTime: 14, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 22, startTime: 14, endTime: 15, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 23, startTime: 15, endTime: 16, amount: 2, workAreaId: 1, alreadyAllocatedEmp: [] },


    { demandId: 24, startTime: 13, endTime: 14, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 25, startTime: 14, endTime: 15, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 26, startTime: 15, endTime: 16, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },


    { demandId: 27, startTime: 13, endTime: 14, amount: 4, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 28, startTime: 14, endTime: 15, amount: 4, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 29, startTime: 15, endTime: 16, amount: 4, workAreaId: 3, alreadyAllocatedEmp: [] },


    { demandId: 30, startTime: 16, endTime: 17, amount: 5, workAreaId: 1, alreadyAllocatedEmp: [] },
    { demandId: 31, startTime: 17, endTime: 18, amount: 5, workAreaId: 1, alreadyAllocatedEmp: [] },

    { demandId: 32, startTime: 16, endTime: 17, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },
    { demandId: 33, startTime: 17, endTime: 18, amount: 2, workAreaId: 2, alreadyAllocatedEmp: [] },

    { demandId: 34, startTime: 16, endTime: 17, amount: 4, workAreaId: 3, alreadyAllocatedEmp: [] },
    { demandId: 35, startTime: 17, endTime: 18, amount: 4, workAreaId: 3 }
]


export const absence: absence[] = [
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

export const wish: wish[] = [
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

