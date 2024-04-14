class Car{
    constructor(brand){
        console.log("Car constructor is created");
        this.brand=brand;
    }
     start=()=>{
       console.log("Car has started");
    }
    stop=()=>{
        console.log("Car has stopped");
     }
    
    
}
let Nano=new Car("Tata");
Nano.start();
let Swift=new Car();
Swift.stop();
