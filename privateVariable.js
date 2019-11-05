const Person =  ({ name, age, job}) => {
    var _name = name;
    var _age = age; 
    var _job = job;

    return {
        getName: () => _name,
        getAge: () => _age,
        getJob: () => _job,

        setJob: newJob => _job = newJob,
        setAge: newAge => _age = newAge,
    };
}

const me = Person ({ name: 'Ronald', age: 25, job: 'developer'})
/*console.log(me.getJob());
me.setJob ('Senior developer');
console.log(me.getJob());*/
console.log(me.getAge());
me.setAge (28);
console.log(me.getAge());