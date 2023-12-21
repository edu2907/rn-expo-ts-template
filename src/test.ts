const favFruits: string[] = ['apple', 'banana', 'orange']

function addFruit(fruit: string) {
  favFruits.push(fruit)
  return 'Fruit added!'
}

export default addFruit
