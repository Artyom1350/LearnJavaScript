import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [FormsModule, ReactiveFormsModule, CommonModule],
    declarations: [AuthComponent],
})
export class AuthModule {}