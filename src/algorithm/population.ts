import DNA from './dna'
// import { TARGET } from './target.js';
/* eslint-disable */

class Population {

    population: Array<DNA> = [];
    finished = false;
    matingPool: Array<DNA> = []
    newChild: Array<DNA> = []
    best: Array<DNA> = []
    mutationRate = 0.01
    generations = 0
    // best: string = ""
    perfectScore = 1
    averageFitness = 0
    bestFitness!: number;
    constructor(popSize: number, task_day: number) {
        for (let i = 0; i < popSize; i++) {
            this.population.push(new DNA())
        }


        this.calcFitness(task_day)

    }
    calcStaffing() {
        for (let i = 0; i < this.population.length; i++) {
            this.population[i].calcStaffing();
        }
    }
    calcStaffTiming() {
        for (let i = 0; i < this.population.length; i++) {
            this.population[i].calcStaffTiming();
        }
    }
    calcFairness(task_day: number) {
        for (let i = 0; i < this.population.length; i++) {
            this.population[i].calcFairness(task_day);
        }
    }

    calcFitness(task_day: number) {
        this.calcStaffing();
        // console.log("it kkis population", this.population);
        this.calcStaffTiming();
        this.calcFairness(task_day)
        for (let i = 0; i < this.population.length; i++) {
            this.population[i].calcFitness()
        }
    }

    //NSGA-II
    nonDominatedSorting(pop_size: number) {
        let finalRanks: any[] = []
        // console.log(this.population);
        if (this.population) {

            // console.log("popu", this.population);

            for (let L = 0; L < this.population.length; L++) {
                // console.log("this is L", L);

                if (finalRanks.length >= 0 && this.allTaskCompleted(finalRanks)) {
                    break;
                } else {
                    let P: number[] = []
                    for (let i = 0; i < this.population.length; i++) {

                        if (this.checkIncludes(finalRanks, i)) {
                            continue;
                        }
                        // if (finalRanks.length >=0 && JSON.stringify(finalRanks).includes(JSON.stringify(i))) {
                        //     // console.log("continue of finalranks i");

                        //     continue;
                        // }
                        let valueOfJ = 0
                        for (let j = 0; j < this.population.length; j++) {

                            valueOfJ++
                            if (this.checkIncludes(finalRanks, j)) {
                                continue;
                            }
                            // if (finalRanks.length >=0 && JSON.stringify(finalRanks).includes(JSON.stringify(j))) {

                            //     // console.log("continue of finalranks j");
                            //     continue;
                            // }
                            if (i == j) {
                                continue;
                            }
                            if (this.nonDominatedSolution(i, j)) {
                                // console.log("it is break");

                                valueOfJ--
                                break;
                            }
                        }
                        if (valueOfJ == this.population.length) {
                            P.push(i)
                            // console.log("this is P after each i", P);

                        }
                    }
                    // console.log("this is P", P);

                    finalRanks.push(P)
                }
            }

            // console.log("final finalRanks", finalRanks);
        }


        //till now we will have all the population grouped with ranks
        // final sort rank will give the output of the top N pop we want

        let finalSortRanks = this.crowdingDistance(finalRanks, pop_size);
        // this.assignRank(finalSortRanks);
        // console.log("this is final Ranks",  this.population);
        // console.log("finalSortRanksfinalSortRanksfinalSortRanks", finalSortRanks, this.population[finalSortRanks[0][0]]);

        return finalSortRanks

    }

    crowdingDistance(finalRanks: any[], pop_size: number) {
        let total = 0;
        let totalArray = [];
        let parentsNeeded = Math.floor(this.population.length / 2)
        // let parentsNeeded = pop_size
        let giveNeededParents
        // console.log("parents needed", parentsNeeded);

        for (let i = 0; i < finalRanks.length; i++) {
            // console.log(finalRanks[i].length);

            total += finalRanks[i].length;
            // console.log(total);

            if (total <= Math.floor(this.population.length / 2)) {
                parentsNeeded = parentsNeeded - finalRanks[i].length;
                // console.log("parents now", parentsNeeded);

                totalArray.push(finalRanks[i])
            } else {
                // console.log(finalRanks[i]);

                giveNeededParents = this.doCrowdingDistance(finalRanks[i], parentsNeeded)
                break;
            }
        }
        totalArray.push(giveNeededParents)
        // console.log("returnCrowdedSortingArrayreturnCrowdedSortingArray", giveNeededParents, totalArray);
        return totalArray
        // // console.log("final array", totalArray, total);

    }


