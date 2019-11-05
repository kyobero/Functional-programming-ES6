const sayHello = name => console.log('Hello' + name);
const sayHello2 = sayHello;
sayHello2('Ronald');

const myFuntion = true
    ? () => console.log ('First option')
    : () => console.log('Second option');
const fetchDataReal = () => {
    //time-intesive operations here!
}

const fetchDataFake = () => ({
    name: 'kyobe Rooney',
    age: 20,
});

const fetchData = Development
    ? fetchDataFake
    :fetchDataReal;

