class Animals
{
    public type:string;
    protected color:string;

    public constructor(type?:string)
    {
        this.type=type;
    }
    public display():void{
        console.log(this.type);
    }
}
let animals1:Animals=new Animals("Herbivores");
let animals2=new Animals("Carnivores");
let animals3=new Animals();

animals1.display();
animals2.display();
animals3.display();
class Dogs extends Animals implements Pet{
    public constructor(type:string,color:string)
    {
        super(type);
        this.color=color;
    }
    run()
    {
        console.log("Dog is running"+this.color+" "+this.type);
    }
    play()
    {
        console.log("Dog is playing");
    }
}
let dogs=new Dogs("carnivores","Black");
dogs.run();
dogs.play();
interface Pet{
    play();
}