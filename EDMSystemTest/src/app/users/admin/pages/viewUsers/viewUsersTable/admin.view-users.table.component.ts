import { ApiService } from './../../../../../requests/api.service';
import { UsersService } from './../../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'admin-view-users-table',
    templateUrl: './admin.view-users.table.component.html',
    providers: [ApiService, UsersService ]
})
export class AdminViewUsersTableComponent implements OnInit{
    users=null;
    constructor(private usersService: UsersService){
        
    }
    ngOnInit(): void {
        this.update();
    }
    update(){
        this.usersService.getUsers().subscribe((data)=>{
            console.log(data);
            this.users=data;
        })
    }
}