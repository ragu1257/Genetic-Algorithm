import DNA from './dna'
// import { TARGET } from './target.js';
/* eslint-disable */

class Population {

    private population: Array<DNA> = [];
    finished = false;
    matingPool: Array<DNA> = []
    best: Array<DNA> = []
    mutationRate = 0.01
    generations = 0
    // best: string = ""
    perfectScore = 1
    averageFitness = 0
    bestFitness!: number;
    constructor(popSize: number) {
        for (let i = 0; i < popSize; i++) {
            this.population.push(new DNA())
        }


        this.calcFitness()

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

    calcFitness() {
        this.calcStaffing();
        // console.log("it kkis population", this.population);
        this.calcStaffTiming();
        for (let i = 0; i < this.population.length; i++) {
            this.population[i].calcFitness()
        }
    }

    //NSGA-II
    nonDominatedSorting() {
        let finalRanks: any[] = []
        // console.log(this.population);
        if (this.population) {

            // console.log("popu", this.population);

            for (let L = 0; L < this.population.length; L++) {
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

        let finalSortRanks = this.crowdingDistance(finalRanks)

    }

    crowdingDistance(finalRanks: any[]) {
        let total = 0;
        let totalArray = []

        for (let i = 0; i < finalRanks.length; i++) {
            // console.log(finalRanks[i].length);

            total += finalRanks[i].length;
            // console.log(total);

            if (total <= Math.floor(this.population.length / 2)) {
                totalArray.push(finalRanks[i])
            } else {
                // console.log(finalRanks[i]);

                this.doCrowdingDistance(finalRanks[i])
                break;
            }
        }
        // console.log("final array", totalArray, total);

    }


    doCrowdingDistance(rankArray: any[]) {
        console.log(rankArray);
        interface objArray {
            popnumber?: number,
            crowdingDistance?: number,
            staff?: number,
            time?: number,
        }
        let objInfo: objArray[] = []

        for (let i = 0; i < rankArray.length; i++) {
            objInfo.push({ popnumber: rankArray[i], staff: this.population[rankArray[i]].staffing, time: this.population[rankArray[i]].staffTime })

        }


        let sortStaff: any[] = []
        objInfo.forEach(val => sortStaff.push(Object.assign({}, val)));

        sortStaff = sortStaff.sort((a, b) => (a.staff! < b.staff! ? -1 : 1));
        sortStaff[0].crowdingDistance = Infinity
        sortStaff[sortStaff.length - 1].crowdingDistance = Infinity
        

        let sortTime: any[] = []
        objInfo.forEach(val => sortTime.push(Object.assign({}, val)));
        sortTime = sortTime.sort((a, b) => (a.time! < b.time! ? -1 : 1));
        sortTime[0].crowdingDistance = Infinity
        sortTime[sortTime.length - 1].crowdingDistance = Infinity

        console.log("finally", sortStaff,sortTime);
        // console.log("this pop", this.population);

        let maxStaffing = Math.max.apply(Math, this.population.map(function (o) { return o.staffing; }))
        let maxTiming = Math.max.apply(Math, this.population.map(function (o) { return o.staffTime; }))
        // let minStaffing = Math.min.apply(Math, this.population.map(function (o) { return o.staffing; }))
        // let minTiming = Math.min.apply(Math, this.population.map(function (o) { return o.staffTime; }))
        let minStaffing = 0
        let minTiming = 0
        // console.log("max", maxStaffing, maxTiming, minStaffing, minTiming);
        let newsortStaff: any[] = []
        sortStaff.forEach(val => newsortStaff.push(Object.assign({}, val)));

        for(let i=1; i<newsortStaff.length-1;i++){            
            newsortStaff[i].crowdingDistance = ((newsortStaff[i+1].staff! - newsortStaff[i-1].staff!)/(maxStaffing-minStaffing))
        }
        let newsortTime: any[] = []
        sortTime.forEach(val => newsortTime.push(Object.assign({}, val)));
        for(let i=1; i<newsortTime.length-1;i++){            
            newsortTime[i].crowdingDistance = ((newsortTime[i+1].time! - newsortTime[i-1].time!)/(maxTiming-minTiming))
        }

        console.log("final ---", newsortStaff, newsortTime);

        // const newData = sortStaff.map((item, row) => {
        //     const found = sortTime.find((element) => item.popnumber == element.popnumber);
        //     return { ...item, ...found };
        //  });
        //  console.log(newData);
        
        

    }
    // nonDominatedSorting(){
    //    let front: any[]
    // this.population.forEach((p, indexP) => {

    //     p.dominatedSolutions = [];
    //     p.dominationCount = 0;

    //     this.population.forEach((q, indexQ) => {

    //         if (indexP === indexQ) return;
    //         if (this.nonDominatedSolution(p,q)) {
    //             p.dominatedSolutions.push(q);
    //         } else if (this.nonDominatedSolution(q,p)) {
    //             p.dominationCount++;
    //         }
    //     });        
    //     if (p.dominationCount === 0) {

    //         p.rank = 1;
    //         front[0].push(p)
    //     }
    // });

    // let i = 0;
    // while (front![i].length > 0) {
    //     let nextFront: any[] = [];
    //     front![i].forEach((p: { dominatedSolutions: any[]; }) => {
    //         p.dominatedSolutions.forEach((q: { dominationCount: number; rank: number; }) => {
    //             q.dominationCount--;
    //             if (q.dominationCount === 0) {
    //                 q.rank = i + 2;
    //                 nextFront.push(q);
    //             }
    //         });
    //     });
    //     i++;
    //     front!.push(nextFront);
    // }
    // console.log(front!);

    // // return front;
    // }

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

        if (this.population[i].staffing >= this.population[j].staffing && this.population[i].staffTime >= this.population[j].staffTime) {
            if (this.population[i].staffing > this.population[j].staffing || this.population[i].staffTime > this.population[j].staffTime) {
                return true
            }
        } else {
            return false
        }
    }

    //selection based on mating pool with ranking percentage
    naturalSelection() {
        this.matingPool = [];
        // let maxFitness: number = 0;
        // for (let i = 0; i < this.population.length; i++) {
        //     if (this.population[i].fitness > maxFitness) {
        //         maxFitness = this.population[i].fitness;
        //     }
        // }
        let totalFitness: number = 0;
        // console.log(this.population);


        for (let i = 0; i < this.population.length; i++) {
            // console.log(this.population[i].fitness);

            totalFitness += this.population[i].fitness
        }
        this.averageFitness = totalFitness / this.population.length
        // console.log("this is average firtness", this.averageFitness);


        for (let i = 0; i < this.population.length; i++) {
            //   let fitness = map(this.population[i].fitness, 0, maxFitness, 0, 1);
            // let n = Math.floor(this.population[i].fitness * 100); // Arbitrary multiplier, we can also use monte carlo method
            // console.log("thisis m",n);
            // console.log("this is population fitness", this.population[i].fitness);

            // for (let j = 0; j < this.population[i].fitness; j++) { // and pick two random numbers
            //     this.matingPool.push(this.population[i]);
            // }
            if (this.population[i].fitness <= this.averageFitness) {
                this.matingPool.push(this.population[i]);
            }
        }
        // console.log(this.matingPool);
    }

    // naturalSelection(){
    //     this.matingPool = [];

    // }
    generate() {
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
            this.population[i] = child
        }
        this.generations++
    }

    evaluate() {

        let worldrecord = 1000000000000000000;
        let index = 0;
        for (let i = 0; i < this.population.length; i++) {
            // console.log("evalutate is called", this.population[i].fitness );

            if (this.population[i].fitness < worldrecord) {

                index = i;
                worldrecord = this.population[i].fitness;
                // console.log("orldRecord",this.population[i].fitness);

            }
        }

        this.best = this.population[index].genes;
        // console.log("this is best Record", worldrecord);
        this.bestFitness = worldrecord

        if (worldrecord == 0) {
            this.finished = true;
        }
        // console.log("this is finished", this.finished);

    }

    isFinished() {

        return this.finished
    }


}

export default Population;