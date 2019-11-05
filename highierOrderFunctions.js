const divide = (x,y) => x/y;

const secondArguementIsntZero =func =>
    (...args) => {
        if (args[1]===0) {
            console.log ('Error: dividing by zero');
            return null;
        }

        return func (...args);
    }

    const divideSafe = secondArguementIsntZero(divide);
    console.log(divideSafe(7, 0));
    console.log(divideSafe(5, 3));