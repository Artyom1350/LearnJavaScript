class User{
    name:string;
    lastname:string;
    constructor(_name:string,_lastname?:string){
        this.name=_name;
        if(_lastname){
            this.lastname=_lastname;
        }
    };
    showName():void {
        if(this.lastname){
            const header:HTMLElement|null= document.getElementById('header');
            header!.innerHTML="Привет "+this.name+" "+this.lastname;        
        }
    }
}
let oleg:User=new User('Олег','Олегович');
oleg.showName();

//двойной тип
let id:number|string;
console.log(id=3);
console.log(id='oleg');

//тип
type item={id:number,name:string};
let obj:item={id:1,name:'Яблоко'};
console.log(obj);
//Расширение
type itemPrice=item & {price:number};
let item:itemPrice={id:2,name:'Яблоко',price:30};
console.log(item);

//assertion
const header1=<HTMLElement>document.getElementById('header');
const header2=document.getElementById('header') as HTMLElement;
console.log(header1);

//Кортеж
let users: [number,string];

//Только для чтения : readonly

//Перечисление enum
enum Season { Winter, Spring, Summer, Autumn };
let current: Season = Season.Summer;
console.log(current);       // 2
current = Season.Autumn; // изменение значения

//Абстрактные классы

abstract class Figure {
    getArea(): void{
        console.log("Not Implemented")
    }
}
class Rectangle extends Figure{
     
    constructor(public width: number, public height: number){ 
        super();
    }
     
    getArea(): void{
        let square = this.width * this.height;
        console.log("area =", square);
    }
}
 
let someFigure: Figure = new Rectangle(20, 30)
someFigure.getArea();   // area = 600

//Интерфейсы

interface IOUser{
    id:number,
    name:string,
}
let emp:IOUser={
    id:1,
    name:'oleg'
}
//instence of - проверка объекта на принаджлежность к классу