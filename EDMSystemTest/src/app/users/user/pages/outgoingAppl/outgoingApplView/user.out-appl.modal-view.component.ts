import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'out-appl-view',
    templateUrl:'user.out-appl.modal-view.component.html'
})
export class UserOutApplModalViewComponent implements OnInit{
    @Input() outApplStatuses;
    status=['text-secondary','text-info','text-primary','text-success'];
    statusName:['Не прочитано','Прочитано','В работе','Готово'] =['Не прочитано','Прочитано','В работе','Готово'];
    constructor(){}

    ngOnInit(): void {
        console.log(this.status);
    }
}