    doCrowdingDistance(rankArray: any[], parentsNeeded: number) {
        // console.log(rankArray);
        interface objArray {
            popnumber?: number,
            crowdingDistance?: number,
            staff?: number,
            time?: number,
            fairness?: number
        }
        let objInfo: objArray[] = []

        for (let i = 0; i < rankArray.length; i++) {
            objInfo.push({ popnumber: rankArray[i], staff: this.population[rankArray[i]].staffing, fairness: this.population[rankArray[i]].fairness })

        }


        let sortStaff: any[] = []
        objInfo.forEach(val => sortStaff.push(Object.assign({}, val)));

        sortStaff = sortStaff.sort((a, b) => (a.staff! < b.staff! ? -1 : 1));
        sortStaff[0].crowdingDistance = Infinity
        sortStaff[sortStaff.length - 1].crowdingDistance = Infinity


        let sortFairness: any[] = []
        objInfo.forEach(val => sortFairness.push(Object.assign({}, val)));
        sortFairness = sortFairness.sort((a, b) => (a.fairness! < b.fairness! ? -1 : 1));
        sortFairness[0].crowdingDistance = Infinity
        sortFairness[sortFairness.length - 1].crowdingDistance = Infinity

        // console.log("finally", sortStaff,sortTime);
        // // console.log("this pop", this.population);

        let maxStaffing = Math.max.apply(Math, this.population.map(function (o) { return o.staffing; }))
        let maxFairness = Math.max.apply(Math, this.population.map(function (o) { return o.fairness; }))
        // let minStaffing = Math.min.apply(Math, this.population.map(function (o) { return o.staffing; }))
        // let minTiming = Math.min.apply(Math, this.population.map(function (o) { return o.staffTime; }))
        let minStaffing = 0
        let minFairness = 0
        // // console.log("max", maxStaffing, maxTiming, minStaffing, minTiming);
        let newsortStaff: any[] = []
        sortStaff.forEach(val => newsortStaff.push(Object.assign({}, val)));

        for (let i = 1; i < newsortStaff.length - 1; i++) {
            newsortStaff[i].crowdingDistance = ((newsortStaff[i + 1].staff! - newsortStaff[i - 1].staff!) / (maxStaffing - minStaffing))
        }
        let newsortFairness: any[] = []
        sortFairness.forEach(val => newsortFairness.push(Object.assign({}, val)));
        for (let i = 1; i < newsortFairness.length - 1; i++) {
            newsortFairness[i].crowdingDistance = ((newsortFairness[i + 1].fairness! - newsortFairness[i - 1].fairness!) / (maxFairness - minFairness))
        }

        // console.log("final ---", newsortStaff, newsortTime);

        let combinedArrayPop: any[] = []
        newsortFairness.forEach(val => combinedArrayPop.push(Object.assign({}, val)));
        newsortStaff.forEach(val => combinedArrayPop.push(Object.assign({}, val)));

        const result = [...combinedArrayPop.reduce((r, o) => {
            const key = o.popnumber;

            const item = r.get(key) || Object.assign({}, o, {
                crowdingDistance: 0
            });

            item.crowdingDistance += o.crowdingDistance;

            return r.set(key, item);
        }, new Map).values()];

        //   console.log(result);
        let resultArray: any[] = []
        result.forEach(val => resultArray.push(Object.assign({}, val)));
        resultArray = resultArray.sort((a, b) => (a.crowdingDistance! > b.crowdingDistance! ? -1 : 1));
        // console.log("final sort now", resultArray);
        let returnCrowdedSortingArray = []
        for (let i = 0; i < parentsNeeded; i++) {
            returnCrowdedSortingArray.push(resultArray[i].popnumber)
        }
        // console.log("returnCrowdedSortingArray",parentsNeeded, returnCrowdedSortingArray);
        return returnCrowdedSortingArray

    }


