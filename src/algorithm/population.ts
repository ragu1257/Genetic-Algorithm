import DNA from './dna'
// import { TARGET } from './target.js';

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


}

export default Population;