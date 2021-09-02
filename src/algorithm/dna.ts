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
const demandPenalty = 10
const positivePenalty = 2
const negativePenalty = 5
const absencePenalty = 10


// const demandPenalty = 10
// const positivePenalty = 10
// const negativePenalty = 25
// const absencePenalty = 50


// const demandPenalty = 5
// const positivePenalty = 20
// const negativePenalty = 50
// const absencePenalty = 100



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
        let number_of_days = 5
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
        this.staffing = score * demandPenalty;
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

    calcFairness(task_day: number) {
        // console.log("cal fairness", task_day);
        let totalPositiveWishNotFulfilled = 0
        let totalNegativeWishNotFulfilled = 0
        let totalAbsenceWishNotFulfilled = 0
        let score = 0
        let cloned_lastEmployeeInfo = _.cloneDeep(employee)
        let ep_powers_for_all_days = []
        for (let i = 0; i < this.genes.length; i++) {

            if (i == 0) {
                // let updated_emp = empPower(this.genes[i])
                // console.log("updated_emp 1", updated_emp);
                // console.log("step 1- sending initial emp to timetable", cloned_lastEmployeeInfo);

                let stuffingOutcome = timetable(this.genes[i], cloned_lastEmployeeInfo, i + 1)
                // console.log("this is stuffeing outcome", stuffingOutcome);
                totalPositiveWishNotFulfilled += stuffingOutcome.totalPositiveWishNotFulfilled
                totalNegativeWishNotFulfilled += stuffingOutcome.totalNegativeWishNotFulfilled
                totalAbsenceWishNotFulfilled += stuffingOutcome.totalAbsenceWishNotFulfilled
                // score = totalPositiveWishNotFulfilled * 2 + totalNegativeWishNotFulfilled * 5 + totalAbsenceWishNotFulfilled * 10
                // console.log("this is upudated from timetable ts", employee);
                // console.log("step 3- after lastEmployeeInfo is updated by timetable, we update emp power of this table", lastEmployeeInfo);

                let updated_emp = empPower(this.genes[i])
                // console.log("step 5 received the updated ep powerrs", updated_emp);

                setLastEmployeeInfo(updated_emp)
                ep_powers_for_all_days.push(updated_emp)
                // console.log("step 6 updated the ep powers and set to last emp info", lastEmployeeInfo);
                // set_ep_power(updated_emp)
            } else {
                // console.log("this is upudated from timetable ts after in second loop", employee);
                // let updated_emp = empPower(this.genes[i])
                // console.log("updated_emp 2", updated_emp);
                // stuffingOutcome = timetable(this.genes[i], employee)   
                // console.log("step 7 2nd day table createion with last updated emp info", lastEmployeeInfo);
                // console.log("sorted array employee initialllllll lastEmployeeInfo", lastEmployeeInfo);
                let compareLastEmployeeInfo = lastEmployeeInfo
                timetable(this.genes[i], lastEmployeeInfo, i + 1)
                // console.log("step 8- after lastEmployeeInfo is updated by timetable, we will update emp power of this table", lastEmployeeInfo);
                let updated_emp = empPower(this.genes[i])
                // console.log("step 9 received the updated ep powerrs", updated_emp);
                setLastEmployeeInfo(updated_emp)
                ep_powers_for_all_days.push(updated_emp)
                // console.log("step 10 updated the ep powers and set to last emp info", lastEmployeeInfo);
                // lastEmployeeInfo.sort((a, b) => (a.empPower! > b.empPower!) ? -1 : ((b.empPower! > a.empPower!) ? 1 : 0))
                // console.log("sorted array employee lastEmployeeInfo", lastEmployeeInfo);

                // console.log("before compareLastEmployeeInfo", compareLastEmployeeInfo);
                // console.log("upudated lastEmployeeInfo", lastEmployeeInfo);


                for (let k = 0; k < compareLastEmployeeInfo.length; k++) {
                    for (let l = 0; l < lastEmployeeInfo.length; l++) {
                        if (lastEmployeeInfo[l].empId == compareLastEmployeeInfo[k].empId) {
                            let scorePerEmployee = 0
                            let internaltotalPositiveWishNotFulfilled = 0
                            let internaltotalNegativeWishNotFulfilled = 0
                            let internaltotalAbsenceWishNotFulfilled = 0
                            lastEmployeeInfo[l].positiveWish!.map(item => {
                                !lastEmployeeInfo[l].timeRange!.includes(item) ? internaltotalPositiveWishNotFulfilled++ : totalPositiveWishNotFulfilled
                            })
                            lastEmployeeInfo[l].negativeWish!.map(item => {
                                lastEmployeeInfo[l].timeRange!.includes(item) ? internaltotalNegativeWishNotFulfilled++ : totalNegativeWishNotFulfilled
                            })
                            lastEmployeeInfo[l].absenceRange!.map(item => {
                                lastEmployeeInfo[l].timeRange!.includes(item) ? internaltotalAbsenceWishNotFulfilled++ : totalAbsenceWishNotFulfilled
                            })
                            scorePerEmployee = (internaltotalPositiveWishNotFulfilled * positivePenalty + internaltotalNegativeWishNotFulfilled * negativePenalty + internaltotalAbsenceWishNotFulfilled * absencePenalty) * Math.abs(compareLastEmployeeInfo[k].empPower! * 10)
                            score += scorePerEmployee
                            // console.log("this is scorePerEmployee", scorePerEmployee)
                        }
                    }
                }
            }
        }

        set_ep_power(ep_powers_for_all_days)

        score += totalPositiveWishNotFulfilled * positivePenalty + totalNegativeWishNotFulfilled * negativePenalty + totalAbsenceWishNotFulfilled * absencePenalty

        // console.log("fairness score", score);

        this.fairness = score;




        // if (task_day != 1) {
        //     let score = 0
        //     // console.log("this is previous selected employee object", lastEmployeeInfo);

        //     // let sortingEmployee = employee
        //     lastEmployeeInfo.sort((a, b) => (a.empPower! > b.empPower!) ? -1 : ((b.empPower! > a.empPower!) ? 1 : 0))
        //     // console.log("sorted array employee lastEmployeeInfo", lastEmployeeInfo);
        //     // console.log("this is current employee before", employee);
        //     timetable(this.genes, employee)
        //     // console.log("this is current employee affter", employee);
        //     // let currentEmp = employee
        //     // console.log("employee in currentEmppppppppp before", currentEmp);
        //     for (let i = 0; i < lastEmployeeInfo.length; i++) {
        //         for (let j = 0; j < employee.length; j++) {
        //             if (lastEmployeeInfo[i].empId == employee[j].empId) {
        //                 // let employee = employee[j]
        //                 // console.log("employee in currentEmppppppppp", employee[j]);

        //                 let { positiveWishNotFullfilled, negativeWishNotFullfilled, absenceWishNotFullfilled } = this.calScore(employee[j])

        //                 //checking the difference between current and next employee EP, if they are same then give equal penalty else the penalty is diffrence between them
        //                 let penalty
        //                 if (i < lastEmployeeInfo.length - 1) {
        //                     penalty = Math.abs(lastEmployeeInfo[i].empPower!) - Math.abs(lastEmployeeInfo[i + 1].empPower!)
        //                 } else {
        //                     penalty = Math.abs(lastEmployeeInfo[i].empPower!)
        //                 }
        //                 penalty == 0 ? penalty = 1 : Math.abs(penalty)
        //                 // console.log("this is penalty", Math.abs(penalty));

        //                 score += (positiveWishNotFullfilled + negativeWishNotFullfilled + absenceWishNotFullfilled) * Math.abs(penalty)

        //             }
        //         }
        //     }
        //     // console.log("this is final score", score);

        //     this.fairness = score;
        //     // let clonedEmployee = _.cloneDeep(employee);
        //     // console.log("ye rahi clonedEmployee", employee);
        // } else {
        //     const { totalPositiveWishNotFulfilled, totalNegativeWishNotFulfilled, totalAbsenceWishNotFulfilled } = timetable(this.genes, employee)

        //     let score = 0;
        //     score = totalPositiveWishNotFulfilled + totalNegativeWishNotFulfilled + totalAbsenceWishNotFulfilled
        //     this.fairness = score;
        // }
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
