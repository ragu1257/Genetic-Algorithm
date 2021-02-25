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

    naturalSelection() {
        this.matingPool = [];
        // let maxFitness: number = 0;
        // for (let i = 0; i < this.population.length; i++) {
        //     if (this.population[i].fitness > maxFitness) {
        //         maxFitness = this.population[i].fitness;
        //     }
        // }
        let totalFitness: number = 0;

        for (let i = 0; i < this.population.length; i++) {
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
            if (this.population[i].fitness >= this.averageFitness) {
                this.matingPool.push(this.population[i]);
            }
        }
        // console.log(this.matingPool);
    }

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
            // child.mutate(this.mutationRate)
            // console.log("after mutation",mutateChild)
            this.population[i] = child
        }
        this.generations++
    }

    evaluate() {

        let worldrecord = 0;
        let index = 0;
        for (let i = 0; i < this.population.length; i++) {
            // console.log("evalutate is called", this.population[i].fitness );

            if (this.population[i].fitness > worldrecord) {

                index = i;
                worldrecord = this.population[i].fitness;
                // console.log("orldRecord",this.population[i].fitness);

            }
        }

        this.best = this.population[index].genes;
        console.log("this is best Record", worldrecord);

        if(worldrecord > 0) {
          this.finished = true;
        }
        // console.log("this is finished", this.finished);

    }

    isFinished() {

        return this.finished
    }


}

export default Population;