const person = {
  name: 'Jimmy Smith',
  age: '10',
  hairColor: 'brown',
  eyeColor: 'blue',
};

const carrerData = {
  title: 'developer',
  company: 'Innovative computer systems',
};

const personwithData = {
  ...person,
  ...carrerData,
};