import Population from './population.js'

export function index() {
    const pop_size: number = 10;

    const pop = new Population(pop_size);
    for (let i = 0; i < 10; i++) {
        // console.log("natural selection");

        // pop.naturalSelection()
        // console.log("generate");

        pop.generate()

        // console.log("calc fitness");

        pop.calcFitness()
        // console.log("evaluate");

        pop.evaluate();
        console.log("generation number", pop.generations);
        console.log("best ", pop.best);
        // generatedDNA = pop.best
        // console.log("thi si finished", pop.finished);
        if (pop.isFinished()) {
            break;
        }
    }
}

