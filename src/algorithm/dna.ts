import { TARGET } from "./target";

// function newChar() {
//   let c = Math.floor(Math.random(63, 122));
//   if (c === 63) c = 32;
//   if (c === 64) c = 46;

//   return String.fromCharCode(c);
// }

class DNA {
    genes: any[] = [];
    fitness: number;
    numberOfEmployees: number
    constructor() {
        this.genes = this.generateDNA()
        this.fitness = 0;
        this.numberOfEmployees = 10
    }

    generateDNA() {
        const result: any[] = new Array(10);

        for (let i = 0; i < result.length; i++) {
            result[i] = [];
        }

        for (let i = 0; i < 10; i++) {

            let number = TARGET[(Math.floor(Math.random() * TARGET.length))]
            for (let j = 6; j < 10; j++) {

                if (j == 0) {
                    result[i][j] = i + 1;
                } else {
                    result[i][j] = number;
                }

            }
            number = TARGET[(Math.floor(Math.random() * TARGET.length))]
            for (let j = 10; j < 14; j++) {

                if (j == 0) {
                    result[i][j] = i + 1;
                } else {
                    result[i][j] = number;
                }

            }
            number = TARGET[(Math.floor(Math.random() * TARGET.length))]
            for (let j = 14; j < 18; j++) {
                if (j == 0) {
                    result[i][j] = i + 1;
                } else {
                    result[i][j] = number;
                }

            }
        }
        return result
    }

}

export default DNA;

      // // console.log("thi is generatedDNA[0].length", generatedDNA[0].length);      
      // let workid: number = 0
      // let starting_time: number = 0
      // let ending_time: number = 0

      // if (j === 1) {
      //   // console.log(j);

      //   workid = generatedDNA[i][j]
      //   starting_time = j
      //   ending_time = j
      //   // console.log(i, j, generatedDNA[i][j], workid);

      // } else
      //   workid = generatedDNA[i][j-1]
      //   if (generatedDNA[i][j] === workid) {
      //     ending_time = j
      //   } else {
      //     console.log("this is starting_time", starting_time);
      //    // Object.assign({ empId: i, workAreaId: workid, startTime: starting_time, endTime: ending_time }, testingShift)
      //    testingShift.push({ empId: i, workAreaId: workid, startTime: starting_time, endTime: ending_time })
        
      // }
