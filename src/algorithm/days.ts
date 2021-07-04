/* eslint-disable */

import { task } from "./task"

const numberOfDays = 1

let taskArray: any = []

export function days() {
    for (let i = 0; i < numberOfDays; i++) {
        // [1, 2, 3, 4, 5, 6, 7].forEach(task);

       let taskOutcome = task()
        taskArray.push(taskOutcome)
    }
    return taskArray
    
}