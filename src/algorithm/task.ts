/* eslint-disable */
import DNA from './dna'
import Population from './population'
import {timetable} from "./timetable"
import {empPower} from "./empPower"

const pop_size: number = 100;
const population_number = 50;

const pop = new Population(pop_size);
let generattion_array: number[] = []
let best_pop_array: number[] = []
let shiftTestArray: any[] = []
let finalTableArray: any[] = []
let final_rank_index : number[] = []
let final_pop_population: any[] = []

for (let i = 0; i < population_number; i++) {
  // console.log("last pop again", pop);

  //NSGA-II -- give output of top ranks of half the popluation
  let sortedRanks = pop.nonDominatedSorting(pop_size)
  // console.log("natural selection", sortedRanks);

  //this will create a mating pool based on the winner from the sortedRanks
  pop.naturalSelection(sortedRanks)

  // console.log("generate");
  //creates a new population with crossover and mutation and adds it to the previous population
  pop.generate()
  // console.log("new pop", pop);

  // let sortedRanks2 = pop.nonDominatedSorting(pop_size)
  // console.log("sortedRanks2", sortedRanks2);

  // console.log("calc fitness");
  pop.calcFitness()
  // console.log("new fitness", pop);

  let newSortedPop = pop.nonDominatedSorting(pop_size)
  // console.log("new sorted half array", newSortedPop);

  //new population with sorted ranks
  pop.updatePopulation(newSortedPop)
// console.log("sorted new population", pop.nonDominatedSorting(pop_size),pop.nonDominatedSorting(pop_size)[0]);
final_rank_index = (pop.nonDominatedSorting(pop_size)[0])
final_pop_population = pop.population
  // console.log("updated popoulation", pop);

  // console.log("evaluate");
  pop.evaluate();
  // console.log("generation number", pop.generations);
  // console.log("best ", pop.best);
  // console.log("pop.bestFitness", pop.bestFitness);


  generattion_array.push(pop.generations)
  best_pop_array.push(pop.bestFitness)


  shiftTestArray = pop.best
  if(i == population_number-1){
    finalTableArray = pop.best
  // console.log("final table array", finalTableArray );
    empPower(pop.best)
    timetable(pop.best)
    // epPowerShift()
  }
  task()
  // taskTesting(pop.best)
  // console.log("thi si finished", pop.finished);
  if (pop.isFinished()) {
    break;
  }
}

export function task() {
// console.log("final_rank_index",final_rank_index, final_pop_population);

  const {officeOpenTimings, demand, shift, workArea, stuffingFinal, finalOverstuffing, finalUnderStuffing, finalUnderTime, finalOverTime } = timetable(shiftTestArray)

  
// console.log("shift",shift);

  
  return { officeOpenTimings, demand, shift, workArea, stuffingFinal, generattion_array, best_pop_array, finalOverstuffing, finalUnderStuffing, finalUnderTime, finalOverTime, final_rank_index, final_pop_population }



}
