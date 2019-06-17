const createPerson = (name, age) => {
  return { name: name,
          age: age,
         };
 
 
};

const getName = (object) => {
 return object.name;
};

const getProperty = (property, object) => object[property];

const hasProperty = (property, object) => {
  if(object.hasOwnProperty(property))
  {return Boolean(true)}
  else
  {return Boolean(false)}
};

const isOver65 = person => person.age > 65 ? true : false;

const getAges = people => people.map(person => person.age);

const findByName = (name, people) => people.find(person => person.name === name);
   

const findHondas = (cars) => cars.filter(car => car.manufacturer === 'Honda');

const averageAge = people => {
  const totalAge = people.reduce((total, person) => { return total + person.age},0); 
  const totalPeople = people.length;  
    return (totalAge/totalPeople);
};

const createTalkingPerson = (name, age) => {
  return {
    name: name, 
    age: age,
    introduce: (name1) => {
      return `Hi ${name1}, my name is ${name} and I am ${age}!`}
  }
  
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson,
};
