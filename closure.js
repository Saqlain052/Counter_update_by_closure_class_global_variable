function counterUpdate(){
    let count = 0 ;
    function increment(){
        count++;
        console.log(count);
    } 
    function reset(){
        count = 0;
        console.log(count);
    }
    return {
        increment,reset
    };
}

let counter = counterUpdate();

counter.increment();
counter.increment();
counter.increment();
counter.reset();
counter.increment();






