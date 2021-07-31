/* eslint-disable */

import { TARGET } from "./target";
import { timetable } from "./timetable"
import * as _ from "lodash";
import { employee, lastEmployeeInfo, setLastEmployeeInfo, set_ep_power } from "./interface"
import { empPower } from "./empPower";


/* eslint-disable */

// function newChar() {
//   let c = Math.floor(Math.random(63, 122));
//   if (c === 63) c = 32;
//   if (c === 64) c = 46;

//   return String.fromCharCode(c);
// }



class DNA {
    genes: any[] = [];
    fitness: number;
    staffing: number;
    staffTime: number;
    fairness: number;
    randomEmployee: any[] = [];
    rank: number | undefined;
    // numberOfEmployees: number
    constructor() {
        this.genes = this.generateDNASequence()
        // this.genes = this.generateDNARandom()
        this.fitness = 0;
        this.staffing = 0;
        this.staffTime = 0;
        this.fairness = 0;
        // this.numberOfEmployees = 10
    }



    shuffle(array: any[]) {
        var currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    generateRandomEmployees(number: number) {
        let array = []
        for (let i = 0; i < number; i++) {
            array.push(i)
        }
        // console.log("this is i array", array);
        this.shuffle(array)
        // console.log("this is final array", array);
        return array
    }

    generateDNASequence() {
        const TARGET2: number[] = [1, 2, 3]
        let number_of_days = 2
        let uncloned_weekly_timetable_array: any[] = []
        const result: any[] = new Array(employee.length);
        for (let j = 0; j < result.length; j++) {
            result[j] = [];
        }

        // for (let i = 0; i < number_of_days; i++) {
        //     uncloned_weekly_timetable_array[i] = result;
        // }


        let weekly_timetable_array = _.cloneDeep(uncloned_weekly_timetable_array)

        for (let i = 0; i < number_of_days; i++) {

            let clonedResult = _.cloneDeep(result);
            let clonedEmployee = _.cloneDeep(employee);
            for (let j = 0; j < employee.length; j++) {
                let number1 = TARGET[(Math.floor(Math.random() * TARGET.length))]
                // console.log("this is number 1 for j", number1, j);

                for (let k = 6; k < 10; k++) {
                    // this.randomEmployee = randomEmployees

                    if (clonedEmployee[j].todayWorkingHours! < 9) {
                        //   console.log("clonedEmployee", clonedEmployee[i]);
                        clonedResult[j][k] = number1;
                        if (number1 == 0) {
                            clonedEmployee[j].todayWorkingHours = clonedEmployee[j].todayWorkingHours!
                        } else {
                            clonedEmployee[j].todayWorkingHours = clonedEmployee[j].todayWorkingHours! + 1
                        }

                    } else {
                        break
                    }

                }
                let number2 = TARGET[(Math.floor(Math.random() * TARGET.length))]
                if (number1 == 0 && number2 == 0) {
                    number2 = TARGET2[(Math.floor(Math.random() * TARGET2.length))]
                }
                for (let k = 10; k < 14; k++) {
                    //         if (clonedEmployee[randomEmployees[i]].todayWorkingHours! < 9 && clonedDemand[j].amount>0 && !clonedDemand[j].alreadyAllocatedEmp?.includes(randomEmployees[i])) {

                    if (clonedEmployee[j].todayWorkingHours! < 9) {
                        // console.log("clonedEmployee", clonedEmployee[i]);
                        clonedResult[j][k] = number2;
                        if (number2 == 0) {
                            clonedEmployee[j].todayWorkingHours = clonedEmployee[j].todayWorkingHours!
                        } else {
                            clonedEmployee[j].todayWorkingHours = clonedEmployee[j].todayWorkingHours! + 1
                        }
                    } else {
                        break
                    }

                }
                let number3 = TARGET[(Math.floor(Math.random() * TARGET.length))]
                if (number1 == 0 && number2 == 0 && number3 == 0) {
                    number3 = TARGET2[(Math.floor(Math.random() * TARGET2.length))]
                }
                for (let k = 14; k < 18; k++) {
                    if (clonedEmployee[j].todayWorkingHours! < 9) {
                        // console.log("clonedEmployee", clonedEmployee[i]);
                        clonedResult[j][k] = number3;
                        if (number3 == 0) {
                            clonedEmployee[j].todayWorkingHours = clonedEmployee[j].todayWorkingHours!
                        } else {
                            clonedEmployee[j].todayWorkingHours = clonedEmployee[j].todayWorkingHours! + 1
                        }
                    } else {
                        break
                    }

                }

            }

            // console.log("each day clonedResult array", clonedResult);
            weekly_timetable_array.push(clonedResult)

        }

        // console.log("Final is weekly_timetable_array", weekly_timetable_array);

        return weekly_timetable_array
    }

    generateDNARandom() {
        const result: any[] = new Array(10);
        for (let i = 0; i < result.length; i++) {
            result[i] = [];
        }

        for (let i = 0; i < 10; i++) {
            for (let j = 6; j < 18; j++) {
                result[i][j] = TARGET[(Math.floor(Math.random() * TARGET.length))]
            }
        }
        return result
    }

    calcStaffing() {
        // console.log("this is genes", this.genes);
        let finalOverstuffing = 0
        let finalUnderStuffing = 0
        for (let i = 0; i < this.genes.length; i++) {
            let stuffingOutcome = this.calculateOverStuffing(this.genes[i], i + 1)
            // console.log("this is stuffeing outcome", stuffingOutcome);
            finalOverstuffing += stuffingOutcome.finalOverstuffing
            finalUnderStuffing += stuffingOutcome.finalUnderStuffing
        }


        // console.log("this is overstuffing in each loop", overStuffing);
        // console.log("this.calculateOverStuffing(this.genes)", finalOverstuffing, finalUnderStuffing);

        let score = 0;
        score = finalOverstuffing + finalUnderStuffing
        this.staffing = score;
    }
    calcStaffTiming() {
        // console.log("this is genes", this.genes);
        // console.log("this is genes", this.genes);
        let finalOverTime = 0
        let finalUnderTime = 0
        for (let i = 0; i < this.genes.length; i++) {
            let stuffingOutcome = this.calculateOverStuffing(this.genes[i], i + 1)
            // console.log("this is stuffeing outcome", stuffingOutcome);
            finalOverTime += stuffingOutcome.finalOverTime
            finalUnderTime += stuffingOutcome.finalUnderTime
        }

        // const { finalUnderTime, finalOverTime } = this.calculateOverStuffing(this.genes)
        // console.log("this is overstuffing in each loop", overStuffing);
        // console.log("this.calculateOverStuffing(this.genes)", finalOverstuffing, finalUnderStuffing);

        let score = 0;
        score = finalUnderTime + finalOverTime
        this.staffTime = score;
    }



    calScore(oneEmp: any) {
        // console.log("this is oneEmp", oneEmp);

        let negativeWishNotFullfilled = 0
        let positiveWishNotFullfilled = 0
        let absenceWishNotFullfilled = 0

        oneEmp.positiveWish.some((item: any) => {
            if (oneEmp.timeRange.includes(item)) {
                positiveWishNotFullfilled += 0
            } else {
                positiveWishNotFullfilled += 1
            }
        });
        oneEmp.negativeWish.some((item: any) => {
            if (oneEmp.timeRange.includes(item)) {
                negativeWishNotFullfilled += 1
            }
        });
        oneEmp.absenceRange.some((item: any) => {
            if (oneEmp.timeRange.includes(item)) {
                absenceWishNotFullfilled += 1
            }
        });
        return { positiveWishNotFullfilled, negativeWishNotFullfilled, absenceWishNotFullfilled };

    }

    getScoreOfHighestScoreEmployee(genes: any, scoreCollection: { name: string; value: any; }[]) {

        let maxScore = Math.max.apply(Math, scoreCollection.map(function (o) { return o.value; }))
        console.log("maxScore maxScore", maxScore);
        let maxScoreObjectEmpId = scoreCollection.find(item => {
            if (item.value == maxScore) {
                return parseInt(item.name)
            }
        })
        console.log("max score object", parseInt(maxScoreObjectEmpId!.name));


        let totalPositiveWishNotFulfilled = 0
        let totalNegativeWishNotFulfilled = 0
        let totalAbsenceWishNotFulfilled = 0
        let score = 0
        let cloned_lastEmployeeInfo = _.cloneDeep(employee)
        let ep_powers_for_all_days = []
        for (let i = 0; i < genes.length; i++) {

            if (i == 0) {

                let stuffingOutcome = timetable(genes[i], cloned_lastEmployeeInfo, i + 1)
                console.log("stuffingOutcome.cloned employee first", stuffingOutcome.clonedEmployee);
                for (let j = 0; j < stuffingOutcome.clonedEmployee.length; j++) {

                    if (stuffingOutcome.clonedEmployee[j].empId == parseInt(maxScoreObjectEmpId!.name)) {
                        stuffingOutcome.clonedEmployee[j].positiveWish.forEach((item: any) => {
                            !stuffingOutcome.clonedEmployee[j].timeRange.includes(item) ? totalPositiveWishNotFulfilled++ : totalPositiveWishNotFulfilled
                        });
                        stuffingOutcome.clonedEmployee[j].negativeWish.forEach((item: any) => {
                            stuffingOutcome.clonedEmployee[j].timeRange.includes(item) ? totalNegativeWishNotFulfilled++ : totalNegativeWishNotFulfilled
                        });
                        stuffingOutcome.clonedEmployee[j].absenceRange.forEach((item: any) => {
                            stuffingOutcome.clonedEmployee[j].timeRange.includes(item) ? totalAbsenceWishNotFulfilled++ : totalAbsenceWishNotFulfilled
                        });
                    }
                }


                let updated_emp = empPower(genes[i])
                // console.log("step 5 received the updated ep powerrs", updated_emp);

                setLastEmployeeInfo(updated_emp)
                ep_powers_for_all_days.push(updated_emp)
                // console.log("step 6 updated the ep powers and set to last emp info", lastEmployeeInfo);
                // set_ep_power(updated_emp)
            } else {

                let stuffingOutcome = timetable(genes[i], lastEmployeeInfo, i + 1)
                console.log("stuffingOutcome.cloned employee secondssss", stuffingOutcome.clonedEmployee);
                for (let j = 0; j < stuffingOutcome.clonedEmployee.length; j++) {
                    if (stuffingOutcome.clonedEmployee[j].empId == parseInt(maxScoreObjectEmpId!.name)) {
                        stuffingOutcome.clonedEmployee[j].positiveWish.forEach((item: any) => {
                            !stuffingOutcome.clonedEmployee[j].timeRange.includes(item) ? totalPositiveWishNotFulfilled++ : totalPositiveWishNotFulfilled
                        });
                        stuffingOutcome.clonedEmployee[j].negativeWish.forEach((item: any) => {
                            stuffingOutcome.clonedEmployee[j].timeRange.includes(item) ? totalNegativeWishNotFulfilled++ : totalNegativeWishNotFulfilled
                        });
                        stuffingOutcome.clonedEmployee[j].absenceRange.forEach((item: any) => {
                            stuffingOutcome.clonedEmployee[j].timeRange.includes(item) ? totalAbsenceWishNotFulfilled++ : totalAbsenceWishNotFulfilled
                        });
                    }
                    // console.log("step 8- after lastEmployeeInfo is updated by timetable, we will update emp power of this table", lastEmployeeInfo);
                    let updated_emp = empPower(genes[i])
                    // console.log("step 9 received the updated ep powerrs", updated_emp);
                    setLastEmployeeInfo(updated_emp)
                    ep_powers_for_all_days.push(updated_emp)


                }

            }
        }
        score = totalPositiveWishNotFulfilled + totalNegativeWishNotFulfilled + totalAbsenceWishNotFulfilled
        return score
    }

    calcFairness(task_day: number) {
        // console.log("cal fairness", task_day);
        let totalPositiveWishNotFulfilled = 0
        let totalNegativeWishNotFulfilled = 0
        let totalAbsenceWishNotFulfilled = 0
        let score = 0
        let cloned_lastEmployeeInfo = _.cloneDeep(employee)
        let ep_powers_for_all_days = []
        let scoreCollection: any = []
        for (let i = 0; i < this.genes.length; i++) {

            if (i == 0) {

                let stuffingOutcome = timetable(this.genes[i], cloned_lastEmployeeInfo, i + 1)

                scoreCollection.push(stuffingOutcome.individualScore)

                let updated_emp = empPower(this.genes[i])
                // console.log("step 5 received the updated ep powerrs", updated_emp);

                setLastEmployeeInfo(updated_emp)
                ep_powers_for_all_days.push(updated_emp)
                // console.log("step 6 updated the ep powers and set to last emp info", lastEmployeeInfo);
                // set_ep_power(updated_emp)
            } else {

                let stuffingOutcome = timetable(this.genes[i], lastEmployeeInfo, i + 1)

                scoreCollection.push(stuffingOutcome.individualScore)
                // console.log("step 8- after lastEmployeeInfo is updated by timetable, we will update emp power of this table", lastEmployeeInfo);
                let updated_emp = empPower(this.genes[i])
                // console.log("step 9 received the updated ep powerrs", updated_emp);
                setLastEmployeeInfo(updated_emp)
                ep_powers_for_all_days.push(updated_emp)


            }

        }
        console.log("scoreCollection scoreCollection scoreCollection", scoreCollection);

        //join all days each employees score

        let merged: any = [].concat.apply([], scoreCollection);

        console.log("mergeddddddddd", merged);
        var holder: any = {};

        merged.forEach(function (d: { empID: string | number; score: any; }) {
            if (holder.hasOwnProperty(d.empID)) {
                holder[d.empID] = holder[d.empID] + d.score;
            } else {
                holder[d.empID] = d.score;
            }
        });

        var obj2 = [];

        for (var prop in holder) {
            obj2.push({ name: prop, value: holder[prop] });
        }

        console.log(obj2);

        score = this.getScoreOfHighestScoreEmployee(this.genes, obj2)


        set_ep_power(ep_powers_for_all_days)

        // score = totalPositiveWishNotFulfilled + totalNegativeWishNotFulfilled + totalAbsenceWishNotFulfilled

        console.log("fairness score", score);

        this.fairness = score;
    }

    calcFitness() {
        this.fitness = this.staffing + this.fairness
    }

    calculateOverStuffing(dna: any[], task_day: number | undefined) {

        const { finalOverstuffing, finalUnderStuffing, finalUnderTime, finalOverTime } = timetable(dna, employee, task_day)

        return { finalOverstuffing, finalUnderStuffing, finalUnderTime, finalOverTime }

    }

    // Crossover
    crossover(partner: DNA) {
        // A new child
        let child = new DNA();
        let midpoint = Math.floor(Math.random() * (18 - 6 + 1)) + 6;

        for (let i = 0; i < this.genes.length; i++) {
            for (let j = 6; j < this.genes[i].length; j++) {
                if (j < midpoint) {
                    child.genes[i][j] = this.genes[i][j]
                } else {
                    child.genes[i][j] = partner.genes[i][j]
                }
            }
        }

        return child;
    }

    mutate(mutationRate: number) {
        for (let i = 0; i < this.genes.length; i++) {
            for (let j = 6; j < this.genes[i].length; j++) {
                if (Math.random() < mutationRate) {
                    // console.log("it si inside mutation rate if", i,j, TARGET[(Math.floor(Math.random() * TARGET.length))]);

                    this.genes[i][j] = TARGET[(Math.floor(Math.random() * TARGET.length))];
                }
            }
        }

    }
}

export default DNA;
