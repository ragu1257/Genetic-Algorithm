/* eslint-disable */

import { TARGET } from "./target";
import { timetable } from "./timetable"
import * as _ from "lodash";
import {employee} from "./interface"

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
        const result: any[] = new Array(employee.length);
        for (let i = 0; i < result.length; i++) {
            result[i] = [];
        }
        let clonedEmployee = _.cloneDeep(employee);
        for (let i = 0; i < employee.length; i++) {
         
            let number1 = TARGET[(Math.floor(Math.random() * TARGET.length))]
            for (let j = 6; j < 10; j++) {
                // this.randomEmployee = randomEmployees

              if(clonedEmployee[i].todayWorkingHours! < 9){
                //   console.log("clonedEmployee", clonedEmployee[i]);                  
                    result[i][j] = number1;
                    if(number1==0){
                        clonedEmployee[i].todayWorkingHours = clonedEmployee[i].todayWorkingHours! 
                    }else{
                        clonedEmployee[i].todayWorkingHours = clonedEmployee[i].todayWorkingHours! + 1
                    }
                    
                } else {
                    break
                }

            }
           let number2 = TARGET[(Math.floor(Math.random() * TARGET.length))]
           if(number1 ==0 && number2 == 0){
            number2 = TARGET2[(Math.floor(Math.random() * TARGET2.length))]
           }
            for (let j = 10; j < 14; j++) {
                //         if (clonedEmployee[randomEmployees[i]].todayWorkingHours! < 9 && clonedDemand[j].amount>0 && !clonedDemand[j].alreadyAllocatedEmp?.includes(randomEmployees[i])) {

               if(clonedEmployee[i].todayWorkingHours! < 9){
                // console.log("clonedEmployee", clonedEmployee[i]); 
                    result[i][j] = number2;
                    if(number2==0){
                        clonedEmployee[i].todayWorkingHours = clonedEmployee[i].todayWorkingHours! 
                    }else{
                        clonedEmployee[i].todayWorkingHours = clonedEmployee[i].todayWorkingHours! + 1
                    }
                } else {
                    break
                }

            }
            let number3 = TARGET[(Math.floor(Math.random() * TARGET.length))]
            if(number1 ==0 && number2 == 0 && number3 == 0){
                number3 = TARGET2[(Math.floor(Math.random() * TARGET2.length))]
               }
            for (let j = 14; j < 18; j++) {
              if(clonedEmployee[i].todayWorkingHours! < 9){
                // console.log("clonedEmployee", clonedEmployee[i]); 
                    result[i][j] = number3;
                    if(number3==0){
                        clonedEmployee[i].todayWorkingHours = clonedEmployee[i].todayWorkingHours! 
                    }else{
                        clonedEmployee[i].todayWorkingHours = clonedEmployee[i].todayWorkingHours! + 1
                    }
                } else {
                    break
                }

            }

        }
        // console.log("this is result", result);
        
        return result
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

        const { finalOverstuffing, finalUnderStuffing } = this.calculateOverStuffing(this.genes)
        // console.log("this is overstuffing in each loop", overStuffing);
        // console.log("this.calculateOverStuffing(this.genes)", finalOverstuffing, finalUnderStuffing);

        let score = 0;
        score = finalOverstuffing + finalUnderStuffing
        this.staffing = score;
    }
    calcStaffTiming() {
        // console.log("this is genes", this.genes);

        const { finalUnderTime, finalOverTime } = this.calculateOverStuffing(this.genes)
        // console.log("this is overstuffing in each loop", overStuffing);
        // console.log("this.calculateOverStuffing(this.genes)", finalOverstuffing, finalUnderStuffing);

        let score = 0;
        score = finalUnderTime + finalOverTime
        this.staffTime = score;
    }

    calcFairness() {
        const { totalPositiveWishNotFulfilled, totalNegativeWishNotFulfilled, totalAbsenceWishNotFulfilled } = timetable(this.genes, employee)

        let score = 0;
        score = totalPositiveWishNotFulfilled + totalNegativeWishNotFulfilled + totalAbsenceWishNotFulfilled
        this.fairness = score;
        // console.log("helooooooooooo", finalPositiveWish, finalNegativeWish, finalAbsenceWish);

    }

    calcFitness() {
        this.fitness = this.staffing + this.fairness
    }

    calculateOverStuffing(dna: any[]) {

        const { finalOverstuffing, finalUnderStuffing, finalUnderTime, finalOverTime } = timetable(dna, employee)

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
