import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

@NgModule({
    imports: [FormsModule, ReactiveFormsModule],
    declarations: [AuthComponent],
})
export class AuthModule {}