var {calculate_fitness} = require('./fitness.js')

var medians = [
  {x: 2, y: 4, c: 100},
  {x: 3, y: 3, c: 50},
  {x: 6, y: 9, c: 300},
  {x: 2, y: 2, c: 100},
  {x: 0, y: 4, c: 150},
]

var demands = [
  {x: 0, y: 2, c: 100},
  {x: 4, y: 8, c: 50},
  {x: 2, y: 2, c: 125},
  {x: 2, y: 3, c: 50},
  {x: 6, y: 1, c: 75},
  {x: 3, y: 4, c: 125},
  {x: 4, y: 9, c: 125},
  {x: 5, y: 5, c: 50},
]

var total_capacities = 0
console.log(`medians: ${medians.length}:`)
for(var i=0; i<medians.length; i++){
  console.log(`${i}: loc(${medians[i].x},${medians[i].y}) => c(${medians[i].c})`)
  total_capacities += medians[i].c
}
console.log(`total capacities: ${total_capacities}`)

console.log('============================================')
var total_needs = 0
console.log(`demands: ${demands.length}:`)
for(var i=0; i<demands.length; i++){
  console.log(`${i}: loc(${demands[i].x},${demands[i].y}) => c(${demands[i].c})`)
  total_needs += demands[i].c
}
console.log(`total capacities: ${total_needs}`)

var generate_random_chromosome = (p, n) => {
  var chromosome = []
  for(var i=0; i<n; i++)
    chromosome[i] = parseInt(Math.random() * p)
  return chromosome
}

var is_the_chromosome_valid = (chromosome, medians, demands) => {
  var needs = []
  for(var i=0; i<medians.length; i++)
    needs[i] = 0
  for(var i=0; i<chromosome.length; i++)
    needs[chromosome[i]] += demands[i].c
  console.log(needs)
  for(var i=0; i<needs.length; i++)
    if(needs[i] > medians[i].c)
      return false
  return true
}
chromosome = generate_random_chromosome(medians.length, demands.length)
console.log(`chromsome: ${chromosome}`)
is_valid = is_the_chromosome_valid(chromosome, medians, demands)
console.log(`chromosome is valid: ${is_valid}`)