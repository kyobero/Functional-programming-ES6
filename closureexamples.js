const createPrinter = () =>{
    const myFavoriteNumber = 28;
    
    return () =>
    console.log ('My favorite number is ${myFavoriteNumber}');
    }
    
    const printer = createPrinter ();
    printer(); 

    
    

    