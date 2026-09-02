
class CounterUpdate{
    constructor(){
        this.count=0;
    }
    increment() {
        this.count++;
        console.log(this.count);
    }
    reset(){
        this.count=0;
        console.log(this.count);
    }
}
let c = new CounterUpdate();

c.increment();
c.increment();
c.increment();
c.reset();
c.increment();
c.increment();
c.increment();
