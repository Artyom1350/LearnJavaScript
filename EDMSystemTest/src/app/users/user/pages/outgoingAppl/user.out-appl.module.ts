import { UserOutApplModalViewComponent } from './outgoingApplView/user.out-appl.modal-view.component';
import { UserOutApplTableComponent } from './outgoingApplTable/user.out-appl.table.component';
//import { UserInclApplTableModule } from './incomingApplTable/user.inc-appl.table.module';
import { UserOutApplComponent } from './user.out-appl.component';
import { UserOutApplModalComponent} from './outgoingApplModal/user.out-appl.modal.component'
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@NgModule({
    declarations: [UserOutApplComponent, UserOutApplTableComponent, UserOutApplModalViewComponent, UserOutApplModalComponent],
    imports: [/*UserInclApplTableModule*/FormsModule,ReactiveFormsModule, NgFor, NgIf],
    exports: [UserOutApplTableComponent, UserOutApplModalViewComponent, UserOutApplModalComponent]
})
export class UserOutApplModule{}