    checkIncludes(ranks: any[], i: number) {

        for (let z = 0; z < ranks.length; z++) {
            if (ranks[z].includes(i)) {
                return true
            }
        }
    }
    allTaskCompleted(finalRanks: any[]) {
        let totalValue = 0;
        // console.log("finalRanks", finalRanks);

        for (let i = 0; i < finalRanks.length; i++) {
            for (let j = 0; j < finalRanks[i].length; j++) {
                totalValue = totalValue + 1
            }
        }
        if (totalValue == this.population.length) {
            return true
        }
    }
    nonDominatedSolution(i: number, j: number) {
        // console.log(this.population[i], this.population[j]);

        if (this.population[i].staffing >= this.population[j].staffing && this.population[i].fairness >= this.population[j].fairness) {
            if (this.population[i].staffing > this.population[j].staffing || this.population[i].fairness > this.population[j].fairness) {
                return true
            }
        } else {
            return false
        }
    }
    check(a: any, b: any, array: string | any[]) {
        let included = false
        for (let i = 0; i < array.length; i++) {
            if (array[i].includes(a) && array[i].includes(b)) {
                included = true
            }
            if (included) {
                break;
            }
        }
        return included
    }

    //selection based on mating pool with ranking percentage
    naturalSelection(sortedRanks: any[] | undefined) {
        // console.log("natural selection sortedRanks", sortedRanks, this.population[sortedRanks![0][0]]);
        let allParents = []
        // let array = [[0,1,2], [5,4,6,7],[8,9,10,11]];

        //combined all subArray of sortedRanks into single array
        let combinedArray = []
        for (let i = 0; i < sortedRanks!.length; i++) {
            for (let j = 0; j < sortedRanks![i].length; j++) {
                combinedArray.push(sortedRanks![i][j])
            }
        }

        //return winner parents array
        let winnerParents = this.winnerParents(combinedArray, sortedRanks)
        // console.log("winnerParentsssssssss", winnerParents);
        let unique = [...new Set(winnerParents)];
        // console.log("unique", unique.sort(function (a, b) { return a - b }));

        // console.log(this.check(5,8, sortedRanks!));



        // for (let i = 0; i < sortedRanks!.length; i++) {
        //     for (let j = 0; j < sortedRanks![i].length; j++) {
        //         this.population[sortedRanks![i][j]].rank = i
        //     }
        // }
        // console.log("this popu in natural selection", this.population);

        // console.log("this is natureal seletion popu", this.population);



        // var results = [];

        // // Since you only want pairs, there's no reason
        // // to iterate over the last element directly
        // for (var i = 0; i < unique.length - 1; i++) {
        //   // This is where you'll capture that last value
        //   for (var j = i + 1; j < unique.length; j++) {
        //     results.push(unique[i] + ' ' + unique[j]);
        //   }
        // }

        // console.log(results);

        this.matingPool = [];
        // let maxFitness: number = 0;
        for (let i = 0; i < unique.length; i++) {
            this.matingPool.push(this.population[unique[i]])
        }
        // console.log("mating pool gente", this.matingPool, this.population);

        // let totalFitness: number = 0;
        // // console.log(this.population);


        // for (let i = 0; i < this.population.length; i++) {
        //     // console.log(this.population[i].fitness);

        //     totalFitness += this.population[i].fitness
        // }
        // this.averageFitness = totalFitness / this.population.length
        // console.log("this is average firtness", this.averageFitness);


        // for (let i = 0; i < this.population.length; i++) {
        //     //   let fitness = map(this.population[i].fitness, 0, maxFitness, 0, 1);
        //     // let n = Math.floor(this.population[i].fitness * 100); // Arbitrary multiplier, we can also use monte carlo method
        //     // console.log("thisis m",n);
        //     // console.log("this is population fitness", this.population[i].fitness);

        //     // for (let j = 0; j < this.population[i].fitness; j++) { // and pick two random numbers
        //     //     this.matingPool.push(this.population[i]);
        //     // }
        //     if (this.population[i].fitness <= this.averageFitness) {
        //         this.matingPool.push(this.population[i]);
        //     }
        // }
        // console.log(this.matingPool);
    }

