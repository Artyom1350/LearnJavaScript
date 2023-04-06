interface user{
    id:number;
    name: string;
    email: string;
    password: string;
    role: string;
}

export class UsersService{
    users:user[]=[{id:1,name:'oleg',email:'test@mail.ru',password:'asdfg123',role:'user'},{id:2,name:'oleg1',email:'test1@mail.ru',password:'asdfg123',role:'admin'}]
}