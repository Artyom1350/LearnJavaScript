import { FormControl } from '@angular/forms';


export function ValidateDate(control: FormControl) {
    let date=new Date(control.value);
    if(date.getTime() < (Date.now()+1.728e+8)){
        return { invalidDate: true };
    }
    return null;
}