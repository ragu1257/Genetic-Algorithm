/* eslint-disable */
import DNA from './dna'
import Population from './population'
import {timetable} from "./timetable"
import {employee} from "./interface"
import {empPower} from "./empPower"

function createPopulation(){
  const pop_size: number = 10;
  const population_number = 10;
  
  const pop = new Population(pop_size);
  let generattion_array: number[] = []
  let best_pop_array: number[] = []
  let firstIndexShiftArray: any[] = []
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

    pop.calcFitness()
    // console.log("new fitness", pop);
  
    //again sort the complete population with added new generation
    let newSortedPop = pop.nonDominatedSorting(pop_size)
  //   console.log("new sorted half array", newSortedPop);
  // console.log("popu before", pop.population);
  
  //update the existing population with newly generated and sorted population
  pop.updatePopulation(newSortedPop)
  // console.log("popu after", pop.population);
  // console.log("sorted new population", pop.nonDominatedSorting(pop_size),pop.nonDominatedSorting(pop_size)[0]);
  
  
  //first ranking array of population
  final_rank_index = (pop.nonDominatedSorting(pop_size)[0])
  // console.log("final rank index", final_rank_index);
  
  final_pop_population = pop.population
  // console.log("final population", final_pop_population);
  

    pop.evaluate();
    firstIndexShiftArray = final_pop_population[final_rank_index[0]].genes
    // console.log("shifttttttttttttt test array", firstIndexShiftArray);
    
    // console.log("generation number", pop.generations);
    // console.log("best ", pop.best);
    // console.log("pop.bestFitness", pop.bestFitness);
  
  
    // generattion_array.push(pop.generations)
    // console.log("generatoin array", generattion_array);
    
    // best_pop_array.push(pop.bestFitness)
  
  
    // firstIndexShiftArray = pop.best
    // if(i == population_number-1){
    //   // finalTableArray = pop.best
    //   empPower(firstIndexShiftArray)
    //   // timetable(firstIndexShiftArray)
    //   // console.log("last array of population", pop.best);
      
    // }
    if (pop.isFinished()) {
      break;
    }
  }

  return {firstIndexShiftArray, best_pop_array, final_rank_index, final_pop_population}
}

export function task() {
// console.log("final_rank_index",final_rank_index, final_pop_population);
// let {firstIndexShiftArray, final_rank_index, final_pop_population,generattion_array, best_pop_array}=population()
// console.log("this is task");

 let {firstIndexShiftArray, best_pop_array, final_rank_index, final_pop_population} = createPopulation()
  const {officeOpenTimings, demand, shift, workArea, stuffingFinal, finalOverstuffing, finalUnderStuffing, finalUnderTime, finalOverTime } = timetable(firstIndexShiftArray, employee)

  
// console.log("shift",shift);

  
  return { officeOpenTimings, demand, shift, workArea, stuffingFinal, best_pop_array, finalOverstuffing, finalUnderStuffing, finalUnderTime, finalOverTime, final_rank_index, final_pop_population }



}