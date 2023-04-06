export class AuthUser{
    id: number;
    email: string;
    name: string;
    role: number;

    constructor(id:number, email:string, name: string, role: number){
        this.id=id;
        this.email=email;
        this.name=name;
        this.role=role;
    }
}