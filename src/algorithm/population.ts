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
    constructor(popSize: number) {
        for (let i = 0; i < popSize; i++) {
            this.population.push(new DNA())
        }

        this.calcFitness();
        // console.log("it kkis population", this.population);

    }
    calcFitness() {
        for (let i = 0; i < this.population.length; i++) {
            this.population[i].calcFitness();

        }
    }


    //selection based on mating pool with ranking percentage
    // naturalSelection() {
    //     this.matingPool = [];
    //     // let maxFitness: number = 0;
    //     // for (let i = 0; i < this.population.length; i++) {
    //     //     if (this.population[i].fitness > maxFitness) {
    //     //         maxFitness = this.population[i].fitness;
    //     //     }
    //     // }
    //     let totalFitness: number = 0;

    //     for (let i = 0; i < this.population.length; i++) {
    //         console.log(this.population[i].fitness);

    //         totalFitness += this.population[i].fitness
    //     }
    //     this.averageFitness = totalFitness / this.population.length
    //     // console.log("this is average firtness", this.averageFitness);


    //     for (let i = 0; i < this.population.length; i++) {
    //         //   let fitness = map(this.population[i].fitness, 0, maxFitness, 0, 1);
    //         // let n = Math.floor(this.population[i].fitness * 100); // Arbitrary multiplier, we can also use monte carlo method
    //         // console.log("thisis m",n);
    //         // console.log("this is population fitness", this.population[i].fitness);

    //         // for (let j = 0; j < this.population[i].fitness; j++) { // and pick two random numbers
    //         //     this.matingPool.push(this.population[i]);
    //         // }
    //         if (this.population[i].fitness >= this.averageFitness) {
    //             this.matingPool.push(this.population[i]);
    //         }
    //     }
    //     // console.log(this.matingPool);
    // }

    // naturalSelection(){
    //     this.matingPool = [];

    // }
    generate() {
        for (let i = 0; i < this.population.length; i++) {
            // let a = Math.floor(Math.random() * Math.floor(this.matingPool.length));
            // let b = Math.floor(Math.random() * Math.floor(this.matingPool.length));

            let partnerA = this.tournamentSelection(7);
            // console.log("partner A", partnerA);

            let partnerB = this.tournamentSelection(7);
            // console.log("partner B", partnerB);


            let child = partnerA.crossover(partnerB);
            // console.log("Before mutation", child)
            // child.mutate(this.mutationRate)
            // console.log("after mutation",mutateChild)
            this.population[i] = child
        }
        this.generations++
    }

    tournamentSelection(k: number) {

        let bestFitness: any
        for (let i = 1; i < k; i++) {
            let random = Math.floor(Math.random() * (this.population.length-1 - 0 + 1)) + 0;

            let ind = this.population[random]

            if (i == 1) {
                bestFitness = ind
                // console.log("in tournament", bestFitness);

            } else {
                if (ind.fitness < bestFitness.fitness) {
                    // console.log("this is ind", ind);

                    bestFitness = ind
                }
            }


        }

        return bestFitness
    }

    evaluate() {

        let worldrecord = 100000000000000000000;
        let index = 0;
        for (let i = 0; i < this.population.length; i++) {
            // console.log("evalutate is called", this.population[i].fitness);

            if (this.population[i].fitness < worldrecord) {

                index = i;
                worldrecord = this.population[i].fitness;
                // console.log("orldRecord",this.population[i].fitness);

            }
        }

        this.best = this.population[index].genes;
        console.log("this is best Record", worldrecord);

        if (worldrecord < 2) {
            this.finished = true;
        }
        // console.log("this is finished", this.finished);

    }

    isFinished() {

        return this.finished
    }


}

export default Population;