const add = (x,y,z) => x + y + z;

/*const addPartial = x =>
            (y,z) => add (x, y, z);

        const add5 = addPartial (5);
        const sum = add(5, 6, 7);

        console.log(sum);*/
        
/*const addPartial = (x, y) =>
        z => add(x, y, z);

        const add5and6 = addPartial (5, 6);
        const sum = add5and6(7)
        console.log(sum);*/
        
//currying
        const addPartial = x =>
            y => 
            z=> add(x, y, z);
        const sum = addPartial(5)(6)(7);
              console.log(sum);