    winnerParents(combinedArray: any[], sortedRanks: string | any[] | undefined) {
        let finalParents = []
        for (let i = 0; i < combinedArray.length; i++) {
            for (let j = 0; j < combinedArray.length; j++) {
                if (combinedArray[i] == combinedArray[j]) {
                    continue;
                }
                if (combinedArray[i] != combinedArray[j]) {
                    let outcome = this.check(combinedArray[i], combinedArray[j], sortedRanks!)
                    //if outcome is true it means that both the index are present in same subArray of sortedRanks and hence we have to crowding distance
                    if (outcome) {
                        let subArrayOfTwo = []
                        subArrayOfTwo.push(combinedArray[i])
                        subArrayOfTwo.push(combinedArray[j])
                        let winnerParent = this.doCrowdingDistance(subArrayOfTwo, 1)
                        finalParents.push(winnerParent[0])
                        // console.log("winner parent", combinedArray[i], combinedArray[j], winnerParent);

                    } else {
                        //    console.log("in false", combinedArray[i], combinedArray[j],);

                        let winnerOfTwoDifferentRanks = this.giveBestRankSolution(combinedArray[i], combinedArray[j], sortedRanks)
                        //    console.log("winner of two dirret ranks", winnerOfTwoDifferentRanks);
                        finalParents.push(winnerOfTwoDifferentRanks)

                    }

                }

            }
        }
        return finalParents
    }
    giveBestRankSolution(a: number, b: number, sortedRanks: string | any[] | undefined) {
        let rankA: number
        let rankB: number
        let winner

        for (let i = 0; i < sortedRanks!.length; i++) {
            if (sortedRanks![i].includes(a)) {
                rankA = i
            }
        }

        for (let i = 0; i < sortedRanks!.length; i++) {
            if (sortedRanks![i].includes(b)) {
                rankB = i
            }
        }


        // console.log("this is rankA, rankB", rankA!, rankB!);

        if (rankA! < rankB!) {
            winner = a
        } else {
            winner = b
        }
        return winner
    }
    // naturalSelection(){
    //     this.matingPool = [];

    // }
    generate() {
        // console.log("in genreate this mating pool", this.matingPool, this.population);

        // this.newChild = []

        // var results = [];

        // // Since you only want pairs, there's no reason
        // // to iterate over the last element directly
        // for (var i = 0; i < unique.length - 1; i++) {
        //   // This is where you'll capture that last value
        //   for (var j = i + 1; j < unique.length; j++) {
        //     results.push(unique[i] + ' ' + unique[j]);
        //   }
        // }

        // console.log(results);
        // console.log("this.matingPool.length", this.matingPool.length);

        // for(let i=0; i<this.matingPool.length; i++){
        //     for(let j=0; j< this.matingPool.length; j++){
        //         if(i==j){
        //             continue;
        //         }
        //         if(i!=j){
        //             let partnerA = this.matingPool[i];
        //             let partnerB = this.matingPool[j];
        //             let child = partnerA.crossover(partnerB);
        //             this.population.push(child)

        //         }
        //     }
        // }
        let newPopQ = []
        // console.log("new child - total popu", this.population.length, this.matingPool.length);
        for (let i = 0; i < this.population.length; i++) {
            let a = Math.floor(Math.random() * Math.floor(this.matingPool.length));
            let b = Math.floor(Math.random() * Math.floor(this.matingPool.length));
            let partnerA = this.matingPool[a];
            let partnerB = this.matingPool[b];
            // console.log("partner A",partnerA);
            // console.log("partner B", partnerB);


            let child = partnerA.crossover(partnerB);
            // console.log("Before mutation", child)
            child.mutate(this.mutationRate)
            // console.log("after mutation",mutateChild)
            newPopQ.push(child)
        }
        // console.log("final populatin length", this.population, this.population.length, newPopQ);
        // console.log("concatinated array", this.population.concat(newPopQ));
        this.population = this.population.concat(newPopQ)
        this.generations++
    }


    updatePopulation(sortedArray: any[]) {
        let emptyArray = []

        for (let i = 0; i < sortedArray.length; i++) {
            for (let j = 0; j < sortedArray[i].length; j++) {
                emptyArray.push(this.population[sortedArray[i][j]])
            }
        }
        // console.log("emoty array now", emptyArray);
        this.population = emptyArray

    }

    evaluate() {
        for (let i = 0; i < this.population.length; i++) {
            if (this.population[i].fairness == 0 && this.population[i].staffing == 0) {
                this.best = this.population[i].genes;
                this.finished = true;
                break;
            }
        }
    }

    isFinished() {

        return this.finished
    }


}

export default Population;