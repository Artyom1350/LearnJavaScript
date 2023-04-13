import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ApiService } from 'src/app/requests/api.service';
import { UsersService } from '../../../services/users.service';
@Component({
    selector: 'users-form',
    templateUrl: './admin.users-form.component.html',
    providers: [ApiService, UsersService]
})
export class AdminUsersForm implements OnInit{

    userForm:FormGroup;
    mode:string= 'add';
    userId:number;

    @Output() childEvent=new EventEmitter();

    departments;
    department_parts;

    constructor(private usersService: UsersService){
        this.userForm=new FormGroup({
            'userSurname':new FormControl('',[
                Validators.required,
                Validators.minLength(3),
                Validators.pattern('^[a-zA-Zа-яА-Я][a-zA-Zа-яА-Я]{1,20}$') 
            ]),
            'userName': new FormControl('',[
                Validators.required,
                Validators.minLength(3),
                Validators.pattern('^[a-zA-Zа-яА-Я][a-zA-Zа-яА-Я]{1,20}$')
            
            ]),
            'userLastname': new FormControl('',[
                Validators.required, 
                Validators.minLength(3),
                Validators.pattern('^[a-zA-Zа-яА-Я][a-zA-Zа-яА-Я]{1,20}$')
            ]),
            'userEmail':new FormControl('',[
                Validators.required, 
                Validators.email
            ]),
            'userPassword':new FormControl('',[
                Validators.required,
                Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'),
            ]),
            'userDepartment': new FormControl('',[Validators.required]),
            'userDepartment_part':new FormControl('', [Validators.required])
        })
    }

    ngOnInit(): void {
        this.usersService.getDepartments().subscribe((data)=>{
            this.departments=data;
        })
    }

    getDepartmentParts(event){
        this.usersService.getDepartmentParts(+event.target.value).subscribe((data)=>{
            this.department_parts=data;
        })
    }


    update(data){
        this.validate();
        this.changeForm();
        let user=data['user'];
        this.userId=user.id;
        this.userForm.patchValue({
            userSurname:user.name.split(' ')[0],
            userName:user.name.split(' ')[1],
            userLastname:user.name.split(' ')[2],
            userEmail: user.email,
            userPassword: '',
            userDepartment: data['department'],
            userDepartment_part: user.department_part_id
        })

        let userDepartment=data['department'];
        let department=document.getElementById('department').getElementsByTagName('option');
        for(let i=0;i<department.length;i++){
            if(department[i].value==userDepartment){
                department[i].selected=true;
            }
        }
        this.usersService.getDepartmentParts(userDepartment).subscribe((data)=>{
            this.department_parts=data;
        });
        setTimeout(()=>{this.take_department_part(user)},1000);
    }
    validate(){
        this.userForm.get('userPassword').clearValidators();
        this.userForm.reset();
        this.userForm.markAsTouched();
    }
    changeForm(){
        this.mode='change';
        document.getElementById('addBtn').innerHTML='Редактировать';
    }

    take_department_part(user){
        let departmentParts=document.getElementById('department_part').getElementsByTagName('option');
        for(let i=0;i<departmentParts.length;i++){
            if(departmentParts[i].value==user.department_part_id){
                departmentParts[i].selected=true;
            }
        }        
    }

    clear(){
        this.userForm.value['userSurname']='';
        this.userForm.value['userName']='';
        this.userForm.value['userLastname']='';
        this.userForm.value['userEmail']='';
        this.userForm.value['userPassword']='';
        this.userForm.value['userDepartment']='';
        this.userForm.value['userDepartment_part']='';
        this.department_parts=null;
        this.userForm.reset();

        this.mode='add';
        document.getElementById('addBtn').innerHTML='Добавить';
        this.userForm.updateValueAndValidity();
    }

    addOrChange(){
        if(this.mode=='add'){
            console.log(this.userForm.value);
            this.usersService.addUser(
                this.userForm.value['userSurname']+' '+this.userForm.value['userName']+' '+this.userForm.value['userLastname'], 
                this.userForm.value['userEmail'],
                this.userForm.value['password'],
                this.userForm.value['userDepartment_part'],
            ).subscribe({next:(data)=>{
                this.childEvent.emit();
                alert('Пользователь успешно добавлен!');
                this.clear();
            },
            error:()=>{
                alert('Этот email занят!')
            }
            })
        }
        else if(this.mode=='change'){
            console.log(this.userForm.value);
            this.usersService.changeUser(
                this.userId,
                this.userForm.value['userSurname']+' '+this.userForm.value['userName']+' '+this.userForm.value['userLastname'], 
                this.userForm.value['userEmail'],
                this.userForm.value['password'],
                this.userForm.value['userDepartment_part'],
            ).subscribe({
                next:(data)=>{
                    this.childEvent.emit();
                    this.clear();
                    alert('Пользователь успешно изменен!');
                },
                error:()=>{
                    alert('Этот email занят!')
                }
            })
        }
    }
}