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
  
  const updates = {
    name: 'Ronald Kyobe'
  };

  const numbers = [1,2,3,4,5]
  
  const newNumbers = [
    ...numbers,
    ...6,
  ];
 

  const personwithData = {
    name: person.name,
    ...carrerData,
  };

  const updatedPerson = {
    ...updates,
   ...carrerData, 
  }

  const numbers = [1, 2, 3, 4, 5];
  const newNumbers = [
      0,
      ...numbers,
      6,
  ];
  
  console.log(newNumbers);