import { Component } from '@angular/core';

export class Phone{
    constructor(public title:string, public price: number, public company: string){}
}

@Component({
    selector: 'my-app',
    template: `<div>
        <div class="form-group">
            <label>Название модели</label>
            <input class='form-control' name='title' [(ngModel)]='title'/>
        </div>
        <div class="form-group">
            <label>Цена</label>
            <input type='number' class='form-control' name='price' [(ngModel)]='price'/>
        </div>
        <div class="form-group">
            <label>Производитель</label>
            <select class="form-control" name="company" [(ngModel)]="company">
                <option *ngFor="let comp of companies" [value]="comp">{{comp}}</option>
            </select>
        </div>
        <div class="form-group">
            <button class='btn btn-default' (click)='addPhone()' name='title'>Добавить</button>
        </div>
    </div>
    <div><h3>Добавленные элементы</h3>
            <ul>
                <li *ngFor="let p of phones">{{p.title}} ({{p.company}}) - {{p.price}}</li>
            </ul>
    </div>`
})
export class AppComponent{
    title: string="";
    price: number=0;
    company: string="";
    companies: string[]=["Apple","Huawei","Xiaomi","Sumsung","LG","Motorola"];

    phones: Phone[]=[];

    addPhone(){
        this.phones.push(new Phone(this.title,this.price,this.company));
    }
}