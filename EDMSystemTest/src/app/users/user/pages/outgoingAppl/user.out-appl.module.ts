import { UserOutApplModalViewComponent } from './outgoingApplView/user.out-appl.modal-view.component';
import { UserOutApplTableComponent } from './outgoingApplTable/user.out-appl.table.component';
import { UserOutApplComponent } from './user.out-appl.component';
import { UserOutApplModalComponent} from './outgoingApplModal/user.out-appl.modal.component'
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';


@NgModule({
    declarations: [UserOutApplComponent, UserOutApplTableComponent, UserOutApplModalViewComponent, UserOutApplModalComponent],
    imports: [FormsModule,ReactiveFormsModule, CommonModule],
    exports: [UserOutApplTableComponent, UserOutApplModalViewComponent, UserOutApplModalComponent]
})
export class UserOutApplModule{}