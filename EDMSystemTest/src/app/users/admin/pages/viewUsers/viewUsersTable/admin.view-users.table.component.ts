import { AdminUsersForm } from '../usersForm/admin.users-form.component';
import { ApiService } from './../../../../../requests/api.service';
import { UsersService } from './../../../services/users.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'admin-view-users-table',
    templateUrl: './admin.view-users.table.component.html',
    providers: [ApiService, UsersService ]
})
export class AdminViewUsersTableComponent implements OnInit{
    users=null;
    @ViewChild(AdminUsersForm)
    viewChild: AdminUsersForm

    constructor(private usersService: UsersService){
        
    }
    ngOnInit(): void {
        this.update();
    }
    update(){
        this.usersService.getUsers().subscribe((data)=>{
            this.users=data;
            console.log(data)
        })
    }
    changeUser(id){
        this.usersService.getUser(id).subscribe((data)=>{
            this.viewChild.update(data);
        })
    }
    removeUser(id){
        if(confirm('Вы точно хотите удалить пользователя?')){
            this.usersService.removeUser(id).subscribe((data)=>{
                console.log(data);
                alert('Пользователь успешно удален!')
            })
            this.update();    
        }
    }
}