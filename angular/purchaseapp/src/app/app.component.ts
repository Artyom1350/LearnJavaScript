import { Component } from '@angular/core';

class Item{
    purchase:string;
    done:boolean;
    price:number;

    constructor(purchase:string,price:number){
        this.purchase=purchase;
        this.done=false;
        this.price=price;
    }
}

@Component({
    selector:'my-app',
    template:`<div class="page-header"><h1>Список покупок</h1></div>
        <div class="panel">
            <div class="form-inline">
                <div class="form-group">
                    <div class="col-md-8">
                        <input [(ngModel)]="text" class="form-control" placeholder="Название">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-md-6">
                        <input type="number"  [(ngModel)]="price" class="form-control" placeholder="Цена">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-md-offset-2 col-md-8">
                        <button class="btn btn-default" (click)="addItem(text, price)">Добавить</button>
                    </div>
                </div>
            </div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Предмет</th>
                        <th>Цена</th>
                        <th>Куплено</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let item of items">
                        <td>{{item.purchase}}</td>
                        <td>{{item.price}}</td>
                        <td><input type="checkbox" [(ngModel)]="item.done"></td>
                    </tr>
                </tbody>
            </table>
        </div>`
})
export class AppComponent{
    text: string="";
    price:number=0;

    items: Item[]=[
        {purchase:'Хлеб',done:false,price:23},
        {purchase:'Молоко',done:true,price:55},
        {purchase:'Яблоки',done:false,price:33}
    ];

    addItem(text:string,price:number): void{
        if(text==null || text.trim()=='' || price==null){
            return;
        }
        this.items.push(new Item(text,price));
    }
}